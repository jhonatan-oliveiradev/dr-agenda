import { FAQ, Feature, PricingPlan, Stat, Testimonial } from "@/types/landing";

export const features: Feature[] = [
  {
    id: "1",
    title: "Agendamento Online 24/7",
    description:
      "Permita que seus pacientes agendem consultas a qualquer momento, sem necessidade de ligações.",
    icon: "Calendar",
  },
  {
    id: "2",
    title: "Lembretes Automáticos",
    description:
      "Reduza faltas com lembretes automáticos por SMS e e-mail para seus pacientes.",
    icon: "Bell",
  },
  {
    id: "3",
    title: "Prontuário Eletrônico",
    description:
      "Mantenha todos os registros dos pacientes organizados e acessíveis em um só lugar.",
    icon: "FileText",
  },
  {
    id: "4",
    title: "Gestão Financeira",
    description:
      "Controle receitas, despesas e acompanhe o fluxo de caixa da sua clínica.",
    icon: "DollarSign",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dra. Ana Silva",
    role: "Clínica Geral",
    avatar: "/avatars/ana.jpg",
    content:
      "O Doctor Agenda revolucionou a forma como gerencio minha clínica. A redução de faltas foi impressionante!",
    rating: 5,
  },
  {
    id: "2",
    name: "Dr. Carlos Santos",
    role: "Cardiologista",
    avatar: "/avatars/carlos.jpg",
    content:
      "Sistema intuitivo e completo. Os pacientes adoram a facilidade de agendamento online.",
    rating: 5,
  },
  {
    id: "3",
    name: "Dra. Mariana Costa",
    role: "Dermatologista",
    avatar: "/avatars/mariana.jpg",
    content:
      "Excelente suporte e funcionalidades que realmente atendem às necessidades dos médicos.",
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "1",
    name: "Básico",
    description: "Perfeito para consultórios individuais",
    price: 99,
    features: [
      "Até 100 consultas/mês",
      "Agendamento online",
      "Lembretes por e-mail",
      "Suporte por e-mail",
    ],
  },
  {
    id: "2",
    name: "Profissional",
    description: "Ideal para clínicas médicas",
    price: 199,
    isPopular: true,
    features: [
      "Consultas ilimitadas",
      "Agendamento online",
      "Lembretes por SMS e e-mail",
      "Prontuário eletrônico",
      "Suporte prioritário",
      "Relatórios avançados",
    ],
  },
  {
    id: "3",
    name: "Enterprise",
    description: "Para grandes redes de clínicas",
    price: 499,
    features: [
      "Todas as features do Profissional",
      "API personalizada",
      "Gestão multi-unidades",
      "Suporte 24/7",
      "Treinamento da equipe",
      "Personalização completa",
    ],
  },
];

export const stats: Stat[] = [
  {
    id: "1",
    value: "10k+",
    label: "Médicos Ativos",
  },
  {
    id: "2",
    value: "98%",
    label: "Satisfação",
  },
  {
    id: "3",
    value: "24/7",
    label: "Suporte",
  },
  {
    id: "4",
    value: "50k+",
    label: "Consultas/Mês",
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Como funciona o período de teste?",
    answer:
      "Oferecemos 14 dias de teste gratuito com todas as funcionalidades disponíveis. Não é necessário cartão de crédito.",
  },
  {
    id: "2",
    question: "Posso migrar meus dados de outro sistema?",
    answer:
      "Sim! Nossa equipe oferece suporte completo na migração dos seus dados de qualquer outro sistema.",
  },
  {
    id: "3",
    question: "O sistema funciona offline?",
    answer:
      "Sim, o Doctor Agenda funciona offline e sincroniza automaticamente quando a conexão é restabelecida.",
  },
  {
    id: "4",
    question: "Como é feito o suporte?",
    answer:
      "Oferecemos suporte por e-mail, chat e telefone, com tempos de resposta rápidos e eficientes.",
  },
];
