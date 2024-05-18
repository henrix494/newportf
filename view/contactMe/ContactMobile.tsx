import React from "react";
import Image from "next/image";
import { formDetail } from "@/constants/ContactSection/FormDetails";
export default function ContactMobile() {
  return (
    <div className="lg:hidden mt-10">
      <div className=" opacity-35">
        <Image
          className="w-screen"
          src={"/social/punkContact.jpg"}
          alt="ContactImg"
          width={500}
          height={500}
        />
      </div>
      <div className="text-center font-mono font-bold text-[8rem] leading-[82%] mb-10 ">
        <h3 className=" text-center">צור </h3>
        <h3 className=" text-center mr-8">איתי</h3>
        <h3 className=" text-center">קשר</h3>
      </div>
      {/* start of form */}
      <div>
        {formDetail.map((form) => {
          return (
            <div key={form.id} className=" flex flex-col items-center mb-5">
              <label className="text-4xl" htmlFor={form.name}>
                {form.placeholder}
              </label>
              <input
                className=" outline-none border-b-2 border-black"
                type={form.type}
                name={form.name}
                id={form.id}
              />
            </div>
          );
        })}
        <div className="  text-[8rem] font-extrabold flex justify-center font-mono cursor-pointer hover:opacity-40 border-t-2 border-black mt-20">
          שלח
        </div>
      </div>
    </div>
  );
}
