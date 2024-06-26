// Hero.js
import Card from "@/common/hero/Card";
import { navBarLinks } from "@/constants/heroText/HeroText";
import Text from "@/components/hero/heroBIGText/Text";
import Image from "next/image";
import { headers } from "next/headers";
import { useTranslations } from "next-intl";
interface props {
  locale: string;
}
export default function Hero({ locale }: props) {
  const t = useTranslations("NavBar");
  const heroText = useTranslations("heroText");
  const headerList = headers();
  const browserName = headerList.get("X-Browser");
  const keys = ["home", "projects", "contact"] as const;
  const navBarLinksElements = keys.map((link) => {
    return (
      <a
        className=" hover:opacity-60 transition-all"
        key={`${link}.name`}
        href={`#${link}`}
      >
        {t(`${link}.name`)}
      </a>
    );
  });

  return (
    <div
      id="home"
      className={` ${
        browserName === "Edge" ? "p-[0px]" : "p-[1px]"
      } edge1314 lg:h-screen bg-slate-200 relative overflow-hidden flex flex-col items-center`}
    >
      <div className="flex gap-[1px] pb-[2px] pr-[0.5px] max-lg:flex-col">
        {[...Array(2)].map((_, index) => (
          <Card index={index} key={index}>
            {index === 0 && (
              <div className="px-10 pt-10 flex flex-col gap-10 h-res_head">
                <nav key={index} className="flex text-3xl gap-20 max-lg:hidden">
                  {navBarLinksElements}
                </nav>
                <p
                  className={`lg:w-[70%]  lg:text-2xl lg:pt-10 relative lg:tracking-wide h-alot_of_text ${
                    locale === "en" ? "leading-7" : "leading-10"
                  }	`}
                >
                  <span className="mark">
                    {heroText("HeroMainTextMarkOne")}
                  </span>
                  {heroText("HeroMainTextMarkTwo")}
                  <span className="mark">{heroText("HeroMainTextNoraml")}</span>
                </p>
              </div>
            )}
            {index === 1 && (
              <div
                className={`flex ${
                  locale !== "en" && "flex-row-reverse"
                }  max-lg:items-center max-lg:justify-center max-lg:h-full `}
              >
                <h3 className="text-left p-5 lg:text-6xl text-3xl font-bold ">
                  portfolio 2
                  <div className=" animate-bounce inline-block">.</div>0
                </h3>
                <Image
                  src={"./Hero/RightArrow.svg"}
                  width={50}
                  height={50}
                  alt="Arrow"
                />
                <a
                  href="https://portfolio-ten-sepia-44.vercel.app/"
                  target="__blank"
                >
                  <h3
                    className={`text-left   flex ${
                      locale === "en" && "flex-row-reverse"
                    }  p-5 lg:text-6xl font-bold text-3xl cursor-pointer hover:opacity-35 transition-all duration-300 `}
                  >
                    0<div className=" animate-bounce inline-block">.</div>1
                  </h3>
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>
      <div className="flex gap-[1px] pr-[0.5px] max-lg:flex-col">
        {[...Array(2)].map((_, index) => (
          <Card index={index + 2} key={index + 2}></Card>
        ))}
      </div>
      <Text locale={locale} />
      <div className=" absolute top-0 w-[3px] h-screen bg-slate-200 left-1/2 translate-x-[-50%] max-lg:hidden"></div>
    </div>
  );
}
