
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { LeftSide } from "./components/left-side";
import { RightSide } from "./components/right-side";

export default async function AuthenticationPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (session?.user) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-background to-muted/20">
      <div className="flex w-full flex-col lg:flex-row">
        {/* Lado esquerdo - Imagem e texto */}
        <LeftSide />

        {/* Lado direito - Formulários */}
        <RightSide />
      </div>
    </div>
  );
}
