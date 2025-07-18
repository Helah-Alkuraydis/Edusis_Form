import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className={tajawal.variable}>
      <body
        className="bg-cover bg-no-repeat bg-center bg-fixed min-h-screen antialiased"
        style={{ backgroundImage: "url('/background1.png')" }}
      >
        {children}
      </body>
    </html>
  );
}