"use client";
import React from "react";
import Link from "next/link";
import { useRegister } from "@/Hooks/api/auth_api";

const Register = () => {
  const { mutateAsync: registrationMutation, isPending } = useRegister();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const data = {
      email,
      password,
      name: "user",
      password_confirmation: password,
    };
    await registrationMutation(data as any);
  };

  return (
    <section className="flex justify-center items-center pt-40">
      <div className="w-[400px] mx-auto">
        <h4 className="text-black font-merriweather text-center text-3xl mb-6">
          Sign Up
        </h4>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm">
              Email
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm">
              Password
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-secondary-blue py-3 font-semibold text-white transition-all"
          >
            {isPending ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="text-center">
            Already have account?{" "}
            <Link
              href={"/auth/login"}
              className="hover:underline text-blue-500"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
