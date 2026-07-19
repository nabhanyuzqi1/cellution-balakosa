import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "./Icons";
import Magnetic from "./Magnetic";

const INSTAGRAM_URL = "https://www.instagram.com/cellution.balakosa/";
const TIKTOK_URL = "https://www.tiktok.com/@cellution_balakosa";
const WHATSAPP_URL =
  "https://wa.me/6289630162928?text=Halo%20Cellution%2C%20saya%20ingin%20konsultasi%20servis%20HP";

const footerLinks = [
  {
    title: "Layanan",
    links: [
      { label: "Ganti LCD & Layar", href: "#layanan" },
      { label: "Ganti Baterai", href: "#layanan" },
      { label: "Perbaikan Software", href: "#layanan" },
      { label: "Water Damage", href: "#layanan" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#hero" },
      { label: "Ulasan Pelanggan", href: "#ulasan" },
      { label: "Lokasi", href: "#lokasi" },
      { label: "Hubungi Kami", href: WHATSAPP_URL },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="mb-6 inline-flex items-center gap-2">
              <img
                src="/logo-cellution.jpg"
                alt="Cellution Balakosa"
                loading="lazy"
                width={160}
                height={48}
                className="h-12 w-auto rounded-md object-contain mix-blend-multiply"
              />
            </a>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-text-secondary">
              Layanan servis smartphone profesional dengan teknisi berpengalaman
              dan sparepart berkualitas tinggi. Solusi terpercaya untuk segala
              kerusakan HP Anda.
            </p>
            <div className="mt-8 flex gap-3">
              <Magnetic>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-50 text-text-secondary border border-border shadow-sm transition-all hover:bg-white hover:text-pink-500 hover:shadow-md"
                  aria-label="Instagram Cellution Balakosa"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-50 text-text-secondary border border-border shadow-sm transition-all hover:bg-white hover:text-black hover:shadow-md"
                  aria-label="TikTok Cellution Balakosa"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-50 text-text-secondary border border-border shadow-sm transition-all hover:bg-white hover:text-green-500 hover:shadow-md"
                  aria-label="WhatsApp Cellution Balakosa"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-base font-bold text-text-primary">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm font-semibold text-text-muted">
            &copy; {new Date().getFullYear()} Cellution Balakosa. Seluruh hak
            cipta dilindungi.
          </p>
          <p className="text-sm font-semibold text-text-muted">
            Servis Smartphone Profesional di Sampit
          </p>
        </div>
      </div>
    </footer>
  );
}
