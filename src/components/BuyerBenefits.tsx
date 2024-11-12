import { Button } from "@/components/ui/Button";
import { ClipboardList, Handshake, Search } from "lucide-react";
import React from "react";
import { CustomCard } from "./ui/CustomCard";
import Image from "next/image";

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
      title: "Defina",
      icon: <ClipboardList size={22} className="text-yellow-300" />,
      subtitle: "Personalize sua demanda",
      description:
        "Informe os requisitos específicos da matéria-prima que busca, incluindo as características essenciais e preferências. Alinhamos nossos esforços às suas necessidades para garantir que você encontre a solução ideal.",
      href: "https://api.whatsapp.com/send?phone=553192834490&text=Olá, estou em busca de uma matéria prima específica e gostaria da expertise Geeco",
    },
    {
      number: 2,
      title: "Conecte",
      icon: <Search size={22} className="text-yellow-300" />,
      subtitle: "Encontre a matéria-prima ideal",
      description:
        "Verificamos nossa rede de coprodutos sustentáveis e, se o material estiver disponível, iniciamos a negociação de imediato. Se for necessário, nossa equipe de prospecção encontra o coproduto ideal para você, economizando tempo e garantindo qualidade.",
      href: "https://api.whatsapp.com/send?phone=553192834490&text=Olá, estou em busca de uma matéria prima específica e gostaria da expertise Geeco",
    },
    {
      number: 3,
      title: "Negocie",
      icon: <Handshake size={22} className="text-yellow-300" />,
      subtitle: "Facilidade nas negociações",
      description:
        "Na Geeco, cuidamos da negociação para você. Com suporte dedicado, garantimos segurança e flexibilidade em todo o processo. Nossa abordagem simples e transparente permite que você foque no essencial, enquanto asseguramos a melhor experiência na compra de matéria-prima sustentável e de qualidade.",
      href: "https://api.whatsapp.com/send?phone=553192834490&text=Olá, estou em busca de uma matéria prima específica e gostaria da expertise Geeco",
    },
  ];

  return (
    <section
      id="buyer"
      className="w-full text-tradeoff-primary bg-gray-100 py-20"
    >
      <div className="max-w-[1200px] mx-auto md:px-10 px-4 w-full flex flex-col gap-12">
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
                    className="flex items-center space-x-4 pl-4 border-l-[3px] border-tradeoff-bg_gradient_light "
                  >
                    <span className="text-base font-poppins">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="tradeoff_secondary"
                href="https://api.whatsapp.com/send?phone=553192834490&text=Olá, gostaria de saber mais sobre os benefícios para compradores no trade-off de coprodutos."
              >
                <p>Saiba mais</p>
              </Button>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="flex-1 relative h-72 md:h-auto w-full bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden shadow-md shadow-tradeoff-primary/30">
            {/* Placeholder for video */}
            {/* <span className="text-gray-500">[Imagem do ciclo compradores]</span> */}
            <Image
              src="/images/img_buyers.png"
              alt="Imagem de coproduto"
              width={1000} // Define largura fixa
              height={1000} // Define altura fixa
              className="w-auto h-full shadow-lg shadow-gray object-cover flex-1"
              // style={{ width: "100px", height: "100px" }} // Dimensões de 100x100px
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-spartan font-bold text-center text-tradeoff-primary mb-10 uppercase">
            Como Funciona o Processo
          </h2>
          <div className="flex lg:flex-row flex-col md:justify-between justify-center items-center flex-wrap gap-8 min-h-[340px]">
            {processSteps.map((step, index) => (
              <CustomCard
                key={index}
                number={step.number}
                title={step.title}
                subtitle={step.subtitle}
                description={step.description}
                icon={step.icon}
                href={step.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
