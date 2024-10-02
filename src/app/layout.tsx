import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Logo } from "../../public/img/logo";

// cambiar fuentes
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WrittesellAI",
  description: "developing...",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#070018]">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky z-10 top-0">
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer className="relative border-t-2 border-t-slate-50/10">
          <div className="flex py-10 items-center px-10 gap-5">
            <Logo/>
            <h1 className="font-semibold text-xl text-white">WriteAndSell.IA </h1>
          </div>
        </footer>
      </body>
    </html>
  );
}
