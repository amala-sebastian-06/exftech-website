import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-ef",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Excelfast Advanced Technologies | Engineering, MRO & Industrial Support",
  description:
    "Excelfast Advanced Technologies delivers engineering services, MRO, after-sales support, industrial distribution, assembly and R&D for demanding industrial environments.",
  keywords: [
    "ExcelFast",
    "Advanced Technologies",
    "MRO",
    "industrial engineering",
    "Pithampur",
    "product development",
  ],
  openGraph: {
    title: "Excelfast Advanced Technologies",
    description: "Engineering that keeps industry moving.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="ef-grain">
      <body
        className={`${poppins.variable} ${inter.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
