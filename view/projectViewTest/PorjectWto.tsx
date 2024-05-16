"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function PorjectWto() {
  const containerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.to(".title_two", {
        scrollTrigger: {
          trigger: ".title_two",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        ease: "power2.inOut",
        duration: 2,
      });
      gsap.to(".semi_title_barber", {
        scrollTrigger: {
          trigger: ".semi_title_barber",
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,

        duration: 3,
      });
      gsap.to(".img_three", {
        scrollTrigger: {
          trigger: ".img_three",
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,

        duration: 1,
      });
      gsap.to(".img_four", {
        scrollTrigger: {
          trigger: ".img_four",

          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,
        duration: 1,
      });
      gsap.to(".first_line_barber", {
        scrollTrigger: {
          trigger: ".first_line_barber",
          start: "bottom bottom ",
          toggleActions: "play reverse play reverse",
        },
        height: "100%",

        duration: 3,
      });
      gsap.to(".secound_line_barber", {
        scrollTrigger: {
          trigger: ".secound_line_barber",
          start: "bottom bottom ",
          toggleActions: "play reverse play reverse",
        },
        height: "100%",

        duration: 3,
      });

      gsap.to(".bg_span_barber", {
        scrollTrigger: {
          trigger: ".bg_span_barber",
          start: "bottom bottom ",
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,

        duration: 10,
      });
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      className="  w-screen lg:max-w-[80vw] max-w-[90vw]  mr-auto ml-auto  max-lg:mt-10 overflow-hidden  "
    >
      {/* Start of project AI */}
      <div className="h-[200px]">
        <div className="flex h-full    ">
          <div className=" mr-auto ml-auto flex flex-col  pt-8  ">
            <div className=" line_css   w-[3px] mr-auto ml-auto h-[0px] first_line_barber"></div>
          </div>
          <h3 className=" lg:text-[96px]  font-bold title_two translate-x-[100%] max-lg:text-4xl w-[90%]">
            ניהול לקוחות
          </h3>
        </div>
      </div>
      <div className="flex lg:h-[50%] h-full ">
        <div className=" mr-auto ml-auto flex flex-col  pt-7 ">
          <div className=" relative ">
            <Image
              src={"/project/work.svg"}
              width={30}
              height={30}
              alt="work"
            />
            <span className="bg_span_barber opacity-0"></span>
          </div>
        </div>
        <h3 className=" text-[#3fb950] text-xl pr-5 max-lg:pt-3 lg:text-4xl font-bold semi_title_barber opacity-0 w-[90%] pt-4">
          ניהול לקוחות לספרים
        </h3>
      </div>
      <div className="flex">
        <div className=" mr-auto ml-auto flex flex-col h-[200px]  pt-8">
          <div className=" line_css   w-[3px] mr-auto ml-auto h-[0px] secound_line_barber"></div>
        </div>
        <div className=" w-[90%] ">
          {" "}
          <article className="lg:w-[60%] mt-2  pt-5">
            אתר כזה עשוי להיות כלי ייחודי שיכול להפוך את חווית הבישול של משתמשיו
            לייחודית ומעניינת. בעזרת טכנולוגיית הלמידה המתכונים הרשמיים וכללי
            הבישול נטענים לאתר, כאשר המשתמשים מזינים את המצרכים הזמינים להם.
            המערכת משתמשת באלגוריתמי AI כדי להציע מתכונים אישיים וייחודיים
            המתאימים לפרופיל הטעמים והדרישות התזונתיות של המשתמש.
          </article>
        </div>
      </div>
      <div className="  w-[90%]">
        <div className="mt-2 flex gap-2 flex-col ">
          <Image
            src={"/project/recipe_ai.png.png"}
            width={1200}
            height={800}
            alt="project"
            className=" translate-x-[20%] img_three opacity-0 rounded-xl"
          />{" "}
          <Image
            src={"/project/recipe_ai_two.png"}
            width={1200}
            height={800}
            alt="project"
            className=" translate-x-[30%] img_four opacity-0 rounded-xl"
          />
        </div>
      </div>
      {/* End of project AI */}
    </div>
  );
}
