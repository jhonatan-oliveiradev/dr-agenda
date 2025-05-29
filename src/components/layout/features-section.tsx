"use client";

import { motion } from "motion/react";

import { FeatureCard } from "@/components/particles/feature-card";
import { Container } from "@/components/ui/container";
import { features } from "@/data/landing";

export const FeaturesSection = () => {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo que você precisa para gerenciar sua clínica
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Recursos poderosos que vão transformar a forma como você gerencia
            sua clínica médica.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
