import { Button } from "@/components/ui/Button";
import React from "react";

export const FinalCTA = () => {
  return (
    <section className="w-full bg-gray-100 text-white py-12 text-center px-4 bg-gradient-to-r from-tradeoff-bg_gradient_dark to-tradeoff-bg_gradient_light">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-spartan font-bold uppercase">
          Pronto para transformar resíduos em valor?
        </h2>
        <p className="text-base font-poppins">
          Junte-se ao movimento da economia circular e descubra o potencial dos
          seus resíduos. A <span className="font-semibold">Geeco</span> está
          aqui para oferecer uma avaliação gratuita que traz oportunidades
          sustentáveis e rentáveis para o seu negócio.
        </p>
        <Button variant="tradeoff_secondary">
          Quero minha avaliação gratuita
        </Button>
      </div>
    </section>
  );
};
