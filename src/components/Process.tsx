// src/components/ProcessSection.tsx
import { Button } from "@/components/ui/Button";
import {
  BookOpenCheck,
  ClipboardList,
  Handshake,
  Search,
  Unplug,
} from "lucide-react";
import React from "react";

const processSteps = [
  {
    number: 1,
    title: "Defina",
    icon: <ClipboardList size={22} className="text-yellow-300" />,
    subtitle: "Personalize sua demanda",
    description:
      "Informe os requisitos específicos da matéria-prima que busca, incluindo as características essenciais e preferências. Alinhamos nossos esforços às suas necessidades para garantir que você encontre a solução ideal.",
  },
  {
    number: 2,
    title: "Conecte",
    icon: <Search size={22} className="text-yellow-300" />,
    subtitle: "Encontre a matéria-prima ideal",
    description:
      "Verificamos nossa rede de coprodutos sustentáveis. Caso o material esteja disponível, iniciamos a negociação imediatamente. Se for necessária uma busca mais detalhada, nossa equipe de prospecção especializada pode realizar esse serviço para encontrar o coproduto ideal, economizando tempo e assegurando qualidade.",
  },
  {
    number: 3,
    title: "Negocie",
    icon: <Handshake size={22} className="text-yellow-300" />,
    subtitle: "Facilidade nas negociações",
    description:
      "Na Geeco, cuidamos de toda a negociação para você. Com nosso suporte dedicado, garantimos segurança e flexibilidade durante todo o processo. Nossa abordagem simplificada e transparente permite que você se concentre no que realmente importa, enquanto nós garantimos a melhor experiência na aquisição de matéria-prima sustentável e de valor.",
  },

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

export const ProcessSection = () => {
  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-2xl font-nohemi text-center text-[#15293E] mb-10 uppercase">
          Como Funciona o Processo
        </h2>
        <div className="flex justify-center flex-wrap gap-8">
          {processSteps.map((step, index) => (
            <CustomCard
              key={index}
              number={step.number}
              title={step.title}
              subtitle={step.subtitle}
              description={step.description}
              icon={step.icon}
            />
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

export const CustomCard: React.FC<CardProps> = ({
  number,
  title,
  subtitle,
  description,
  icon,
}) => {
  return (
    <div className="max-w-[300px] flex flex-col justify-between gap-2">
      {/* Borda contornando o card */}
      {/* <div className="absolute inset-0 border border-white rounded-lg pointer-events-none"></div> */}

      {/* Container para o número, título e ícone */}
      <div>
        <div className="w-full flex items-center relative p-1 m-0 bg-white border-t-[2px] border-r-[2px] border-b-[2px] rounded-r-full border-tradeoff-primary">
          <span className="w-2 h-2 rounded-full border-[2px] border-tradeoff-primary absolute top-[-5px] left-0 z-10 bg-white"></span>
          <span className="relative z-20 text-5xl -mb-2 -mr-2 text-tradeoff-primary text-shadow leading-none font-nohemi font-bold">
            {number}
          </span>
          <h3 className="text-center relative w-full z-0 leading-none text-xl mr-1 py-[6px] pl-6 pr-12 font-lexend bg-tradeoff-primary text-white">
            {title}
          </h3>
          <span className="absolute -right-0 bg-white rounded-full p-1 z-0">
            <span className="flex items-center justify-center bg-tradeoff-primary p-2 w-full h-full rounded-full">
              {icon}
            </span>
          </span>
        </div>

        {/* Subtítulo e descrição */}
        <div className="flex flex-col px-4 mt-4">
          <h4 className="font-semibold text-tradeoff-primary font-lexend text-center mb-2">
            {subtitle}
          </h4>
          <p className="text-sm text-tradeoff-primary font-lexend text-justify flex-1 h-full">
            {description}
          </p>
        </div>
      </div>
      <Button variant="tradeoff_secondary">
        <p>{title}</p>
      </Button>
    </div>
  );
};
