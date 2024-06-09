import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { FixedPlugin } from "@/components";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Курс «Специалист по информационной безопасности: быстрый старт",
  description:
    "Курс «Специалист по информационной безопасности: быстрый старт»",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="NS-TECH.IO"
          src="https://www.ns-tech.io/"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>

          {children}
          <FixedPlugin />

      </body>
    </html>
  );
}
