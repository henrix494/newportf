import Hero from "@/view/HeroView/Hero";
import ProjectPage from "@/view/projectView/PorjectPage";
import Contact from "@/view/contactMe/Contact";
import ContactMobile from "@/view/contactMe/ContactMobile";
import ProjecyViewTest from "@/view/projectViewTest/ProjecyViewTest";
export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <ProjectPage /> */}
      <ProjecyViewTest />
      <Contact />
      <ContactMobile />
    </main>
  );
}
