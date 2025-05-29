"use client";

import { motion } from "motion/react";

import { Container } from "@/components/ui/container";
import { stats } from "@/data/landing";

export const StatsSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="mt-2 text-sm opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
