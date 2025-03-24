// app/sections/ContactSection.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="px-8 py-16 max-w-3xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Interested in collaborating or learning more? Drop me a line at{" "}
        <a
          href="mailto:justin@red-arrow.io"
          className="font-bold underline hover:text-blue-500"
        >
          justin@red-arrow.io
        </a>
        .
      </motion.p>
    </section>
  );
}
