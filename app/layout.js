import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/headerComponent/Header";
import Footer from "@/components/footerComponent/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
