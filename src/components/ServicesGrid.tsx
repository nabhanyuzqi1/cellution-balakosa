import { motion } from "framer-motion";
import { Sofa, Coffee, Timer } from "lucide-react";
import { services } from "../data/services";

const perks = [
  { icon: Sofa, label: "Ruang Tunggu" },
  { icon: Coffee, label: "Minuman Gratis" },
  { icon: Timer, label: "Servis Cepat" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring" as const, bounce: 0.2 },
  },
};

export default function ServicesGrid() {
  return (
    <section id="layanan" className="relative py-24 md:py-32 bg-surface-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-bold tracking-widest text-accent uppercase">
            Layanan Kami
          </p>
          <h2 className="text-3xl font-black tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Solusi Lengkap untuk{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Smartphone Anda
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-text-secondary md:text-lg">
            Kami menangani berbagai jenis kerusakan smartphone dengan teknisi
            profesional dan sparepart berkualitas tinggi.
          </p>
        </motion.div>

        {/* Services Grid — uniform 3-column, symmetric */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-border"
            >
              {/* Illustration banner */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-100">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Scrim so the glass badge stays legible over any photo */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                {/* Icon badge — glassmorphism, kept fully inside the image
                    so it never gets clipped by the banner's overflow-hidden */}
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/20 shadow-lg backdrop-blur-md">
                  <service.icon className="h-6 w-6 text-white drop-shadow-sm" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 pt-6 pb-7">
                <h3 className="mb-2 text-xl font-bold tracking-tight text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-light p-1 shadow-xl shadow-accent/20"
        >
          <div className="flex flex-col items-center justify-between gap-6 rounded-[22px] bg-surface-0 px-8 py-10 sm:flex-row sm:px-12 md:py-12">
            <div className="flex-1 text-center sm:text-left">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-surface-100 px-3 py-1 text-xs font-bold text-accent">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                Layanan Unggulan
              </div>
              <h3 className="text-2xl font-black tracking-tight text-text-primary md:text-3xl">
                Servis Cepat, Bisa Ditunggu!
              </h3>
              <p className="mt-3 max-w-xl text-base font-medium text-text-secondary">
                Nikmati perbaikan perangkat Anda secara langsung. Kami menyediakan ruang tunggu yang nyaman, sejuk, lengkap dengan fasilitas minuman gratis selama Anda menunggu.
              </p>
            </div>
            
            <div className="flex shrink-0 gap-4">
              {perks.map((perk) => (
                <div key={perk.label} className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-light text-white shadow-md shadow-accent/25">
                    <perk.icon className="h-6 w-6" />
                  </div>
                  <span className="max-w-[70px] text-center text-[11px] font-semibold leading-tight text-text-secondary">
                    {perk.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
