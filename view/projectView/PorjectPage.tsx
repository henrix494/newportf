import React from "react";
import Image from "next/image";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectDetails } from "@/constants/projectText/ProjectText";
export default function ProjectPage() {
  return (
    <div className="border border-black border-t-2 border-l-2 mt-10 relative ">
      <div className=" flex ">
        <div>
          <Image
            src={"./project/Text_brute.svg"}
            width={650}
            height={650}
            alt="asc"
            className=" border-l-2"
          />
        </div>
        <div className=" max-lg:hidden">
          <div className="mr-10 font-bold ">
            <p className="rotate-12 mt-20">look and behold</p>
          </div>
          <div className="mr-10 font-bold ">
            <p className="rotate-45 mt-20">look and behold</p>
          </div>
          <div className="mt-36 font-bold ">
            <p className="rotate-45 mt-20">look and behold</p>
          </div>
        </div>

        <div className=" absolute left-5 top-5 z-[3] ">
          <Image
            src={"/project/IMG.jpeg"}
            width={400}
            height={500}
            alt="sticker"
            className=" rounded-full shadow-2xl animate-bounce max-lg:hidden "
          />
        </div>
      </div>

      {projectDetails.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            imgOne={project.imgOne}
            index={index}
            title={project.title}
            startYear={project.startTime}
            endYear={project.endTime}
            description={project.description}
            descriptionTwo={project.descriptionTwo}
            ImgTwo={project.ImgTwo}
            imgFour={project.imgFour}
          />
        );
      })}
    </div>
  );
}
