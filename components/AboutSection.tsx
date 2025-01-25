// app/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="px-8 py-16 max-w-3xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="leading-relaxed"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Hello! I&apos;m a full-stack developer with a deep passion for building
        scalable cloud solutions. Drawing inspiration from my Gros-Ventre
        heritage, I strive to weave authenticity and resilience into every
        project. With over a decade of experience—and as an AWS Certified Cloud
        Solutions Architect—I specialize in creating cost-effective, robust, and
        secure architectures for clients across various industries.
      </motion.p>
    </section>
  );
}
