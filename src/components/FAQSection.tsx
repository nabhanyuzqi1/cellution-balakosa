import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Magnetic from "./Magnetic";

const WHATSAPP_URL =
  "https://wa.me/6289630162928?text=Halo%20Cellution%2C%20saya%20ingin%20tanya-tanya%20soal%20servis%20HP";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Apakah data di HP saya aman selama proses servis?",
    answer:
      "Aman. Kami tidak pernah mengakses, menyalin, atau menghapus data pribadi Anda. Untuk servis yang membutuhkan reset (misalnya perbaikan software tertentu), kami akan selalu konfirmasi dan sarankan backup terlebih dahulu sebelum mengerjakan.",
  },
  {
    question: "Berapa lama waktu pengerjaan servis?",
    answer:
      "Tergantung jenis kerusakan. Ganti LCD, baterai, atau port charging umumnya selesai dalam 30-60 menit dan bisa ditunggu. Untuk kasus water damage atau kerusakan software yang lebih kompleks, kami akan informasikan estimasi waktu di awal setelah pengecekan.",
  },
  {
    question: "Apakah ada garansi untuk servis yang dilakukan?",
    answer:
      "Ya, setiap servis di Cellution Balakosa mendapat garansi resmi. Jika masalah yang sama muncul kembali dalam masa garansi, kami perbaiki tanpa biaya tambahan.",
  },
  {
    question: "HP saya kena air, apakah masih bisa diperbaiki?",
    answer:
      "Sebagian besar kasus water damage masih bisa ditangani, terutama jika HP segera dibawa dan tidak dinyalakan paksa setelah terkena air. Jangan mengisi daya atau menekan tombol power — segera bawa ke kami untuk pengecekan dan penanganan cepat.",
  },
  {
    question: "Apakah sparepart yang digunakan original?",
    answer:
      "Kami menggunakan sparepart berkualitas tinggi dengan garansi, dan akan selalu menjelaskan pilihan sparepart (original/OEM/kompatibel) beserta konsekuensinya sebelum pengerjaan, agar Anda bisa memutuskan sesuai kebutuhan dan budget.",
  },
  {
    question: "Bisakah saya menunggu di tempat selama servis berlangsung?",
    answer:
      "Bisa. Untuk servis yang cepat seperti ganti LCD, baterai, atau charging port, Anda bisa menunggu langsung di toko. Kami juga menyediakan tempat duduk yang nyaman selama menunggu.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-bold text-text-primary sm:text-lg">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-100 text-text-secondary"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed font-medium text-text-secondary sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQPage structured data so Google can show these as rich results / PAA
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative bg-surface-50 py-24 md:py-32">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto mb-16 max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-bold tracking-widest text-accent uppercase">
            FAQ
          </p>
          <h2 className="text-3xl font-black tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Pertanyaan yang{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Sering Ditanyakan
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium text-text-secondary">
            Belum ketemu jawabannya? Tanya langsung lewat WhatsApp, kami balas
            secepatnya.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          {faqs.map((item, i) => (
            <FAQAccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-center"
        >
          <Magnetic>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent-dim"
            >
              <MessageCircle className="h-5 w-5" />
              Tanya via WhatsApp
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
