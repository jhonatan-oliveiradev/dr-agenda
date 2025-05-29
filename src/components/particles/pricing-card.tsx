import { motion } from "motion/react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PricingPlan } from "@/types/landing";

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export const PricingCard = ({ plan, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-card relative rounded-lg border p-6 ${
        plan.isPopular ? "border-primary shadow-lg" : ""
      }`}
    >
      {plan.isPopular && (
        <div className="bg-primary text-primary-foreground absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-medium">
          Mais Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        <p className="text-muted-foreground mt-1 text-sm">{plan.description}</p>
      </div>
      <div className="mb-6">
        <span className="text-3xl font-bold">R$ {plan.price}</span>
        <span className="text-muted-foreground">/mês</span>
      </div>
      <ul className="mb-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="text-primary h-4 w-4" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className="w-full"
        variant={plan.isPopular ? "default" : "outline"}
      >
        Começar Agora
      </Button>
    </motion.div>
  );
};
