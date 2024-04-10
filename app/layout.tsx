import type { Metadata } from "next";
import { Inter as FontSans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Footer } from "@/app/(home)/(layout)/footer";
import { Header } from "@/app/(home)/(layout)/header";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ecommerce app",
  description: "By Francisco García",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="max-w-[1440px] min-h-screen grid grid-rows-[max-content__1fr__max-content] mx-auto">
          <Header />
          {children}
          <Footer/> 
        </div>
      </body>
    </html>
  );
}
