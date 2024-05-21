import React, { useRef, forwardRef } from "react";
import ProjectAni from "@/components/projects/ProjectAni";
import { projectDetails } from "@/constants/projectText/ProjectText";
import { useTranslations } from "next-intl";
import { link } from "fs";
export default function ProjecyViewTest() {
  const projectsText = useTranslations("projectSection");
  const keys = ["firstProject", "secoundProject", "thirdProject"] as const;
  return (
    <div className="  w-screen lg:max-w-[80vw]   mr-auto ml-auto  max-lg:mt-10 overflow-hidden  ">
      {keys.map((item, index) => {
        console.log(projectsText(`${item}.imgOne`));
        return (
          //svgImg
          <ProjectAni
            title={projectsText(`${item}.title`)}
            index={index}
            projectDes={projectsText(`${item}.description`)}
            projetName={projectsText(`${item}.semiTitle`)}
            imgOne={projectsText(`${item}.imgOne`)}
            imgTwo={projectsText(`${item}.ImgTwo`)}
            key={index}
            miniImg={projectsText(`${item}.svgImg`)}
            techOne={projectsText(`${item}.techOne`)}
            techTwo={projectsText(`${item}.techTwo`)}
            techThree={projectsText(`${item}.techThree`)}
            teachFour={projectsText(`${item}.teachFour`)}
          />
        );
      })}
    </div>
  );
}
