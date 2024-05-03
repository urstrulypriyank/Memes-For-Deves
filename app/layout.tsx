import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Header/Navbar";
import ContextWrapper from "./Components/Context/ContextWrapper";
import Head from "next/head";
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
      <Head>
        <link rel="preconnect" href="https://meme-api.com/gimme" />
        <link rel="dns-prefetch" href="https://i.redd.it" />
      </Head>
      <body className={[inter.className, 'bg-blue-200'].join(' ')} >
        <ContextWrapper>
          <Navbar />
          {children}
        </ContextWrapper>
      </body>
    </html>
  );
}
