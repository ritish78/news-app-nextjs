import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News App",
  description: "Get your news on here!",
};

export default function LandingRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`p-16 ${inter.className}`}>
          {children}
      </body>
    </html>
  );
}
