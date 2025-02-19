import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ReduxProvider } from "@/rtk/provider";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import messageIcon from "@/assets/icons/message.svg";
import Image from "next/image";
export const metadata = {
  title: "DELPACK",
  description: "delta misr for plastic",
};
export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  const locale = cookieStore.get("lang")?.value || "en";
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body
        className={`overflow-x-hidden ${
          locale === "ar" ? "font-ar" : "font-en"
        }`}
      >
        <div className="whatsapp-button">
          <a href="https://wa.me/+201012248674" target="blank">
            <Image src={messageIcon} alt="contact" />
          </a>
        </div>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <Toaster position="top-right" reverseOrder={false} />
            <Header />
            <main>{children}</main>
            <Footer />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
