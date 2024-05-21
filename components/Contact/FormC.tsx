"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { formDetail } from "@/constants/ContactSection/FormDetails";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { MsgTypes } from "@/Model/msg";
import { Model } from "../model/Model";
type Inputs = {
  name: string;
  email: string;
  msg: string;
};
export default function FormC() {
  const [isModel, setIsModel] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isTyping, setIsTyping] = useState({
    formId: -1,
    isNowTyping: false,
  });
  const handleAnimationTyping = (formId: number) => {
    setIsTyping({ formId: formId, isNowTyping: true });
  };
  const onSubmit: SubmitHandler<Inputs> = async (data: MsgTypes) => {
    try {
      const sendData = await axios({
        method: "post",
        url: "http://localhost:3000/api/sendData",
        data: { ...data },
      });
      console.log(sendData.status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-[99.99999vw] lg:absolute bottom-[0%] border-t-2 border-black    ">
        <div className="flex h-[22.5vh] items-center ">
          <div className="w-[70%] h-[22.5vh] flex items-center border-l-2 border-black justify-center ">
            <form
              className="flex  w-[80%] justify-around"
              onSubmit={handleSubmit(onSubmit)}
            >
              {formDetail.map((form, index) => {
                return (
                  <div className=" relative " key={form.id}>
                    <label
                      className={` absolute  transition-all ${
                        isTyping.formId === index &&
                        isTyping.isNowTyping === true
                          ? " opacity-100 bottom-5"
                          : " opacity-0 bottom-0"
                      } `}
                      htmlFor={form.name}
                    >
                      {form.placeholder}
                    </label>
                    <input
                      type={form.type}
                      id={form.id}
                      className={`outline-none  ${
                        (errors.name && form.name === "name") ||
                        (errors.email && form.name === "email") ||
                        (errors.msg && form.name === "msg")
                          ? "border-b-2 border-[red]"
                          : "border-b-2 border-black "
                      }`}
                      placeholder={form.placeholder}
                      {...register(form.register as "name" | "email" | "msg", {
                        onChange: () => handleAnimationTyping(index),
                        onBlur: () =>
                          setIsTyping({ formId: -1, isNowTyping: false }),
                        required: true,
                      })}
                    />
                  </div>
                );
              })}
              <button
                type="submit"
                className="h-res_send_btn w-[30%] text-[8rem] font-extrabold flex justify-center font-mono cursor-pointer hover:opacity-40 absolute left-0 top-0"
              >
                שלח
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
