"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, cubicBezier } from "framer-motion";

// Memanggil Navbar Eksternal
import Navbar from "@/components/Navbar";

/* ─── Data ─────────────────────────────────────────────── */
const menuItems = [
  {
    id: 1,
    name: "Roti Sobek Premium",
    desc: "Lembut, manis, dan lumer di mulut. Pilihan tepat untuk sarapan keluarga.",
    img: "https://plus.unsplash.com/premium_photo-1673111979369-0222c7314b82?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Classic Croissant",
    desc: "Renyah di luar, berongga sempurna di dalam dengan lapisan mentega gurih.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=700&auto=format&fit=crop",
    tag: "Favorit",
  },
  {
    id: 3,
    name: "Signature Cake",
    desc: "Kue spesial untuk momen berharga Anda dengan berbagai pilihan rasa.",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=700&auto=format&fit=crop",
    tag: "Custom Order",
  },
  {
    id: 4,
    name: "Cinnamon Roll",
    desc: "Gulungan kayu manis hangat dengan glasur krim keju yang menggugah selera.",
    img: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?q=80&w=700&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: 5,
    name: "Pain au Chocolat",
    desc: "Pastry berlapis mentega dengan isian cokelat premium dari Belgia.",
    img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=700&auto=format&fit=crop",
    tag: "Premium",
  },
  {
    id: 6,
    name: "Strawberry Tart",
    desc: "Tart shortcrust dengan krim custard vanilla dan stroberi segar.",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=700&auto=format&fit=crop",
    tag: "Seasonal",
  },
];

