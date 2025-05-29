import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";

export const RightSide = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Bem-vindo ao Doctor Agenda
          </h2>
          <p className="text-muted-foreground text-sm">
            Acesse sua conta ou crie uma nova para começar
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Entrar</TabsTrigger>
            <TabsTrigger value="register">Criar conta</TabsTrigger>
          </TabsList>
          <div className="mt-2 min-h-[400px]">
            <TabsContent value="login" className="mt-0">
              <SignInForm />
            </TabsContent>
            <TabsContent value="register" className="mt-0">
              <SignUpForm />
            </TabsContent>
          </div>
        </Tabs>

        <div className="mx-auto flex max-w-[280px] items-center justify-center">
          <p className="text-muted-foreground text-center text-xs">
            Ao continuar, você concorda com nossos{" "}
            <a
              href="/terms"
              className="hover:text-primary underline underline-offset-4"
            >
              Termos de Serviço
            </a>{" "}
            e{" "}
            <a
              href="privacy-policy"
              className="hover:text-primary underline underline-offset-4"
            >
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
