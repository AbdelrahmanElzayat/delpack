import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ReduxProvider } from "@/rtk/provider";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";
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
          locale === "en" ? "font-en" : "font-ar"
        }`}
      >
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
