import Hero from "@/view/HeroView/Hero";
import Contact from "@/view/contactMe/Contact";
import ContactMobile from "@/view/contactMe/ContactMobile";
import ProjecyViewTest from "@/view/projectViewTest/ProjecyViewTest";
import WhatUp from "@/components/Whatup/WhatUp";
export default async function Home({ params: { locale } }: any) {
  return (
    <main className="relative">
      <Hero locale={locale} />
      <ProjecyViewTest />
      <Contact locale={locale} />
      <ContactMobile locale={locale} />
      {/* <WhatUp/> */}
    </main>
  );
}
