"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

interface Props {
  title: string;
  projetName: string;
  projectDes: string;
  imgOne: string;
  imgTwo: string;
  index: number;
  miniImg: string;
  techOne: string;
  techTwo: string;
  techThree: string;
  teachFour?: string;
}

export default function ProjectAni({
  title,
  projetName,
  projectDes,
  imgOne,
  imgTwo,
  index,
  miniImg,
  techOne,
  techTwo,
  techThree,
  teachFour,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const semiTitleRef = useRef<HTMLHeadingElement>(null);
  const imgOneRef = useRef<HTMLImageElement>(null);
  const imgTwoRef = useRef<HTMLImageElement>(null);
  const firstLineRef = useRef<HTMLDivElement>(null);
  const secondLineRef = useRef<HTMLDivElement>(null);
  const bgSpanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const animations = [
        {
          element: titleRef.current,
          animation: { x: 0, ease: "power2.inOut", duration: 2 },
          trigger: titleRef.current,
        },
        {
          element: semiTitleRef.current,
          animation: { opacity: 1, duration: 3 },
          trigger: semiTitleRef.current,
        },
        {
          element: imgOneRef.current,
          animation: { x: 0, opacity: 1, duration: 1 },
          trigger: imgOneRef.current,
        },
        {
          element: imgTwoRef.current,
          animation: { x: 0, opacity: 1, duration: 1 },
          trigger: imgTwoRef.current,
        },
        {
          element: firstLineRef.current,
          animation: { height: "100%", duration: 3 },
          trigger: firstLineRef.current,
          start: "bottom bottom",
        },
        {
          element: secondLineRef.current,
          animation: { height: "100%", duration: 3 },
          trigger: secondLineRef.current,
          start: "bottom bottom",
        },
        {
          element: bgSpanRef.current,
          animation: { opacity: 1, duration: 1 },
          trigger: bgSpanRef.current,
          start: "bottom bottom",
        },
      ];

      animations.forEach(({ element, animation, trigger, start }) => {
        if (element) {
          gsap.to(element, {
            ...animation,
            scrollTrigger: {
              trigger,
              toggleActions: "play reverse play reverse",
              ...(start && { start }),
            },
          });
        }
      });
    }, ref);

    return () => ctx.revert();
  }, [index]);

  return (
    <>
      <div ref={ref} className="h-[150px] mt-10">
        <div className="flex max-lg:h-full">
          <div className="mr-auto ml-auto flex flex-col pt-8">
            <div className="w-[20px] h-[20px] rounded-full bg-[#000000f1]"></div>
            <div
              ref={firstLineRef}
              className="line_css w-[3px] mr-auto ml-auto h-[0px]"
            ></div>
          </div>
          <h3
            ref={titleRef}
            className="lg:text-[96px]  font-bold translate-x-[5%] max-lg:text-4xl w-[90%] overflow-hidden"
          >
            {title}
          </h3>
        </div>
      </div>
      <div className="flex lg:h-[50%] h-full">
        <div className="mr-auto ml-auto flex flex-col pt-7">
          <div className="relative">
            <Image src={miniImg} width={30} height={30} alt="work" />
            <span
              ref={bgSpanRef}
              className={`opacity-0 bg_span_${index}`}
            ></span>
          </div>
        </div>
        <h3
          ref={semiTitleRef}
          className="text-[#3fb950] text-xl pr-5 max-lg:pl-5 max-lg:pt-7 lg:text-4xl font-bold opacity-0 w-[90%] pt-4"
        >
          {projetName}
        </h3>
      </div>
      <div className="flex">
        <div className="mr-auto ml-auto flex flex-col h-[200px] pt-8">
          <div
            ref={secondLineRef}
            className="line_css w-[3px] mr-auto ml-auto h-[0px]"
          ></div>
        </div>
        <div className="w-[90%]">
          <article className="lg:w-[60%] mt-2 pt-5">{projectDes}</article>
          <div className="my-5 flex gap-5 flex-wrap">
            {[techOne, techTwo, techThree, teachFour].map(
              (tech, idx) =>
                tech && (
                  <Image
                    key={idx}
                    src={tech}
                    width={80}
                    height={80}
                    alt="tech"
                  />
                )
            )}
          </div>
        </div>
      </div>
      <div className="w-[90%]">
        <div className="mt-2 flex gap-2 flex-col">
          <Image
            ref={imgOneRef}
            src={imgOne}
            width={1200}
            height={800}
            alt="project"
            className="translate-x-[20%] opacity-0 rounded-xl"
          />
          <Image
            ref={imgTwoRef}
            src={imgTwo}
            width={1200}
            height={800}
            alt="project"
            className="translate-x-[30%] opacity-0 rounded-xl"
          />
        </div>
      </div>
    </>
  );
}
