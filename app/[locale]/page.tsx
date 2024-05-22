import Hero from "@/view/HeroView/Hero";
import ProjectPage from "@/view/projectView/PorjectPage";
import Contact from "@/view/contactMe/Contact";
import ContactMobile from "@/view/contactMe/ContactMobile";
import ProjecyViewTest from "@/view/projectViewTest/ProjecyViewTest";
export default async function Home({ params: { locale } }: any) {
  return (
    <main className="">
      <Hero locale={locale} />
      {/* <ProjectPage /> */}
      <ProjecyViewTest />
      <Contact locale={locale} />
      <ContactMobile locale={locale} />
    </main>
  );
}
