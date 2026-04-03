"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothAnim = "transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <div
      className={`fixed w-full z-50 flex justify-center ${smoothAnim} ${
        isScrolled ? "top-6 px-4" : "top-0 px-0"
      }`}
    >
      <nav
        className={`relative flex items-center justify-between overflow-hidden ${smoothAnim} ${
          isScrolled
            ? "w-full max-w-5xl bg-pink-100/60 backdrop-blur-2xl rounded-full shadow-[0_10px_40px_rgb(255,182,193,0.3)] py-3 px-6 lg:px-8 border border-white/60"
            : "w-full max-w-full bg-pink-50/10 backdrop-blur-md rounded-none py-6 px-4 lg:px-10 border-b border-white/20"
        }`}
      >
        <div
          className={`absolute pointer-events-none ${smoothAnim} ${
            isScrolled
              ? "inset-[3px] rounded-full border border-white/70"
              : "inset-0 border-transparent"
          }`}
        ></div>

        {/* --- BAGIAN KIRI: Logo Lokal --- */}
        <div className="relative z-10 flex-shrink-0">
          <Link
            href="/"
            className={`block origin-left ${smoothAnim} ${
              isScrolled ? "scale-[0.8]" : "scale-100"
            }`}
          >
            {/* Mengambil gambar langsung dari folder public/jessycologo.jpg */}
            <Image
              src="/jessycologo.jpg"
              alt="Logo Jessyco Bakery"
              width={60} 
              height={60} 
              className={`rounded-full shadow-md object-cover ${smoothAnim} ${
                isScrolled ? "w-[48px] h-[48px]" : "w-[60px] h-[60px]"
              }`}
              priority 
            />
          </Link>
        </div>

        {/* --- BAGIAN TENGAH: Menu Link --- */}
        <div
          className={`relative z-10 hidden md:flex items-center space-x-8 font-medium ${smoothAnim} ${
            isScrolled ? "text-pink-900 text-sm" : "text-pink-950 text-base"
          }`}
        >
          <Link href="/" className="hover:text-pink-600 transition-colors">Beranda</Link>
          <Link href="#tentang" className="hover:text-pink-600 transition-colors">Tentang Kami</Link>
          <Link href="#produk" className="hover:text-pink-600 transition-colors">Menu Roti</Link>
          <Link href="#kontak" className="hover:text-pink-600 transition-colors">Kontak</Link>
        </div>

        {/* --- BAGIAN KANAN: Tombol Keranjang --- */}
        <div className="relative z-10 flex items-center">
          <button
            className={`flex items-center group rounded-full ${smoothAnim} ${
              isScrolled
                ? "bg-pink-600 text-white px-5 py-2 shadow-md hover:bg-pink-700 hover:scale-105 active:scale-95"
                : "bg-transparent text-pink-950 px-2 py-2 hover:text-pink-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`flex-shrink-0 ${smoothAnim} ${
                isScrolled ? "w-4 h-4" : "w-6 h-6"
              }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span
              className={`font-semibold overflow-hidden whitespace-nowrap ${smoothAnim} ${
                isScrolled ? "max-w-[100px] opacity-100 ml-2 text-sm" : "max-w-0 opacity-0 ml-0 text-base"
              }`}
            >
              Keranjang
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}