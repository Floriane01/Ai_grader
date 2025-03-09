import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from 'nextjs-toploader'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alexana = localFont({
  src: "../public/Alexana.ttf",
  display: "swap",
  variable: "--font-alexana",
});

export const metadata: Metadata = {
  title: "Évaluateur IA",
  description: "Un outil alimenté par l'IA pour évaluer et noter les devoirs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth h-full"
    >
      <body
        className={`${alexana.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
