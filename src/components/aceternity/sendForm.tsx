"use client";

import React from "react";
import { Label } from "@/components/aceternity/label";
import { Input } from "@/components/aceternity/input";
import { cn } from "@/utils/cn";
import { useAppContext } from "@/hooks/useModal";

export function SendForm() {
  const {toggleOpen} = useAppContext()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  
  return (
    <div className="md:mt-12 absolute z-50 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-8 shadow-input bg-fund">
      <h2 className="font-bold text-center text-4xl text-white">
        Entre em contato
      </h2>
      <p className="text-neutral-600 text-base max-w-sm mt-2 dark:text-neutral-300 text-center">
        Entraremos em contato para criarmos uma excelente estratégia!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="firstname">Seu nome</Label>
            <Input id="firstname" placeholder="" type="text" />
          </LabelInputContainer>
          
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email corporativo</Label>
            <Input id="email" placeholder="" type="text" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="contact">Telefone/WhatsApp</Label>
            <Input id="contact" placeholder="" type="text" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="company">Nome da empresa</Label>
            <Input id="company" placeholder="" type="text" />
          </LabelInputContainer>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <button
          className=" bg-gradient-to-br relative group/btn from-orange-dark to-orange-semi-light block  w-full text-white rounded-3xl h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
         Enviar
          <BottomGradient />
        </button>

        <button
        onClick={() => toggleOpen()}
          className="mt-4 bg-fund relative group/btn  w-full text-white rounded-3xl h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
         Cancelar
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-orange-dark to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
