"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { MsgTypes } from "@/Model/msg";
import { useTranslations } from "next-intl";
import { sendMSg } from "@/actions/sendData";
import { toast } from "react-hot-toast";
type Inputs = {
  name: string;
  email: string;
  msg: string;
};
interface props {
  locale: string;
}

export default function FormC({ locale }: props) {
  const formDetails = useTranslations("formDetails");
  const keys = ["formOne", "formTwo", "formThree"] as const;
  const fromText = useTranslations("contactSection");
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
    <>
      <div className="w-[99.99999vw] lg:absolute bottom-[0%] border-t-2 border-black    ">
        <div className="flex h-[22.5vh] items-center ">
          <div
            className={`w-[70%] h-[22.5vh] flex items-center  border-black justify-center ${
              locale === "en" ? "border-r-2" : "border-l-2"
            }`}
          >
            <form
              className="flex  w-[80%] justify-around"
              onSubmit={handleSubmit(onSubmit)}
            >
              {keys.map((form, index) => {
                return (
                  <div className=" relative " key={formDetails(`${form}.id`)}>
                    <label
                      className={` absolute  transition-all ${
                        isTyping.formId === index &&
                        isTyping.isNowTyping === true
                          ? " opacity-100 bottom-5"
                          : " opacity-0 bottom-0"
                      } `}
                      htmlFor={formDetails(`${form}.name`)}
                    >
                      {formDetails(`${form}.placeholder`)}
                    </label>
                    <input
                      type={formDetails(`${form}.type`)}
                      id={formDetails(`${form}.id`)}
                      className={`outline-none  ${
                        (errors.name &&
                          formDetails(`${form}.name`) === "name") ||
                        (errors.email &&
                          formDetails(`${form}.name`) === "email") ||
                        (errors.msg && formDetails(`${form}.name`) === "msg")
                          ? "border-b-2 border-[red]"
                          : "border-b-2 border-black "
                      }`}
                      placeholder={formDetails(`${form}.placeholder`)}
                      {...register(
                        formDetails(`${form}.register`) as
                          | "name"
                          | "email"
                          | "msg",
                        {
                          onChange: () => handleAnimationTyping(index),
                          onBlur: () =>
                            setIsTyping({ formId: -1, isNowTyping: false }),
                          required: true,
                        }
                      )}
                    />
                  </div>
                );
              })}
              <button
                type="submit"
                className={`h-res_send_btn w-[30%] text-[8rem] font-extrabold flex justify-center font-mono cursor-pointer hover:opacity-40 absolute ${
                  locale === "en" ? "right-0" : "left-0"
                }  top-0`}
              >
                {fromText("send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
