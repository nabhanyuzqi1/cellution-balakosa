import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    text: "LCD iPhone saya pecah parah, tapi setelah diservis di Cellution hasilnya seperti baru lagi. Harga reasonable dan cepat!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Pelanggan iPhone 13 Pro",
  },
  {
    text: "Ganti baterai HP saya selesai dalam 30 menit dan sekarang awet banget. Pelayanan ramah dan profesional.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Pelanggan Samsung S23",
  },
  {
    text: "Tim teknisinya sangat membantu, memandu dari awal sampai selesai dan memberikan garansi servis. Sangat memuaskan.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Pelanggan OPPO Reno",
  },
  {
    text: "HP kena air dan mati total, ternyata masih bisa diselamatkan di Cellution. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Pelanggan Xiaomi",
  },
  {
    text: "Fitur servisnya lengkap dan dukungannya cepat, membuat pengalaman perbaikan HP jadi jauh lebih mudah.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Pelanggan Realme",
  },
  {
    text: "Proses servisnya melebihi ekspektasi. Rapi, cepat, dan hasilnya memuaskan.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Pelanggan Vivo",
  },
  {
    text: "Kamera HP saya blur parah, setelah diservis hasilnya jernih seperti baru. Fair price!",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Pelanggan iPhone 14",
  },
  {
    text: "Mereka memberikan solusi yang melebihi ekspektasi, memahami kebutuhan dan hasil servisnya rapi.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Pelanggan Samsung A54",
  },
  {
    text: "Port charging longgar sudah beres di Cellution setelah ke beberapa tempat lain gagal. Mantap!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Pelanggan Redmi Note 12",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default { Testimonials };
