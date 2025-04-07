import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Control } from "@/ui/control";
import GlassHeader from "@/components/GlassHeader";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vipul Portfolio - Software Engineer",
  description: "Personal portfolio of Vipul, a software engineer focused on building scalable applications and user-centric products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  font-sans bg-white dark:bg-black text-black dark:text-white antialiased `}>
        <TransitionEffect />
        <ThemeProvider>
          <GlassHeader />
          <div className="pt-14">
            {children}
          </div>
          <Control />
        </ThemeProvider>
      </body>
    </html>
  );
}
