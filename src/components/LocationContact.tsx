import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
} from "lucide-react";
import Magnetic from "./Magnetic";

const WHATSAPP_URL =
  "https://wa.me/6289630162928?text=Halo%20Cellution%2C%20saya%20ingin%20konsultasi%20servis%20HP";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.886154502784!2d112.9572561103383!3d-2.5439739382829862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de2bf2f429eb131%3A0x83a76101c26d6896!2sTOKO%20SERVIS%20HP%20CELLUTION!5e0!3m2!1sen!2sid!4v1784403938300!5m2!1sen!2sid";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=TOKO%20SERVIS%20HP%20CELLUTION&query_place_id=ChIJMbGeQi-_4i0RlmhtwgFhp4M";

const businessHours = [
  { day: "Senin – Jumat", hours: "09:00 – 21:00" },
  { day: "Sabtu", hours: "09:00 – 21:00" },
  { day: "Minggu", hours: "10:00 – 18:00" },
];

export default function LocationContact() {
  return (
    <section id="lokasi" className="relative py-24 md:py-32 bg-surface-0">
      <div className="mx-auto mb-24 max-w-7xl md:mb-32">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

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
            Lokasi & Kontak
          </p>
          <h2 className="text-3xl font-black tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Kunjungi Kami
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium text-text-secondary">
            Datang langsung ke toko kami atau hubungi via WhatsApp untuk
            konsultasi gratis.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Contact Info - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {/* Address Card */}
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-border transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-100">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">
                Alamat
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-text-secondary">
                Jl. Pangeran Antasari, Mentawa Baru Hulu
                <br />
                Kec. Mentawa Baru Ketapang, Kotawaringin Timur
                <br />
                Kalimantan Tengah 74323
              </p>
              <Magnetic>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-surface-50 px-4 py-2.5 text-sm font-bold text-accent transition-colors hover:bg-surface-100 hover:text-accent-dim"
                >
                  <Navigation className="h-4 w-4" />
                  Buka di Google Maps
                </a>
              </Magnetic>
            </div>

            {/* Business Hours */}
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-border transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-100">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">
                Jam Operasional
              </h3>
              <div className="mt-4 space-y-3">
                {businessHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between text-sm font-medium"
                  >
                    <span className="text-text-secondary">{item.day}</span>
                    <span className="font-bold text-text-primary">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Magnetic>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center gap-4 rounded-3xl bg-green-50 p-6 ring-1 ring-green-200 transition-all hover:bg-green-100 hover:ring-green-300 hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition-transform group-hover:scale-110">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-base font-bold text-green-800">
                    Chat via WhatsApp
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-green-700/80">
                    Respon cepat &amp; konsultasi gratis
                  </div>
                </div>
              </a>
            </Magnetic>

            {/* Phone */}
            <Magnetic>
              <a
                href="tel:+6289630162928"
                className="group flex w-full items-center gap-4 rounded-3xl bg-white p-6 border border-border shadow-sm transition-all hover:bg-surface-50 hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface-100 text-accent transition-transform group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-base font-bold text-text-primary">
                    Telepon
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-text-secondary">
                    +62 896-3016-2928
                  </div>
                </div>
              </a>
            </Magnetic>
          </motion.div>

          {/* Map - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-3xl lg:col-span-3 shadow-sm border border-border bg-surface-100"
          >
            <div className="relative h-full min-h-[400px] w-full lg:min-h-full">
              <iframe
                src={MAPS_EMBED_URL}
                className="h-full w-full"
                style={{
                  border: 0,
                  minHeight: "400px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Cellution Balakosa di Google Maps"
              />
              {/* Overlay gradient at bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
