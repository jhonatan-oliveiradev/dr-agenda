import { Calendar,Clock, Shield } from "lucide-react";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

export default function AuthenticationPage() {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-background to-muted/20">
      <div className="flex w-full flex-col lg:flex-row">
        {/* Lado esquerdo - Imagem e texto */}
        <div className="hidden w-full flex-col items-center justify-center bg-primary/5 p-8 lg:flex lg:w-1/2">
          <div className="max-w-md space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-primary">
                Doctor Agenda
              </h1>
              <p className="text-muted-foreground">
                Gerencie sua agenda médica de forma inteligente e eficiente.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="size-5 text-primary" />
                <p className="text-muted-foreground">Agendamento online 24/7</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-primary" />
                <p className="text-muted-foreground">Lembretes automáticos</p>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="size-5 text-primary" />
                <p className="text-muted-foreground">Dados protegidos e seguros</p>
              </div>
            </div>

            <div className="relative h-[300px] w-full">
              <Image
                src="/images/auth-illustration.svg"
                alt="Ilustração de agendamento médico"
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Lado direito - Formulários */}
        <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2">
          <div className="w-full max-w-[400px] space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-semibold tracking-tight">
                Bem-vindo ao Doctor Agenda
              </h2>
              <p className="text-sm text-muted-foreground">
                Acesse sua conta ou crie uma nova para começar
              </p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="register">Criar conta</TabsTrigger>
              </TabsList>
              <div className="min-h-[400px]">
                <TabsContent value="login" className="mt-0">
                  <SignInForm />
                </TabsContent>
                <TabsContent value="register" className="mt-0">
                  <SignUpForm />
                </TabsContent>
              </div>
            </Tabs>

            <div className="max-w-[280px] mx-auto flex items-center justify-center">
               <p className="text-center text-xs text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <a href="/terms" className="underline underline-offset-4 hover:text-primary">
                Termos de Serviço
              </a>{" "}
              e{" "}
              <a href="privacy-policy" className="underline underline-offset-4 hover:text-primary">
                Política de Privacidade
              </a>.
            </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
