import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";

const navigation = {
  product: [
    { name: "Recursos", href: "#features" },
    { name: "Preços", href: "#pricing" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ],
  company: [
    { name: "Sobre", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Contato", href: "#" },
  ],
  legal: [
    { name: "Privacidade", href: "#" },
    { name: "Termos", href: "#" },
    { name: "Cookies", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-muted/40 border-t">
      <Container>
        <div className="py-12 md:flex md:justify-between md:gap-8">
          <div className="space-y-8 md:max-w-[300px]">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Doctor Agenda</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Simplificando a gestão de clínicas médicas com tecnologia e
              inovação.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-end gap-12 md:mt-0">
            <div>
              <h3 className="text-sm font-semibold">Produto</h3>
              <ul className="mt-4 space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Empresa</h3>
              <ul className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-center text-sm">
              © 2025 Doctor Agenda. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-center text-sm">
              Desenvolvido e mantido por{" "}
              <Link
                href="https://www.enex.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary font-medium underline underline-offset-4"
              >
                NX Studio
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
