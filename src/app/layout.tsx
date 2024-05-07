import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localfont from "next/font/local"

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const lufga = localfont({
  src: [
    {
      path: "../../public/fonts/LufgaBlack.ttf",
   
    }
  ],
  variable: "--font-lufga",
})

export const metadata: Metadata = {
  title: "Xmonkey",
  description: "Agência de marketing digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    
    </html>
  );
}
