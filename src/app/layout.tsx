import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: "--font-cinzel",
  weight: ["400", "700", "900"] 
});

const lato = Lato({ 
  subsets: ["latin"], 
  variable: "--font-lato",
  weight: ["400", "700"] 
});

export const metadata: Metadata = {
  title: "God of War Portfolio",
  description: "A legendary portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${lato.variable} bg-gow-bg text-gow-text antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}