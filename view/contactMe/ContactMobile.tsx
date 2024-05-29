"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { sendMSg } from "@/actions/sendData";

interface props {
  locale: string;
}

type Inputs = {
  name: string;
  email: string;
  msg: string;
};
export default function ContactMobile({ locale }: props) {
  const textT = useTranslations("contactSection");
  const fromText = useTranslations("contactSection");

  const mobileText = useTranslations("formDetails");
  const keys = ["formOne", "formTwo", "formThree"] as const;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    try {
      const dataFromServer = await sendMSg(data);
      if (dataFromServer?.ok) {
        toast.success(fromText("msgSend"), {
          icon: "👏",
          style: { backgroundColor: "black", color: "white" },
        });
      } else {
        toast.error(fromText("error"), {
          style: { backgroundColor: "black", color: "white" },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="lg:hidden mt-10 ">
      <div className=" opacity-35">
        <Image
          className="w-screen"
          src={"/social/punkContact.jpg"}
          alt="ContactImg"
          width={500}
          height={500}
        />
      </div>
      <div
        className={`text-center font-mono font-bold text-[2rem] leading-[82%] mb-10 mt-10 ${
          locale === "en" ? "hidden" : "block"
        } `}
      >
        <h3 className=" text-center"> צור איתי קשר</h3>
      </div>
      <div
        className={`text-center font-mono font-bold text-[2rem] leading-[90%] mb-10 ${
          locale === "he" ? "hidden" : "block"
        } `}
      >
        <h3 className=" text-center mt-10"> Contact Me</h3>
      </div>
      {/* start of form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {keys.map((form) => {
          return (
            <div
              key={mobileText(`${form}.id`)}
              className=" flex flex-col items-center mb-5"
            >
              <label className="text-2xl" htmlFor={mobileText(`${form}.name`)}>
                {mobileText(`${form}.placeholder`)}
              </label>
              <input
                className={` outline-none  ${
                  (errors.name && mobileText(`${form}.name`) === "name") ||
                  (errors.email && mobileText(`${form}.name`) === "email") ||
                  (errors.msg && mobileText(`${form}.name`) === "msg")
                    ? "border-b-2 border-[red]"
                    : "border-b-2 border-black "
                }`}
                type={mobileText(`${form}.type`)}
                id={mobileText(`${form}.id`)}
                {...register(
                  mobileText(`${form}.register`) as "name" | "email" | "msg",
                  { required: true }
                )}
              />
            </div>
          );
        })}
        <div className=" flex justify-center border-t-2 border-black mt-20">
          <button className=" text-[4rem] font-extrabold  font-mono cursor-pointer hover:opacity-40  ">
            {textT("send")}
          </button>
        </div>
      </form>
    </div>
  );
}
