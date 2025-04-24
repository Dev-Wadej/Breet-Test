import type { Metadata } from "next";
import { Manrope, Open_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Breet Test",
  description: "Pitch termsheet backing validation focus release."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
