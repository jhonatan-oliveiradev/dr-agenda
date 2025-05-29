"use client";

import { motion } from "motion/react";

import { TestimonialCard } from "@/components/particles/testimonial-card";
import { Container } from "@/components/ui/container";
import { testimonials } from "@/data/landing";

export const TestimonialsSection = () => {
  return (
    <section className="bg-muted/50 py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Veja como o Doctor Agenda está transformando a gestão de clínicas
            médicas em todo o Brasil.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
