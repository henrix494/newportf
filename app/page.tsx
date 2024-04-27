import Hero from "@/view/HeroView/Hero";
import ProjectPage from "@/view/projectView/PorjectPage";
import Contact from "@/view/contactMe/Contact";
import ContactMobile from "@/view/contactMe/ContactMobile";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <ProjectPage />
      <Contact />
      <ContactMobile />
    </main>
  );
}
