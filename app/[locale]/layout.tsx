import { Inter } from "next/font/google";
import "@/app/globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "react-hot-toast";
import type { Metadata, ResolvingMetadata } from 'next'

const inter = Inter({ subsets: ["latin"] });



export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>

      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>
        <Toaster position="bottom-center" />
          {children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
type Props = {
  params: { locale: string }
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const leng = params.locale
 
 
  return {
    title: leng === "en" ? "Home":"בית" ,
    description: leng === "en" ? "A professional portfolio showcasing my work in web development, design, and more. Explore my projects, learn about my skills and experience, and get in touch to discuss potential collaborations.":"פורטפוליו מקצועי המציג את העבודות שלי בפיתוח אתרים, עיצוב ועוד. גלה את הפרויקטים שלי, למד על הכישורים והניסיון שלי, וצור קשר כדי לדבר על שיתופי פעולה פוטנציאליים.",
   icons:{
    icon:"/icons8-code-folder-16.png"
   } 
  }
}
 