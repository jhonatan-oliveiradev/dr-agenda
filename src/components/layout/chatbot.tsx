"use client";

import { MessageSquare } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed right-4 bottom-4 size-12 rounded-full shadow-lg"
          size="icon"
        >
          <MessageSquare className="size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chat</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="h-[300px] overflow-y-auto rounded-lg border p-4">
            {/* Mensagens do chat aqui */}
          </div>
          <div className="flex gap-2">
            <Textarea
              placeholder="Digite sua mensagem..."
              className="min-h-[60px]"
            />
            <Button>Enviar</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
