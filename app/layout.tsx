
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './reset.css';
import './styles.css'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Personal Budget Tracker",
  description: "Personal Budget Tracker application that helps users manage their income, expenses, and budgets with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme>
          {children}
        </Theme>
      </body>

    </html>

  );
}
