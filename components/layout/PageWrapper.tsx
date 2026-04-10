"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * PageWrapper — wraps any page with a smooth fade-in on mount.
 * Used in app/layout.tsx to give every page transition a premium feel.
 */
export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
