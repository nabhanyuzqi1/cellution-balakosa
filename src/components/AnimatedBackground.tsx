import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Primary orb - Icy Cyan */}
      <motion.div
        className="absolute top-1/4 left-1/3 h-[520px] w-[520px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(125,211,252,0.45) 0%, rgba(125,211,252,0) 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -60, 40, 80, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary orb - Deep Teal */}
      <motion.div
        className="absolute top-1/2 right-1/4 h-[440px] w-[440px] rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(6,182,212,0) 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, -80, 60, -40, 0],
          y: [0, 60, -40, -60, 0],
          scale: [1, 1.05, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tertiary orb - Frost White */}
      <motion.div
        className="absolute bottom-1/4 left-1/2 h-[380px] w-[380px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(224,242,254,0.5) 0%, rgba(224,242,254,0) 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, 40, -60, 0],
          y: [0, 80, -40, 0],
          scale: [1.05, 0.95, 1.1, 1.05],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
