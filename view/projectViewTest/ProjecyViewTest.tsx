"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function ProjecyViewTest() {
  const containerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.to(".title", {
        scrollTrigger: {
          trigger: ".title",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        ease: "power2.inOut",
        duration: 2,
      });
      gsap.to(".semi_title", {
        scrollTrigger: {
          trigger: ".semi_title",
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,

        duration: 3,
      });
      gsap.to(".img_one", {
        scrollTrigger: {
          trigger: ".img_one",

          toggleActions: "play reverse play reverse",
        },
        x: 0,

        duration: 1,
      });
      gsap.to(".img_Two", {
        scrollTrigger: {
          trigger: ".img_Two",

          toggleActions: "play reverse play reverse",
        },
        x: 0,

        duration: 1,
      });
      gsap.to(".first_line", {
        scrollTrigger: {
          trigger: ".first_line",
          start: "bottom bottom ",
          toggleActions: "play reverse play reverse",
        },
        height: "100%",

        duration: 3,
      });
      gsap.to(".bg_span", {
        scrollTrigger: {
          trigger: ".bg_span",
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
      <div className="h-[200px]">
        <div className="flex h-full    ">
          <div className=" mr-auto ml-auto flex flex-col  pt-8  ">
            <div className="w-[20px] h-[20px] rounded-full bg-[#000000f1] "></div>
            <div className=" line_css   w-[3px] mr-auto ml-auto h-[0px] first_line"></div>
          </div>
          <h3 className=" lg:text-[96px]  font-bold title translate-x-[100%] max-lg:text-4xl w-[90%]">
            הפרויקטים שלי
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
            <span className="bg_span opacity-0"></span>
          </div>
        </div>
        <h3 className=" text-[#3fb950] text-xl pr-5 max-lg:pt-3 lg:text-4xl font-bold semi_title opacity-0 w-[90%] pt-4">
          יוצר מתכונים בעזרת AI
        </h3>
      </div>
      <div className="flex">
        <div className=" mr-auto ml-auto flex flex-col h-[200px]  pt-8">
          <div className=" line_css   w-[3px] mr-auto ml-auto h-[0px] first_line"></div>
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
        <div className="mt-2 flex gap-2 max-lg:flex-col">
          <Image
            src={"/project/recipe_ai.png.png"}
            width={800}
            height={500}
            alt="project"
            className=" translate-x-[100%] img_one"
          />{" "}
          <Image
            src={"/project/recipe_ai_two.png"}
            width={800}
            height={500}
            alt="project"
            className=" translate-x-[-100%] img_Two"
          />
        </div>
      </div>
    </div>
  );
}
