// app/sections/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="px-8 py-16 max-w-3xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <motion.ul
        className="space-y-4"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <li>
          <strong>AWS Solutions Provider Partner</strong>: Implementing secure,
          scalable, and cost-optimized solutions for a range of clients.
        </li>
        <li>
          <strong>10+ Years in Full-Stack Dev</strong>: Expertise in React,
          Node/Bun, Next.js, and various databases (SQL/NoSQL).
        </li>
        <li>
          <strong>Cloud Architecture</strong>: Designing microservices, CI/CD
          pipelines, and infrastructure-as-code with AWS, Terraform, etc.
        </li>
      </motion.ul>
    </section>
  );
}
