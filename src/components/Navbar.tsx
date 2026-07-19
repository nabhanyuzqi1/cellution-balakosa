import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Magnetic from "./Magnetic";

const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Ulasan", href: "#ulasan" },
  { label: "FAQ", href: "#faq" },
  { label: "Lokasi", href: "#lokasi" },
];

const WHATSAPP_URL =
  "https://wa.me/6289630162928?text=Halo%20Cellution%2C%20saya%20ingin%20konsultasi%20servis%20HP";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 px-4 md:top-6"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition-all duration-500 md:px-6 ${
            isScrolled
              ? "glass border border-border shadow-lg shadow-black/5"
              : "frost shadow-lg shadow-black/10"
          }`}
        >
          {/* Logo wordmark */}
          <a href="#hero" className="flex items-center gap-2 pl-1">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent-light to-accent text-sm font-black text-white shadow-sm">
              C
            </span>
            <span
              className={`text-lg font-black tracking-tight transition-colors ${
                isScrolled ? "text-text-primary" : "text-white"
              }`}
            >
              Cellution
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Magnetic key={link.href}>
                <a
                  href={link.href}
                  className={`inline-block rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isScrolled
                      ? "text-text-secondary hover:bg-surface-100 hover:text-text-primary"
                      : "text-white/90 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </Magnetic>
            ))}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+6289630162928"
              className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors lg:flex ${
                isScrolled
                  ? "text-text-secondary hover:text-accent"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <Phone className="h-4 w-4" />
              +62 896-3016-2928
            </a>
            <Magnetic>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold shadow-sm transition-colors md:flex ${
                  isScrolled
                    ? "bg-accent text-white shadow-accent/25 hover:bg-accent-dim"
                    : "bg-white text-frost-deep hover:bg-white/90"
                }`}
              >
                Booking Servis
              </a>
            </Magnetic>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
                isScrolled
                  ? "text-text-secondary hover:bg-surface-100"
                  : "text-white hover:bg-white/15"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass fixed inset-x-4 top-[84px] z-40 rounded-3xl border border-border p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-text-secondary transition-colors hover:bg-surface-100 hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white"
              >
                Booking Servis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
