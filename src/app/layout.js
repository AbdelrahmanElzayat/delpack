import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ReduxProvider } from "@/rtk/provider";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "DELPACK",
  description: "delta misr for plastic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <ReduxProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <Header />
          <main className="">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
