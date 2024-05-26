"use client";
import { propsTypesCARD } from "@/@types/globalTypes";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Card({ children, index }: propsTypesCARD) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.to(`.boxS-${index}`, {
        opacity: 1,
        duration: 2,
        delay: (index - 1) * 0.5,
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div ref={containerRef} className={`overflow-hidden `}>
      <div
        className={`w-[49.9vw] max-lg:w-screen   h-[49.5vh] bg-[black] text-white rounded-3xl boxS-${index} ${
          index === 0 ? "opacity-1" : "opacity-0"
        } `}
      >
        {children}
      </div>
    </div>
  );
}
