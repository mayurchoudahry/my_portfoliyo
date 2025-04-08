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
  title: "Vipul | Software Engineer & Web Developer",
  description: "Portfolio of Vipul, a software engineer specialized in building scalable applications and user-centric products with expertise in modern web technologies.",
  keywords: ["software engineer", "web developer", "full-stack developer", "React", "Next.js", "portfolio"],
  authors: [{ name: "Vipul" }],
  creator: "Vipul",
  publisher: "Vipul",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://my-portfolio-versus-projects.vercel.app/"), // Replace with your actual URL
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Vipul | Software Engineer & Web Developer",
    description: "Portfolio of Vipul, a software engineer specialized in building scalable applications and user-centric products.",
    url: "https://my-portfolio-versus-projects.vercel.app/", // Replace with your actual URL
    siteName: "Vipul's Portfolio",
    images: [
      {
        url: "/avatar.png", // Add an actual image path for social sharing
        width: 1200,
        height: 630,
        alt: "Vipul - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipul | Software Engineer & Web Developer",
    description: "Portfolio of Vipul, a software engineer specialized in building scalable applications and user-centric products.",
    images: ["/avatar.png"], // Add an actual image path for Twitter
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  category: "Technology",
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
