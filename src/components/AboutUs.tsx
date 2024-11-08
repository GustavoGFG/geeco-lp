// src/components/AboutSection.tsx
import React from "react";

export const AboutSection = () => {
  return (
    <section id="aboutus" className="w-full bg-gray-100 py-20">
      <div className="max-w-[1200px] mx-auto md:px-10 px-4">
        {/* About Us and Video Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Us Text */}
          <div className="space-y-6">
            <h2 className="text-2xl font-spartan font-bold uppercase text-tradeoff-primary">
              Transformando Resíduos em Valor Sustentável
            </h2>
            <p className="text-base font-poppins text-tradeoff-primary">
              O trade-off de coprodutos é uma iniciativa da{" "}
              <strong>Geeco Materiais e Engenharia</strong>. A Geeco é
              especialista em ciência e engenharia de materiais, voltada para
              gerar valor a partir de resíduos industriais. Nossa atuação
              abrange setores como mineração, siderurgia e construção civil,
              onde aplicamos tecnologia, inovação e economia circular para criar
              valor econômico e ambiental.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="relative min-h-72 md:h-auto w-full bg-gray-200 flex items-center justify-center rounded-lg">
            {/* Placeholder for video */}
            <span className="text-gray-500">[Vídeo da Empresa]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
