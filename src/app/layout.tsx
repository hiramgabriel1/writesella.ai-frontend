import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "../components/Navbar";

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
      </body>
    </html>
  );
}
