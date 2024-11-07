import { Button } from "@/components/ui/Button";
import { BookOpenCheck, Handshake, Unplug } from "lucide-react";
import React from "react";
import { CustomCard } from "./ui/CustomCard";

export const BuyerBenefits = () => {
  const benefits = [
    "Reduza seus custos com matéria-prima",
    "Acesso a matéria-prima sustentável e de qualidade",
    // "Ampliação de fornecedores confiáveis",
    "Marketing positivo com práticas sustentáveis",
    // "Compromisso com responsabilidade ambiental",
  ];

  const processSteps = [
    {
      number: 1,
      title: "Avalie",
      icon: <BookOpenCheck size={22} className="text-yellow-300" />,
      subtitle: "Solicite uma avaliação gratuita",
      description:
        "Entenda o valor do seu resíduo. Nossa análise inicial revela o potencial econômico e sustentável dos seus materiais, sem compromisso. Descubra como podemos transformar seu resíduo em um ativo valioso.",
    },
    {
      number: 2,
      title: "Conecte",
      icon: <Unplug size={22} className="text-yellow-300" />,
      subtitle: "A conexão com o parceiro ideal",
      description:
        "Aproveite nossa rede de parceiros para destinar seus resíduos e ainda gerar receita extra. Podemos priorizar o volume de consumo ou o valor agregado do seu coproduto. Conecte-se agora e participe da economia circular.",
    },
    {
      number: 3,
      title: "Negocie",
      icon: <Handshake size={22} className="text-yellow-300" />,
      subtitle: "Transforme resíduo em receita",
      description:
        // "Tomamos conta da negociação com o seu direcionamento para que você não tenha trabalho. Com nosso suporte completo, você negocia com segurança. Feche o ciclo e transforme o que era desperdício em uma oportunidade lucrativa.",
        "Conduzimos a negociação conforme suas diretrizes, garantindo que você não tenha trabalho. Com nosso suporte completo, você negocia com segurança. Feche o ciclo e transforme o que era desperdício em uma oportunidade lucrativa.",
    },
  ];

  return (
    <section
      id="buyer"
      className="w-full text-tradeoff-primary bg-gray-100 py-20"
    >
      <div className="max-w-[1200px] mx-auto px-0 w-full flex flex-col gap-12">
        {/* About Us and Video Section */}
        <div className="flex flex-col md:flex-row-reverse gap-8">
          {/* About Us Text */}
          <div className="flex items-center justify-center flex-1 ">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl mb-4 text-center md:text-left font-spartan font-bold uppercase text-tradeoff-primary">
                Benefícios Compradores
              </h2>
              <ul className="space-y-1 mb-6 w-full">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-4 pl-4 border-l-[3px] border-tradeoff-primary_contrast "
                  >
                    <span className="text-base font-poppins">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="tradeoff_secondary">
                <p>Saiba mais</p>
              </Button>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="flex-1 relative min-h-72 md:h-auto w-full bg-gray-200 flex items-center justify-center rounded-lg">
            {/* Placeholder for video */}
            <span className="text-gray-500">[Imagem do ciclo compradores]</span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-spartan font-bold text-center text-tradeoff-primary mb-10 uppercase">
            Como Funciona o Processo
          </h2>
          <div className="flex justify-between flex-wrap gap-8">
            {processSteps.map((step, index) => (
              <CustomCard
                key={index}
                number={step.number}
                title={step.title}
                subtitle={step.subtitle}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
