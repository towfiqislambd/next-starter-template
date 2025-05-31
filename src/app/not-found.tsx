"use client";
import notFound from "@/Assets/not-found.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <section className="py-[63px] lg:px-5 3xl:px-0">
      <div className="flex flex-col container items-center justify-center gap-y-8">
        <figure className="w-full md:w-[500px] xl:w-[582px] h-auto md:h-[300px] xl:h-[354px]">
          <Image
            src={notFound}
            width={582}
            height={354}
            alt="not found"
            className="!w-full !h-full !object-cover"
          />
        </figure>
        <div className="flex flex-col gap-y-6 items-center">
          <div className="flex flex-col gap-y-5 items-center">
            <h3 className="text-primary-text-blue font-[600] lg:leading-[120%]">
              Oops! page not found
            </h3>
            <p className="text-base text-[#808080] text-center max-w-[612] font-[400] leading-[150%]">
              Oops! It seems like the page you’re trying to reach doesn’t exist
              anymore or maybe it never did.
            </p>
          </div>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="w-auto h-auto px-5 py-3 bg-primary-blue text-white rounded-[43px] hover:bg-transparent hover:text-primary-blue border-[1px] border-transparent hover:border-primary-blue hover:border-solid ease-in-out duration-500 cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
