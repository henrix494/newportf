import React from "react";
import { contactIcons } from "@/constants/ContactSection/contactText";
import Image from "next/image";
import FormC from "@/components/Contact/FormC";
export default function Contact() {
  return (
    <div className=" relative h-screen overflow-hidden max-lg:hidden">
      <div className=" h-[100px] border-b-2 border-b-black h-contact_main"></div>
      <div>
        <div className=" text-[14rem] flex flex-col gap-[-20px] relative max-lg:mr-[30%] mr-[22%] h-contact_res">
          <h2 className="text-[10rem] h-contact_main_zor  2xl:text-[12rem] font-mono font-extrabold">
            צור
          </h2>
          <h2 className="h-contact_main_zor  text-[12rem] absolute bottom-[-62%] right-0 font-mono font-extrabold">
            קשר
          </h2>
          <h3 className="text-xl absolute bottom-[-62%] right-0 text-[#5f5e5e] h-contact_main_q">
            אם יש לכם כל שאלה או הצעה לשיפור כתוב לנו
          </h3>
        </div>
      </div>
      <div className=" h_res_main_icons h-[77.3vh] pt-32 border-l-2 border-r-2 border-black absolute top-0 right-[10%] w-[200px] flex flex-col  justify-center items-center gap-5 ">
        {contactIcons.map((icon) => {
          return (
            <div
              className="w-[13vh] max-h hover:opacity-30 transition-all duration-700 cursor-pointer "
              key={icon.src}
            >
              <a href={icon.href} target="__blank">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.width}
                  height={icon.height}
                />
              </a>
            </div>
          );
        })}
      </div>

      <Image
        src={"/social/punkContact.jpg"}
        width={800}
        height={800}
        alt="test"
        className="lg:w-[45vw] absolute left-0 bottom-[25%] opacity-45 z-[-1] "
      />
      <FormC />
    </div>
  );
}