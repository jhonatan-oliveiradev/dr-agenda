"use client";

import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const features = [
  "Agendamento online 24/7",
  "Lembretes automáticos",
  "Prontuário eletrônico",
  "Gestão financeira",
];

export const HeroSection = () => {
  return (
    <section className="from-background to-muted/20 relative overflow-hidden bg-gradient-to-b py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="bg-primary/20 h-[500px] w-[500px] rounded-full blur-3xl" />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2">
          <div className="bg-primary/10 h-[300px] w-[300px] rounded-full blur-3xl" />
        </div>
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-muted/50 inline-flex items-center rounded-full border px-3 py-1 text-sm"
              >
                <BadgeCheck className="text-primary mr-2 size-4" />
                Nova versão disponível
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight sm:text-6xl"
              >
                Gerencie sua clínica médica{" "}
                <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
                  com eficiência
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-muted-foreground text-lg"
              >
                Simplifique o agendamento, reduza faltas e melhore a experiência
                dos seus pacientes com nossa solução completa.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="grid gap-2 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex w-full flex-col gap-4 sm:flex-row"
            >
              <Button size="lg" className="w-full sm:w-auto">
                Começar Agora
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Agendar Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <div className="from-primary/20 to-primary/5 absolute inset-0 rounded-2xl bg-gradient-to-br" />
            <Image
              src="/images/hero-illustration.svg"
              alt="Ilustração de agendamento"
              width={800}
              height={600}
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
