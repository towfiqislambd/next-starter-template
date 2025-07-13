"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrivateLayout from "@/Private/PrivateLayout";

const menuItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <PrivateLayout>
      <section className="min-h-screen w-full flex bg-gray-100 text-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md hidden md:block">
          <div className="h-16 px-6 flex items-center text-xl font-bold border-b">
            My Dashboard
          </div>
          <nav className="flex flex-col gap-1 p-4">
            {menuItems.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow flex flex-col">{children}</main>
      </section>
    </PrivateLayout>
  );
}
