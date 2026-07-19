export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  device?: string;
}

// Real reviews pulled from the business's actual Google Maps listing
// ("TOKO SERVIS HP CELLUTION", Sampit) — no invented names or details.
export const reviews: Review[] = [
  {
    id: 1,
    name: "Andy Rifkiawan",
    avatar: "AR",
    rating: 5,
    date: "2 bulan lalu",
    text: "Pelayanan baik, perbaikan sesuai dengan kendala yang dialami.",
  },
  {
    id: 2,
    name: "Aditya Abi",
    avatar: "AA",
    rating: 5,
    date: "2 bulan lalu",
    text: "Pelayanannya cukup baik, servisan cepat bisa ditunggu, harga murah dan terjangkau. Dijamin gong banget deh service di sini 🔥",
  },
  {
    id: 3,
    name: "Violla Vertiana",
    avatar: "VV",
    rating: 5,
    date: "2 bulan lalu",
    text: "Rekomen banget guys servisan disini, ada free minuman juga 👍🏻",
  },
];

// Real aggregate from Google Maps (not a placeholder) — keep in sync with
// the live listing when it changes.
export const googleRating = {
  score: 5.0,
  totalReviews: 34,
};
