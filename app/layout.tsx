import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jessyco Bakery | Artisan Bakery Semarang",
  description: "Menyajikan roti dan kue kualitas premium setiap hari dengan sentuhan cinta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* suppressHydrationWarning mencegah error dari ekstensi browser */}
      <body className={`${inter.className} bg-pink-50 text-pink-950`} suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}