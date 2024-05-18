"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
interface props {
  title: string;
  projetName: string;
  projectDes: string;
  imgOne: string;
  imgTwo: string;
  index: number;
}

export default function ProjectAni({
  title,
  projetName,
  projectDes,
  imgOne,
  imgTwo,
  index,
}: props) {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(`.title_${index}`, {
      scrollTrigger: {
        trigger: `.title_${index}`,
        toggleActions: "play reverse play reverse",
      },
      x: 0,
      ease: "power2.inOut",
      duration: 2,
    });
    gsap.to(`.semi_title_${index}`, {
      scrollTrigger: {
        trigger: `.semi_title_${index}`,
        toggleActions: "play reverse play reverse",
      },
      opacity: 1,

      duration: 3,
    });
    gsap.to(`.img_one_${index}`, {
      scrollTrigger: {
        trigger: `.img_one_${index}`,

        toggleActions: "play reverse play reverse",
      },
      x: 0,
      opacity: 1,

      duration: 1,
    });
    gsap.to(`.img_Two_${index}`, {
      scrollTrigger: {
        trigger: `.img_Two_${index}`,

        toggleActions: "play reverse play reverse",
      },
      x: 0,
      opacity: 1,
      duration: 1,
    });
    gsap.to(`.first_line_${index}`, {
      scrollTrigger: {
        trigger: `.first_line_${index}`,
        start: "bottom bottom ",
        toggleActions: "play reverse play reverse",
      },
      height: "100%",

      duration: 3,
    });
    gsap.to(`.secound_line_${index}`, {
      scrollTrigger: {
        trigger: `.secound_line_${index}`,
        start: "bottom bottom ",
        toggleActions: "play reverse play reverse",
      },
      height: "100%",

      duration: 3,
    });

    gsap.to(`.bg_span_${index}`, {
      scrollTrigger: {
        trigger: `.bg_span_${index}`,
        start: "bottom bottom ",
        toggleActions: "play reverse play reverse",
      },
      opacity: 1,

      duration: 10,
    });
  }, [ref]);
  return (
    <>
      <div ref={ref} className=" h-[150px]">
        <div className="flex  max-lg:h-full  ">
          <div className=" mr-auto ml-auto flex flex-col  pt-8  ">
            <div className="w-[20px] h-[20px] rounded-full bg-[#000000f1] "></div>
            <div
              className={` line_css   w-[3px] mr-auto ml-auto h-[0px] first_line_${index}`}
            ></div>
          </div>
          <h3
            className={` lg:text-[96px]  font-bold title_${index} translate-x-[5%] max-lg:text-4xl w-[90%]  overflow-hidden`}
          >
            {title}
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
            <span className={`bg_span_${index} opacity-0`}></span>
          </div>
        </div>
        <h3
          className={` text-[#3fb950] text-xl pr-5 max-lg:pt-7 lg:text-4xl font-bold semi_title_${index} opacity-0 w-[90%] pt-4`}
        >
          {projetName}
        </h3>
      </div>
      <div className="flex">
        <div className=" mr-auto ml-auto flex flex-col h-[200px]  pt-8">
          <div
            className={` line_css   w-[3px] mr-auto ml-auto h-[0px] secound_line_${index}`}
          ></div>
        </div>
        <div className=" w-[90%] ">
          {" "}
          <article className="lg:w-[60%] mt-2  pt-5">{projectDes}</article>
        </div>
      </div>
      <div className="  w-[90%]">
        <div className="mt-2 flex gap-2 flex-col">
          <Image
            src={imgOne}
            width={1200}
            height={800}
            alt="project"
            className={` translate-x-[20%] img_one_${index} opacity-0 rounded-xl`}
          />{" "}
          <Image
            src={imgTwo}
            width={1200}
            height={800}
            alt="project"
            className={` translate-x-[30%] img_Two_${index}  opacity-0 rounded-xl`}
          />
        </div>
      </div>
    </>
  );
}
