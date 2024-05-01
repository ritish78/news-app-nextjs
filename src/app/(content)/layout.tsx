import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import MainHeader from "@/components/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News App",
  description: "Get your news on here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`py-2 px-10 ${inter.className}`}>
        <MainHeader />
        <div className="flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
