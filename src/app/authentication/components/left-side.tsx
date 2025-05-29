import { Calendar, Clock, Shield } from "lucide-react";
import Image from "next/image";

export const LeftSide = () => {
  return (
    <div className="bg-primary/5 hidden w-full flex-col items-center justify-center p-8 lg:flex lg:w-1/2">
      <div className="max-w-md space-y-8">
        <div className="space-y-2">
          <h1 className="text-primary text-4xl font-bold tracking-tight">
            Doctor Agenda
          </h1>
          <p className="text-muted-foreground max-w-64">
            Gerencie sua agenda médica de forma inteligente e eficiente.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Calendar className="text-primary size-5" />
            <p className="text-muted-foreground">Agendamento online 24/7</p>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-primary size-5" />
            <p className="text-muted-foreground">Lembretes automáticos</p>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="text-primary size-5" />
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
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};
