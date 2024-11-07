import React from "react";
import { ArrowRightLeft, Ruler, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Differentials = () => {
  return (
    <section className="w-full bg-gradient-to-r from-tradeoff-bg_gradient_dark to-tradeoff-bg_gradient_light text-white py-12 shadow-lg relative">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-2xl uppercase font-spartan font-bold text-center mb-10">
          Por que Escolher a Geeco?
        </h2>

        <div className="flex justify-center flex-wrap gap-8 px-8">
          <DifferentialCard
            icon={<ArrowRightLeft size={50} className="text-yellow-300" />}
            title="Gestão Completa"
            description="Economize tempo e recursos com uma gestão completa do trade-off incluindo questões normativas."
          />
          <DifferentialCard
            icon={<Search size={50} className="text-yellow-300" />}
            title="Avaliação Sem Compromisso"
            description="Obtenha uma análise completa de suas oportunidades de
                   valorização de resíduos, com nossa avaliação inicial gratuita
                   e sem compromisso."
          />
          {/* <DifferentialCard
            icon={<HandCoins size={50} className="text-yellow-300" />}
            title="Resultados Garantidos"
            description="Transforme resíduos em receita: só cobramos após a
                concretização de uma venda, garantindo o sucesso para seu
                negócio."
          /> */}
          {/* <DifferentialCard
            icon={<UserCheck size={50} className="text-yellow-300" />}
            title="Especialistas em Economia Circular"
            description="Confie em nossa expertise em sustentabilidade e economia
                   circular para potencializar os resultados e proteger o meio
                   ambiente."
          /> */}
          <DifferentialCard
            icon={<Ruler size={50} className="text-yellow-300" />}
            title="Suporte Sob Medida"
            // description="Receba atendimento personalizado e eficaz, com uma equipe pronta para
            //      entender e atender às necessidades específicas de seu setor."
            description="Oferecemos atendimento personalizado e eficaz com uma equipe pronta para entender e atender às necessidades específicas de cada negociação."
          />
        </div>

        <div className="text-center absolute top-0 right-0 left-0 -translate-y-[calc(50%+5px)]">
          <Button variant="tradeoff_secondary">
            Solicite uma avaliação gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

interface DifferentialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
// Reusable Differential Card Component
const DifferentialCard = ({
  icon,
  title,
  description,
}: DifferentialCardProps) => (
  <div className="flex flex-col items-center text-center px-4 gap-1 w-[330px]">
    {icon}
    <div className="h-full flex flex-col">
      <h3 className="font-poppins text-lg uppercase">{title}</h3>
      <p className="text-sm font-poppins">{description}</p>
    </div>
  </div>
);
