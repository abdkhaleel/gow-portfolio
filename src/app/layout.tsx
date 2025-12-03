import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Font for Headings (Ancient vibe)
const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: "--font-cinzel",
  weight: ["400", "500", "700", "900"] 
});

// Font for Body text (Readable, clean)
const lato = Lato({ 
  subsets: ["latin"], 
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"] 
});

export const metadata: Metadata = {
  title: "Abdul Khaleel | Full Stack Developer",
  description: "A portfolio forged in code. Exploring Systems, AI, and Web Development.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22 fill=%22%23982828%22>Ω</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cinzel.variable} ${lato.variable} bg-gow-bg text-gow-text antialiased selection:bg-gow-red selection:text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}