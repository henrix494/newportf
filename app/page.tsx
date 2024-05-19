import Hero from "@/view/HeroView/Hero";
import ProjectPage from "@/view/projectView/PorjectPage";
import Contact from "@/view/contactMe/Contact";
import ContactMobile from "@/view/contactMe/ContactMobile";
import ProjecyViewTest from "@/view/projectViewTest/ProjecyViewTest";
export default function Home({ params: { lang } }: any) {
  return (
    <main className="">
      <Hero lang={lang} />
      {/* <ProjectPage /> */}
      <ProjecyViewTest />
      <Contact />
      <ContactMobile />
    </main>
  );
}
