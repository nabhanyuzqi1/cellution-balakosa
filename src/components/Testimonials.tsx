import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  TestimonialsColumn,
  type Testimonial,
} from "./ui/testimonials-columns-1";
import { reviews, googleRating } from "../data/reviews";

const MAPS_REVIEWS_LINK =
  "https://www.google.com/maps/search/?api=1&query=TOKO%20SERVIS%20HP%20CELLUTION&query_place_id=ChIJMbGeQi-_4i0RlmhtwgFhp4M";

// Real review data → testimonial cards. No profile photos are used (Google
// Maps avatars aren't publicly embeddable), so each card falls back to an
// initials avatar. Star rating is shown per review.
const testimonials: Testimonial[] = reviews.map((review) => ({
  text: review.text,
  initials: review.avatar,
  name: review.name,
  role: "Ulasan Google Maps",
  rating: review.rating,
}));

export default function Testimonials() {
  return (
    <section id="ulasan" className="relative bg-surface-50 py-24 md:py-32">
      <div className="mx-auto mb-16 max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[600px] flex-col items-center justify-center text-center"
        >
          <div className="flex justify-center">
            <div className="rounded-full border border-border bg-white px-4 py-1 text-sm font-bold tracking-widest text-accent uppercase shadow-sm">
              Ulasan Pelanggan
            </div>
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Ulasan Google{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Servis HP Cellution
            </span>
          </h2>
          <p className="mt-5 max-w-lg text-base font-medium text-text-secondary">
            Pengalaman nyata pelanggan yang mempercayakan servis smartphone
            mereka kepada Cellution Balakosa.
          </p>

          {/* Google rating pill */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 shadow-sm">
            <span className="text-2xl font-black text-text-primary">
              {googleRating.score.toFixed(1)}
            </span>
            <span className="text-lg text-amber-400">★★★★★</span>
            <span className="text-sm font-semibold text-text-muted">
              {googleRating.totalReviews} ulasan Google
            </span>
          </div>
        </motion.div>

        {/* Only 3 real reviews exist today, so every column plays the same
            set at a different speed/offset rather than slicing them thin —
            still 100% real testimonials, just presented across more lanes. */}
        <div className="mt-12 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[560px] overflow-hidden">
          <TestimonialsColumn testimonials={testimonials} duration={18} />
          <TestimonialsColumn
            testimonials={testimonials}
            className="hidden sm:block"
            duration={24}
          />
          <TestimonialsColumn
            testimonials={testimonials}
            className="hidden lg:block"
            duration={21}
          />
        </div>

        <div className="mt-4 text-center">
          <a
            href={MAPS_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-colors hover:text-accent-dim"
          >
            Lihat semua {googleRating.totalReviews} ulasan di Google Maps
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
