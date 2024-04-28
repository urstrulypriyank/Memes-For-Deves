import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Header/Navbar";
import ContextWrapper from "./Components/Context/ContextWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memes for Devs",
  description: "Read the memes directly from reddit ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextWrapper>
          <Navbar />
          {children}
        </ContextWrapper>
      </body>
    </html>
  );
}
