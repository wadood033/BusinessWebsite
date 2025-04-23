import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"; // Import Footer
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Website",
  description: "A description of my website",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body suppressHydrationWarning={true} className="flex flex-col min-h-screen">
        <Navbar /> 
        <main className="flex-grow">{children}</main> 
        <Footer /> 
      </body>
    </html>
  );
}
