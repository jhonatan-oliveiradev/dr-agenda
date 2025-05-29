"use client";

import { motion } from "motion/react";

import { PricingCard } from "@/components/particles/pricing-card";
import { Container } from "@/components/ui/container";
import { pricingPlans } from "@/data/landing";

export const PricingSection = () => {
  return (
    <section className="py-20" id="pricing">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Escolha o plano ideal para o seu negócio e comece a transformar sua
            clínica hoje mesmo.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
