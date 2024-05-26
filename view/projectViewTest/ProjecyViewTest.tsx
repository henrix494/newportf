import React, { useRef, forwardRef } from "react";
import ProjectAni from "@/components/projects/ProjectAni";
import { useTranslations } from "next-intl";
export default function ProjecyViewTest() {
  const projectsText = useTranslations("projectSection");
  const keys = ["firstProject", "secoundProject", "thirdProject"] as const;
  return (
    <div className="  w-screen lg:max-w-[80vw]   mr-auto ml-auto  max-lg:mt-10 overflow-hidden  ">
      {keys.map((item, index) => {
        return (
          //svgImg
          <ProjectAni
            href={projectsText(`${item}.href`)}
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
