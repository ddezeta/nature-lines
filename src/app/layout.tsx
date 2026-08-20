import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nature Lines | Trail Hiking Navigator",
  description: "A simple tool to help you stay on the trail while hiking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased w-full h-full m-0 p-0 overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
