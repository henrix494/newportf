"use client";

import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Text() {
  const containerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

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
      className="absolute bottom-[-10%] lg:bottom-[-5%] left-1/2 translate-x-[-48%]  lg:translate-x-[-50%] lg:text-[28rem] text-[16rem] text-white "
    >
      <div className="flex gap-60 text-[#de704d] box opacity-0 max-lg:rotate-90">
        <p>נתן</p> מינקוב
      </div>
    </div>
  );
}
