import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A subtle, cursor-independent hover/tap affordance. An earlier version
 * tracked the mouse position and dragged the element toward the cursor,
 * which combined with buttons' own hover/active scale classes to feel
 * erratic on click. This just does a small uniform zoom.
 */
export default function Magnetic({ children, className }: MagneticProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
