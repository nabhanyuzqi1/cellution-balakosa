import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Clock, Star, BadgeCheck } from "lucide-react";
import { MeshGradient } from "@paper-design/shaders-react";
import { ClientOnly } from "vite-react-ssg";
import Magnetic from "./Magnetic";
import heroImg1 from "../assets/hero-1.webp";
import heroImg2 from "../assets/hero-2.webp";
import heroImg3 from "../assets/hero-3.webp";

const WHATSAPP_URL =
  "https://wa.me/6289630162928?text=Halo%20Cellution%2C%20saya%20ingin%20konsultasi%20servis%20HP";

const pillItems = [
  { icon: Zap, text: "Servis Hari Ini Juga" },
  { icon: ShieldCheck, text: "Teknisi Bersertifikat" },
  { icon: Clock, text: "Garansi 100%" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, type: "spring" as const, bounce: 0.15 },
  },
};

/** A tilted stack of real repair photos + floating infographic stat chips. */
function PhotoStack() {
  return (
    <motion.div variants={itemVariants} className="relative" style={{ perspective: "1200px" }}>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[100px]" />

      <div className="relative h-[300px] w-[210px] sm:h-[380px] sm:w-[250px] lg:h-[440px] lg:w-[290px]">
        {/* Secondary photo — before/after LCD, peeking behind */}
        <motion.div
          className="absolute bottom-0 left-0 z-0 h-[62%] w-[55%]"
          animate={{ rotate: [-9, -6, -9], y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-full w-full overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl shadow-black/40">
            <img
              src={heroImg2}
              alt="Before dan sesudah ganti LCD iPhone di Cellution"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Main photo — pelanggan memegang HP yang sudah diperbaiki */}
        <motion.div
          className="absolute right-0 top-0 z-10 h-[92%] w-[75%]"
          animate={{ rotate: [3, 5, 3], y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-full w-full overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-white shadow-2xl shadow-black/50">
            <img
              src={heroImg1}
              alt="HP pelanggan selesai diservis di Cellution Balakosa"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Detail circle — komponen internal saat servis baterai */}
        <motion.div
          className="absolute -bottom-3 left-[28%] z-20 h-16 w-16 sm:h-20 sm:w-20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <div className="h-full w-full overflow-hidden rounded-full border-4 border-white shadow-xl shadow-black/40">
            <img
              src={heroImg3}
              alt="Detail komponen internal saat servis baterai"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Floating chip: rating */}
        <motion.div
          className="absolute -top-4 -left-2 z-30 flex items-center gap-2 rounded-2xl border border-white/40 bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-lg font-black text-neutral-900">5.0</span>
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-[9px] font-semibold text-neutral-400">
              Rating Google
            </span>
          </div>
        </motion.div>

        {/* Floating chip: repaired count */}
        <motion.div
          className="absolute bottom-6 -right-4 z-30 flex items-center gap-2 rounded-2xl border border-white/40 bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <BadgeCheck className="h-5 w-5 text-accent" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-black text-neutral-900">500+</span>
            <span className="text-[9px] font-semibold text-neutral-400">
              HP diperbaiki
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated shader background — WebGL only exists in the browser, so
          it's skipped during static prerendering and mounted after hydration. */}
      <ClientOnly>
        {() => (
          <>
            <MeshGradient
              className="absolute inset-0 h-full w-full"
              colors={["#000000", "#0a0e1a", "#7a2205", "#f84007", "#ff7a3d"]}
              speed={0.3}
            />
            <MeshGradient
              className="absolute inset-0 h-full w-full opacity-40"
              colors={["#000000", "#ffffff", "#f84007", "#0a0e1a"]}
              speed={0.2}
            />
          </>
        )}
      </ClientOnly>

      {/* Legibility + transition overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-surface-50" />

      {/* Content grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-28 sm:py-32 lg:grid-cols-2 lg:gap-8"
      >
        {/* Left — text (left aligned) */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            variants={itemVariants}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-light" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-white/90">
              Cellution Balakosa · Servis Smartphone
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-xl text-5xl leading-[0.98] font-black tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl"
          >
            Servis HP Cepat —{" "}
            <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              Saat Anda Paling Butuh.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-lg text-base leading-relaxed font-medium text-white/85 sm:text-lg"
          >
            Layanan hari ini juga. Teknisi bersertifikat. Garansi servis 100%
            untuk setiap perbaikan smartphone Anda.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <Magnetic>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-frost-deep shadow-xl shadow-black/30 transition-colors hover:bg-white/95"
              >
                Booking Servis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:border-accent-light/50 hover:bg-white/15"
              >
                Lihat Layanan
              </a>
            </Magnetic>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap items-center gap-2.5"
          >
            {pillItems.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm"
              >
                <item.icon className="h-4 w-4 text-accent-light" />
                <span className="text-xs font-semibold text-white/90">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — real repair photos, floating in 3D */}
        <div className="flex justify-center pt-4 lg:justify-end lg:pt-0">
          <PhotoStack />
        </div>
      </motion.div>
    </section>
  );
}
