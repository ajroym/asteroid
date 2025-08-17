import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Exo_2 } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"]
});

const exo = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Asteroid - Measure Earth's Fate",
  description: "Asteroid index page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.className} antialiased grid-background`}
      >
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
