"use client";

import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
interface props {
  locale: string;
}
export default function Text({ locale }: props) {
  const containerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  const t = useTranslations("bigText");
  useGSAP(
    () => {
      gsap.to(".box", {
        opacity: 1,
        duration: 2,
        delay: 1,
      });
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      className={`absolute bottom-[-10%] lg:bottom-[-5%] ${
        locale === "en"
          ? "xl:bottom-[-20%] max-lg:bottom-[-0%] max-lg:left-[50%] translate-x-[-49%] max-lg:text-[10rem]"
          : "max-lg:bottom-[20%] max-lg:text-[10rem] max-lg:left-[50%] translate-x-[-47%]"
      } h-res_large_text left-1/2 translate-x-[-48%]  lg:translate-x-[-50%] xl:text-[28rem] text-[16rem] text-white `}
    >
      <div className="flex lg:gap-60 max-lg:gap-10 text-[#de704d] box opacity-0 max-lg:rotate-90 h-res">
        <p>{t("FirstName")}</p> {t("LastName")}
      </div>
    </div>
  );
}
