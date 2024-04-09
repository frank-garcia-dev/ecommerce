import type { Metadata } from "next";
import { Inter as FontSans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <div className="max-w-[1440px] mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
