import React, { useRef, forwardRef } from "react";
import ProjectAni from "@/components/projects/ProjectAni";
import { projectDetails } from "@/constants/projectText/ProjectText";
export default function ProjecyViewTest() {
  return (
    <div className="  w-screen lg:max-w-[80vw] max-w-[90vw]  mr-auto ml-auto  max-lg:mt-10 overflow-hidden  ">
      {projectDetails.map((item, index) => {
        return (
          <ProjectAni
            title={item.title}
            index={index}
            projectDes={item.description}
            projetName={item.projectTitle}
            imgOne={item.imgOne}
            imgTwo={item.ImgTwo}
            key={index}
            miniImg={item.miniImg}
          />
        );
      })}
    </div>
  );
}
