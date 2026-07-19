import {
  Smartphone,
  Battery,
  Cpu,
  Droplets,
  PlugZap,
  Camera,
  type LucideIcon,
} from "lucide-react";

// LCD & Baterai: foto asli hasil servis Cellution (crop dari foto toko)
import lcdImg from "../assets/lcd-real.webp";
import batteryImg from "../assets/battery-real.webp";
// Sisanya: foto stok bebas lisensi (Unsplash), bukan ilustrasi AI
import softwareImg from "../assets/software-real.webp";
import waterDamageImg from "../assets/water-real.webp";
import chargingImg from "../assets/charging-real.webp";
import cameraImg from "../assets/camera-real.webp";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "lcd",
    icon: Smartphone,
    title: "Ganti LCD & Layar",
    description:
      "Perbaikan layar retak, LCD bergaris, atau touchscreen tidak responsif dengan sparepart berkualitas tinggi.",
    accentColor: "from-accent to-orange-400",
    image: lcdImg,
  },
  {
    id: "battery",
    icon: Battery,
    title: "Ganti Baterai",
    description:
      "Baterai boros atau kembung? Kami ganti dengan baterai original bergaransi.",
    accentColor: "from-emerald-500 to-teal-500",
    image: batteryImg,
  },
  {
    id: "software",
    icon: Cpu,
    title: "Perbaikan Software",
    description:
      "Flash ulang, update sistem, bypass, dan solusi software lainnya.",
    accentColor: "from-violet-500 to-indigo-500",
    image: softwareImg,
  },
  {
    id: "water-damage",
    icon: Droplets,
    title: "Water Damage",
    description:
      "Smartphone terkena air? Penanganan cepat dan tepat untuk meminimalisir kerusakan.",
    accentColor: "from-sky-500 to-blue-500",
    image: waterDamageImg,
  },
  {
    id: "charging",
    icon: PlugZap,
    title: "Ganti Port Charging",
    description: "Perbaikan port charging longgar atau tidak berfungsi.",
    accentColor: "from-amber-500 to-accent",
    image: chargingImg,
  },
  {
    id: "camera",
    icon: Camera,
    title: "Perbaikan Kamera",
    description:
      "Kamera blur, pecah, atau error? Kami tangani dengan sparepart terbaik.",
    accentColor: "from-rose-500 to-accent",
    image: cameraImg,
  },
];
