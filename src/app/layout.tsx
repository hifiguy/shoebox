import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShoeBox — Speak your expenses",
  description:
    "Track expenses with voice input. Categorize spending, manage accounts, track tax deductions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950">
        {children}
        <footer className="border-t border-zinc-200 bg-white px-6 py-4 text-center text-xs text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900">
          ShoeBox — Outskill AIAP C13 Hackathon · Group 9
        </footer>
      </body>
    </html>
  );
}
