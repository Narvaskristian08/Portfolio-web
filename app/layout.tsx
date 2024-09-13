import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "@/components/Topbar";
import SideBar from "@/components/Sidebar";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kristian Narvas - Mobile Engineer",
  description: "",
  icons: '@/components/ui/device.jpg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100 dark:bg-slate-900 duration-300 ease-in-out`}>
        <Topbar />
        <SideBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
