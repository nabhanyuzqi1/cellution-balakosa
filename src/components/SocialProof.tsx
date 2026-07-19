import { motion } from "framer-motion";
import { Plus, ArrowUpRight, Video } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "./Icons";
import Magnetic from "./Magnetic";

const INSTAGRAM_URL = "https://www.instagram.com/cellution.balakosa/";
const TIKTOK_URL = "https://www.tiktok.com/@cellution_balakosa";

// Follower/post counts reflect the real @cellution.balakosa profile — update
// here when they change meaningfully.
const stats = [
  { value: "4", label: "Postingan" },
  { value: "167", label: "Pengikut" },
  { value: "5.0★", label: "Rating" },
];

export default function SocialProof() {
  return (
    <section className="relative bg-surface-0 py-24 md:py-32">
      <div className="mx-auto mb-16 max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-bold tracking-widest text-accent uppercase">
            Media Sosial
          </p>
          <h2 className="text-3xl font-black tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Ikuti Perjalanan{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Servis Kami
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-text-secondary md:text-lg">
            Hasil servis terbaru, before/after, tips perawatan, dan promo
            eksklusif — langsung dari Instagram &amp; TikTok kami.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Instagram profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-black/5"
          >
            {/* Profile header */}
            <div className="flex flex-1 flex-col gap-6 border-b border-border p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-4">
                  {/* Avatar */}
                  <div className="shrink-0">
                    <div className="rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-[3px]">
                      <div className="rounded-full bg-white p-1">
                        <img
                          src="/logo-cellution.jpg"
                          alt="Cellution Balakosa"
                          loading="lazy"
                          width={64}
                          height={64}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-lg font-black text-text-primary">
                        cellution.balakosa
                      </h3>
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500 text-[10px] text-white">
                        ✓
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-text-secondary">
                      Instagram
                    </p>
                  </div>
                </div>

                <Magnetic className="shrink-0">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-pink-500/25 transition-shadow hover:shadow-xl sm:w-auto"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    Ikuti
                  </a>
                </Magnetic>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-left">
                    <div className="text-lg font-black text-text-primary">
                      {s.value}
                    </div>
                    <div className="text-xs font-semibold text-text-muted">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-relaxed font-medium text-text-secondary">
                🔧 Servis HP profesional di Sampit, Kalimantan Tengah
                <br />
                📍 Ganti LCD · Baterai · Water Damage · Garansi resmi
              </p>
            </div>

            {/* Footer CTA */}
            <div className="p-6 text-center sm:p-8">
              <Magnetic>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-border bg-surface-50 px-6 py-3.5 text-sm font-bold text-text-primary transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Plus className="h-4 w-4" />
                  Lihat Semua Postingan
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* TikTok profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-black/5"
          >
            {/* Profile header */}
            <div className="flex flex-1 flex-col gap-6 border-b border-border p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-4">
                  {/* Avatar */}
                  <div className="shrink-0">
                    <div className="rounded-full bg-black p-[3px]">
                      <div className="rounded-full bg-white p-1">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                          <TikTokIcon className="h-7 w-7 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-black text-text-primary">
                      cellution_balakosa
                    </h3>
                    <p className="text-sm font-semibold text-text-secondary">
                      TikTok
                    </p>
                  </div>
                </div>

                <Magnetic className="shrink-0">
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition-shadow hover:shadow-xl sm:w-auto"
                  >
                    <TikTokIcon className="h-4 w-4" />
                    Ikuti
                  </a>
                </Magnetic>
              </div>

              {/* Highlight instead of stats — no public follower count to show honestly */}
              <div className="flex items-center gap-2 rounded-2xl bg-surface-50 px-4 py-3">
                <Video className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-semibold text-text-secondary">
                  Video proses servis asli, teknisi kami di balik layar
                </span>
              </div>

              <p className="text-sm leading-relaxed font-medium text-text-secondary">
                🎬 Proses ganti LCD, baterai, dan bypass — direkam langsung di
                bengkel, bukan animasi.
                <br />
                📍 Servis HP profesional di Sampit
              </p>
            </div>

            {/* Footer CTA */}
            <div className="p-6 text-center sm:p-8">
              <Magnetic>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-border bg-surface-50 px-6 py-3.5 text-sm font-bold text-text-primary transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Plus className="h-4 w-4" />
                  Tonton Semua Video
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
