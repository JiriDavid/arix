"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-electric focus-visible:ring-offset-navy";

const variants = {
  primary: "bg-electric text-white hover:bg-electric/90",
  secondary: "bg-white/10 text-white hover:bg-white/20",
  ghost: "bg-transparent border border-white/20 text-white hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const Component = href ? Link : "button";

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Component
        href={href}
        className={`${baseStyles} ${
          variants[variant] ?? variants.primary
        } ${className}`.trim()}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
