import { Button } from "@/components/ui/Button";
import { BookOpenCheck, Handshake, Unplug } from "lucide-react";
import React from "react";
import { CustomCard } from "./ui/CustomCard";
import Image from "next/image";

export const SellerBenefits = () => {
  const benefits = [
    "Deixe a gestão de resíduos conosco e reduza seu trabalho",
    "Geração de receita extra com resíduos e coprodutos",
    "Marketing positivo para a imagem da sua empresa",
    // "Facilidade no processo de descarte",
    // "Parceria com especialistas em economia circular",
  ];

  const processSteps = [
    {
      number: 1,
      title: "Avalie",
      icon: <BookOpenCheck size={22} className="text-yellow-300" />,
      subtitle: "Solicite uma avaliação gratuita",
      description:
        "Entenda o valor do seu resíduo. Nossa análise inicial revela o potencial econômico e sustentável dos seus materiais, sem compromisso. Descubra como podemos transformar seu resíduo em um ativo valioso.",
      href: "https://api.whatsapp.com/send?phone=553192834490&text=Olá, possuo um coproduto e gostaria de realizar uma avaliação do meu produto",
    },
    {
      number: 2,
      title: "Conecte",
      icon: <Unplug size={22} className="text-yellow-300" />,
      subtitle: "A conexão com o parceiro ideal",
      description:
        "Aproveite nossa rede de parceiros para destinar seus resíduos e ainda gerar receita extra. Podemos priorizar o volume de consumo ou o valor agregado do seu coproduto. Conecte-se agora e participe da economia circular.",
      href: "https://api.whatsapp.com/send?phone=553192834490&text=Olá, possuo um coproduto e gostaria de realizar uma avaliação do meu produto",
    },
    {
      number: 3,
      title: "Negocie",
      icon: <Handshake size={22} className="text-yellow-300" />,
      subtitle: "Transforme resíduo em receita",
      description:
        // "Tomamos conta da negociação com o seu direcionamento para que você não tenha trabalho. Com nosso suporte completo, você negocia com segurança. Feche o ciclo e transforme o que era desperdício em uma oportunidade lucrativa.",
        "Conduzimos a negociação conforme suas diretrizes, garantindo que você não tenha trabalho. Com nosso suporte completo, você negocia com segurança. Feche o ciclo e transforme o que era desperdício em uma oportunidade lucrativa.",
      href: "https://api.whatsapp.com/send?phone=553192834490&text=Olá, possuo um coproduto e gostaria de realizar uma avaliação do meu produto",
    },
  ];

  return (
    <section id="seller" className="w-full bg-gray-100 py-20">
      <div className="max-w-[1200px] mx-auto md:px-10 px-4 w-full flex flex-col gap-12">
        {/* About Us and Video Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* About Us Text */}
          <div className="flex items-center justify-center flex-1 ">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl mb-4 text-center md:text-left font-spartan font-bold uppercase text-tradeoff-primary">
                Benefícios Vendedores
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
                href="https://api.whatsapp.com/send?phone=553192834490&text=Olá, gostaria de saber mais sobre os benefícios para vendedores no trade-off de coprodutos."
              >
                <p>Saiba mais</p>
              </Button>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="flex-1 relative h-72 aspect-auto md:h-auto flex items-center justify-center">
            <Image
              src="/images/img_seller.png"
              alt="Imagem de coproduto"
              width={2000} // Define largura fixa
              height={1200} // Define altura fixa
              className="aspect-auto w-full lg:max-w-full max-w-[500px] h-auto flex-1 object-cover shadow-lg shadow-tradeoff-primary/30 rounded-lg"
            />
          </div>
        </div>

        <div className="min-h-min">
          <h2 className="text-2xl font-spartan font-bold text-center text-tradeoff-primary mb-10 uppercase">
            Como Funciona o Processo
          </h2>
          <div className="flex md:justify-between lg:flex-row flex-col flex-wrap gap-8 items-center justify-center min-h-[340px]">
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
