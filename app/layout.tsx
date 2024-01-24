import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bem-vin ao Blog by Evandro",
  description: "O seu blog preferido sobre produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` flex flex-col gap-20 justify-between ${inter.className}`}>
        <Navbar />
        <div className="mt-20 min-h-screen">
        {children}

        </div>
        <Footer />
      </body>
    </html>
  );
}
