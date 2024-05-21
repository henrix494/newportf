"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projectCardPropsTypes } from "@/@types/globalTypes";

export default function ProjectCard({
  startYear,
  endYear,
  title,
  description,
  descriptionTwo,
  index,
  imgOne,
  ImgTwo,
  imgFour,
}: projectCardPropsTypes) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isImgEnterd, setIsImgEnterd] = useState({
    index: -1,
    isEntered: false,
    pracenthe: 100,
  });
  const onMouseMove = (e: MouseEvent, index: number) => {
    const target = e.currentTarget as HTMLDivElement;
    let rect = target.getBoundingClientRect();
    let width = rect.width; // Get the width of the container
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let pracenthe = (x / width) * 100; // Calculate the percentage

    setMousePos({ x: x, y: y });
    setIsImgEnterd({ index: index, isEntered: true, pracenthe: pracenthe });
  };

  return (
    <div
      className="flex h-[100px]  "
      onMouseMove={(e) => onMouseMove(e as any, index)}
      onMouseLeave={() =>
        setIsImgEnterd({ index: -1, isEntered: false, pracenthe: 0 })
      }
      key={index}
    >
      <div className="border-2 flex relative ">
        <div className="w-[5vw] border-2 max-lg:hidden ">
          <div className="rotate-45 flex justify-center items-center h-full font-bold ">
            <p>{startYear}-</p>
            <p>{endYear}</p>
          </div>
        </div>
        <div className="w-[93.7vw] flex flex-col justify-center text-xl max-lg:text-base font-serif font-bold max-lg:w-[98.2vw]">
          <p className="text-red-600">{title}</p>
          <p>{description}</p>
          <p>{descriptionTwo}</p>
        </div>
        <div
          className={`z-[99999999] ${
            isImgEnterd.index === index && isImgEnterd.isEntered
              ? "absolute"
              : "hidden"
          }`}
          style={{ top: mousePos.y, left: mousePos.x, zIndex: 100000 }}
        >
          {isImgEnterd.index === index &&
            isImgEnterd.isEntered &&
            isImgEnterd.pracenthe > 65 && (
              <Image src={imgOne} width={500} height={500} alt="ascas" />
            )}
          {isImgEnterd.index === index &&
            isImgEnterd.isEntered &&
            isImgEnterd.pracenthe < 65 &&
            isImgEnterd.pracenthe > 30 && (
              <Image src={ImgTwo} width={500} height={500} alt="ascas" />
            )}
          {isImgEnterd.index === index &&
            isImgEnterd.isEntered &&
            isImgEnterd.pracenthe < 30 && (
              <Image src={imgFour} width={500} height={500} alt="ascas" />
            )}
        </div>
      </div>
    </div>
  );
}