/* ─── Variants ──────────────────────────────────────────── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1) } },
};

/* ─── Hero ──────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(236,72,153,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(236,72,153,.05) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Morphing pink blob */}
      <motion.div
        animate={{
          borderRadius: [
            "40% 60% 60% 40% / 40% 40% 60% 60%",
            "60% 40% 50% 50% / 55% 45% 55% 45%",
            "50% 50% 40% 60% / 60% 40% 60% 40%",
            "40% 60% 60% 40% / 40% 40% 60% 60%",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[58%] h-[120%] -z-10 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200"
      />

      <div className="w-full max-w-7xl mx-auto px-8 lg:px-14 flex items-center min-h-screen pt-32 lg:pt-40 pb-20 relative z-20">
        <motion.div variants={stagger} initial="hidden" animate="show" className="w-full lg:w-[55%] z-10 space-y-0 lg:pr-10">
          <motion.div variants={itemVariant} className="mb-7">
            <span className="inline-flex items-center gap-2 bg-pink-50 border border-pink-100 rounded-full px-4 py-1.5 text-xs font-bold text-pink-600 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Artisan Bakery · Semarang
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariant}
            className="font-serif text-[3.2rem] lg:text-[4.8rem] font-black text-pink-950 leading-[1.05] tracking-tight mb-6"
          >
            Rasa Hangat
            <br />
            {/* Gradasi ungu dihapus, fokus pada palet pink */}
            <span className="bg-gradient-to-r from-pink-700 to-pink-400 bg-clip-text text-transparent">
              Setiap Gigitan
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariant}
            className="text-base lg:text-lg text-stone-500 font-light leading-relaxed max-w-md mb-10"
          >
            Kami menyajikan roti dan kue kualitas premium setiap hari. Dari web
            order hingga antaran ke rumah, temukan kelezatan artisan yang dibuat
            khusus untuk senyuman Anda.
          </motion.p>

          <motion.div variants={itemVariant} className="flex items-center gap-4 mb-14">
            <motion.a
              href="#produk"
              whileHover={{ y: -3, boxShadow: "0 16px 36px rgba(219,39,119,.35)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors duration-200 hover:bg-pink-800"
            >
              Lihat Menu
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            <motion.a
              href="#tentang"
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-3 text-stone-500 text-sm font-medium hover:text-pink-600 transition-colors duration-200"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 hover:border-pink-200 hover:bg-pink-50 transition-all duration-200">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 1v11M1 6.5L6.5 12 12 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Cerita Kami
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariant} className="flex items-center gap-8 pt-8 border-t border-stone-100">
            {[
              { num: "500+", label: "Pelanggan Setia" },
              { num: "20+",  label: "Varian Menu" },
              { num: "4.9★", label: "Rating Ulasan" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-2xl font-bold text-pink-800 leading-none mb-1">{s.num}</div>
                <div className="text-xs text-stone-400">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT SIDE VISUALS */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-1/2 items-center justify-center z-10 pointer-events-none pr-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[20%] w-32 h-32 rounded-full bg-gradient-to-br from-pink-300/50 to-pink-100/50 blur-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[30%] w-20 h-20 rounded-full bg-pink-300/30 blur-lg"
        />
        {[
          { style: { top: "20%", right: "35%" }, delay: 0 },
          { style: { top: "70%", right: "45%" }, delay: 1.5 },
        ].map((sp, i) => (
          <motion.span
            key={i}
            style={{ position: "absolute", fontSize: "1.2rem", color: "#f9a8d4", ...sp.style }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1], rotate: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: sp.delay }}
          >
            ✦
          </motion.span>
        ))}

        {/* MODERN IMAGE CONTAINER */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[75%] max-w-[420px] xl:max-w-[480px] pointer-events-auto"
        >
          {/* Glassmorphism Card Wrapper */}
          <div className="relative bg-white/70 backdrop-blur-md p-4 rounded-[2.5rem] border border-white/60 shadow-[0_24px_60px_rgba(219,39,119,0.12)] hover:shadow-[0_32px_80px_rgba(219,39,119,0.18)] transition-shadow duration-500 group">
            
            {/* Image Inner Wrapper */}
            <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-pink-50/50 to-pink-100/30 flex items-center justify-center aspect-[4/5]">
              <Image
                src="/toko.png"
                alt="Jessyco Bakery App"
                width={600}
                height={750}
                className="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>

            {/* Floating Modern Badge */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-8 bg-white px-5 py-3.5 rounded-2xl shadow-xl border border-pink-50 flex items-center gap-4"
            >
               <span className="text-3xl bg-pink-50 p-2 rounded-xl">🥐</span>
               <div>
                 <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-0.5">Freshly Baked</p>
                 <p className="text-sm font-serif font-bold text-pink-900 leading-none">Pilihan Terbaik</p>
               </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── About Section: Ultra Modern Minimalist ────────────────── */
function TentangSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Founded", value: "2018" },
    { label: "Daily Batches", value: "24" },
    { label: "Signature Recipes", value: "40+" },
    { label: "Local Partners", value: "12" },
  ];

  return (
    <section id="tentang" ref={ref} className="bg-white border-t border-pink-100">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* --- KOLOM KIRI: Cerita & Filosofi (Simetris) --- */}
        <div className="w-full lg:w-1/2 flex flex-col border-r border-pink-100">
          
          {/* Header Cerita */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="p-10 md:p-20 border-b border-pink-100 flex flex-col justify-center flex-grow"
          >
            <span className="text-[10px] font-bold text-pink-500 uppercase tracking-[4px] mb-6 block">
              01 / Heritage
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-black text-pink-950 leading-tight mb-8">
              Tradisi yang <br/> Dipanggang Modern.
            </h2>
            <p className="text-stone-500 text-base md:text-lg font-light leading-relaxed max-w-md">
              Jessyco lahir dari obsesi terhadap kesempurnaan adonan. Kami menggabungkan teknik artisan klasik dengan bahan-bahan lokal pilihan untuk menciptakan roti yang bercerita.
            </p>
          </motion.div>

          {/* Grid Statistik (Simetris 2x2) */}
          <div className="grid grid-cols-2">
            {stats.map((s, i) => (
              <div 
                key={i} 
                className={`p-10 border-pink-100 flex flex-col items-center text-center justify-center ${
                  i % 2 === 0 ? "border-r" : ""
                } ${i < 2 ? "border-b" : ""}`}
              >
                <span className="text-2xl font-serif font-bold text-pink-900 mb-1">{s.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- KOLOM KANAN: Visual & Roadmap --- */}
        <div className="w-full lg:w-1/2 flex flex-col bg-pink-50/30">
          
          {/* Visual Besar Tanpa Jarak (Full Bleed) */}
          <div className="relative h-80 md:h-[50%] overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Artisan Process" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw" 
              className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* Roadmap / Timeline Minimalis */}
          <div className="p-10 md:p-20 flex flex-col justify-center flex-grow">
            <span className="text-[10px] font-bold text-pink-500 uppercase tracking-[4px] mb-10 block">
              02 / The Journey
            </span>
            
            <div className="space-y-12">
              <div className="group">
                <div className="flex justify-between items-baseline mb-2 border-b border-pink-200 pb-1">
                  <h4 className="text-pink-950 font-bold text-sm uppercase tracking-wider">The Humble Start</h4>
                  <span className="text-pink-400 font-serif italic text-sm">2018</span>
                </div>
                <p className="text-stone-400 text-xs font-light">Eksperimen pertama dari dapur kecil rumahan di Semarang.</p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2 border-b border-pink-200 pb-1">
                  <h4 className="text-pink-950 font-bold text-sm uppercase tracking-wider">Flagship Store</h4>
                  <span className="text-pink-400 font-serif italic text-sm">2020</span>
                </div>
                <p className="text-stone-400 text-xs font-light">Gerai fisik pertama kami resmi dibuka untuk umum.</p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2 border-b border-pink-200 pb-1">
                  <h4 className="text-pink-950 font-bold text-sm uppercase tracking-wider">Next Horizon</h4>
                  <span className="text-pink-400 font-serif italic text-sm">2026</span>
                </div>
                <p className="text-stone-400 text-xs font-light">Digitalisasi layanan dan ekspansi varian artisan menu.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* ─── Modern Minimalist Card ────────────────────────────── */
function MenuCard({ item }: { item: typeof menuItems[0] }) {
  return (
    <div className="w-[280px] md:w-[340px] shrink-0 bg-white rounded-3xl overflow-hidden shadow-[0_2px_15px_rgb(0,0,0,0.03)] border border-stone-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 cursor-pointer group">
      <div className="relative h-[320px] w-full overflow-hidden bg-stone-50">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {item.tag && (
          <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-pink-900 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/50 shadow-sm">
            {item.tag}
          </span>
        )}
      </div>
      <div className="p-8 text-center bg-white relative">
        <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">{item.name}</h3>
        <p className="text-sm text-stone-500 font-light leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Auto-Scrolling Marquee Menu Section ───────────────── */
function MenuSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="produk" ref={ref} className="py-24 overflow-hidden bg-stone-50">
      
      {/* Definisi Animasi CSS Langsung di Komponen */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
          <motion.span variants={itemVariant} className="text-xs font-bold text-pink-500 uppercase tracking-[3px] block mb-4">
            Showcase
          </motion.span>
          <motion.h2 variants={itemVariant} className="font-serif text-4xl lg:text-5xl font-bold text-pink-950 tracking-tight">
            Menu Andalan Kami
          </motion.h2>
        </motion.div>
      </div>

      {/* Auto Carousel (Continuous Marquee) */}
      <div className="relative w-full pb-10 flex overflow-hidden pause-on-hover">
        
        {/* Set 1 */}
        <div className="flex gap-8 pr-8 shrink-0 animate-marquee">
          {menuItems.map((item) => (
            <MenuCard key={`set1-${item.id}`} item={item} />
          ))}
        </div>
        
        {/* Set 2 (Duplikasi untuk ilusi tanpa batas) */}
        <div className="flex gap-8 pr-8 shrink-0 animate-marquee" aria-hidden="true">
          {menuItems.map((item) => (
            <MenuCard key={`set2-${item.id}`} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── Footer Modern ─────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#4a1c2f] pt-20 pb-8 px-8 border-t-[6px] border-pink-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-4xl font-black text-white mb-6">Jessyco.</h3>
            <p className="text-pink-100/70 text-sm font-light leading-relaxed max-w-sm mb-8">
              Membawa kehangatan keluarga dalam setiap gigitan. Dibuat dengan tepung premium, mentega asli, dan banyak cinta di Semarang.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-pink-900/50 flex items-center justify-center text-pink-200 hover:bg-pink-500 hover:text-white transition-all duration-300">
                  <span className="text-[10px] uppercase font-bold">{social.substring(0,2)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-pink-400 font-bold uppercase tracking-[2px] text-xs mb-6">Navigasi</h4>
            <ul className="space-y-4">
              {['Beranda', 'Tentang Kami', 'Menu Produk', 'Hubungi Kami'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-pink-100/70 hover:text-white text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-pink-400 font-bold uppercase tracking-[2px] text-xs mb-6">Layanan</h4>
            <ul className="space-y-4">
              {['Pemesanan Custom', 'Catering Acara', 'Kemitraan', 'FAQ Pemesanan'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-pink-100/70 hover:text-white text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-pink-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-pink-100/50 text-xs">
            © {new Date().getFullYear()} Jessyco Artisan Bakery. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-pink-100/50">
            <a href="#" className="hover:text-pink-300">Privacy Policy</a>
            <a href="#" className="hover:text-pink-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── WhatsApp ──────────────────────────────────────────── */
function WhatsAppBtn() {
  return (
    <motion.a
      href="https://wa.me/628000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 280 }}
      whileHover={{ scale: 1.12, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/40 hover:bg-green-600 transition-colors duration-200 group"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-400/40 animate-ping" />
      <span className="absolute right-full mr-3 bg-white text-stone-700 text-xs font-semibold px-3 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
        Ada Pertanyaan? 🍞
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>
    </motion.a>
  );
}

/* ─── Contact Section ───────────────────────────────────── */
function KontakSection() {
  return (
    <section id="kontak" className="relative py-24 bg-white overflow-hidden">
      {/* Ornamen Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-100 rounded-full blur-3xl opacity-30 -z-10 -translate-x-1/2 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Info Text */}
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-pink-500 uppercase tracking-[3px] block mb-4"
            >
              Kunjungi Kami
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl lg:text-5xl font-bold text-pink-950 tracking-tight mb-6"
            >
              Mari Berbincang
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-500 font-light leading-relaxed mb-10 max-w-md"
            >
              Punya pertanyaan tentang pesanan khusus, *catering*, atau sekadar ingin menyapa? Jangan ragu untuk menghubungi kami. Dapur kami selalu terbuka untuk Anda.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 text-pink-500">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-pink-950 font-bold text-sm mb-1">Lokasi Dapur</h4>
                  <p className="text-sm text-stone-500">Jl. Pemuda No. 123, Semarang<br/>Jawa Tengah, Indonesia 50132</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 text-pink-500">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-pink-950 font-bold text-sm mb-1">Jam Operasional</h4>
                  <p className="text-sm text-stone-500">Senin - Sabtu: 07.00 - 20.00 WIB<br/>Minggu: 08.00 - 18.00 WIB</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form UI (Modern Glassmorphism) */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-xl border border-pink-100 p-8 md:p-10 rounded-[2rem] shadow-[0_20px_60px_rgba(236,72,153,0.08)]"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase ml-2">Nama</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/50 border border-stone-200 text-sm px-5 py-4 rounded-2xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase ml-2">Email</label>
                    <input type="email" placeholder="john@email.com" className="w-full bg-white/50 border border-stone-200 text-sm px-5 py-4 rounded-2xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase ml-2">Pesan</label>
                  <textarea rows={4} placeholder="Tulis pesan Anda di sini..." className="w-full bg-white/50 border border-stone-200 text-sm px-5 py-4 rounded-2xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-pink-600 text-white font-semibold py-4 rounded-2xl hover:bg-pink-700 transition-colors shadow-lg shadow-pink-600/30">
                  Kirim Pesan
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white selection:bg-pink-200 selection:text-pink-900">
      <Navbar />
      <HeroSection />
      <TentangSection />
      <MenuSection />
      <KontakSection />
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}