// app/components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import NativeMotif from "./NativeMotif";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 text-center overflow-hidden">
      {/* Subtle background motif */}
      <NativeMotif />

      <motion.h1
        className="text-4xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Empowering the Cloud with Native Precision
      </motion.h1>

      <motion.p
        className="text-lg max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’m a Software Developer and Cloud Solutions Architect <br />
        with 10+ years of experience. Certified AWS Cloud Architect <br />
        and proud member of the Gros-Ventre tribe from Fort Belknap.
      </motion.p>
    </section>
  );
}
