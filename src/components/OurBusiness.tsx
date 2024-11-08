import React from "react";

type Card = {
  action: string;
  description: string;
  link: string;
};

const cardsData: Card[] = [
  {
    action: "Vender",
    // description: "Transforme resíduos em um ativo rentável para sua empresa.",
    description: "produtos, coprodutos, resíduos ou serviços.",
    link: "#seller",
  },
  {
    action: "Comprar",
    description: "produtos e matérias primas mais sustentáveis.",
    // "Encontre matéria-prima sustentável e acessível, com qualidade garantida.",
    link: "#buyer",
  },
  {
    action: "Conhecer",
    // description: "o marketplace Geeco e ver se acho algo para mim.",
    description:
      "Saiba como estamos mudando a forma de negociar resíduos industriais.",
    link: "#aboutus",
  },
];

export const OurBusiness = () => {
  return (
    <section className="lg:mt-[-400px] mt-[-0px] flex flex-col items-center justify-center bg-gradient-to-br from-tradeoff-bg_gradient_dark to-tradeoff-bg_gradient_light px-10 py-12">
      <div className="w-full max-w-[1200px] flex lg:flex-row flex-col items-center justify-center gap-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative max-w-[300px] flex-1 bg-transparent p-6 flex flex-col items-center justify-center text-center aspect-square gap-1 group transition-all duration-1000 ease-in-out"
          >
            {/* Linhas decorativas */}
            <div className="absolute top-0 left-0 h-[33%] w-0.5 bg-tradeoff-primary_contrast group-hover:top-[15%] transition-all duration-500 ease-in-out" />
            <div className="absolute bottom-0 right-0 h-[33%] w-0.5 bg-tradeoff-primary_contrast group-hover:bottom-[15%] transition-all duration-1000 ease-in-out" />
            <div className="absolute top-0 left-0 w-[20%] h-0.5 bg-tradeoff-primary_contrast group-hover:top-[15%] transition-all duration-500 ease-in-out" />
            <div className="absolute bottom-0 right-0 w-[20%] h-0.5 bg-tradeoff-primary_contrast group-hover:bottom-[15%] transition-all duration-1000 ease-in-out" />

            {/* Conteúdo do Card */}
            <a href={card.link} className="cursor-pointer">
              <h3 className="text-xs text-tradeoff-secondary mb-1 flex flex-col font-poppins">
                {/* <span className="text-start text-white text-base">Quero</span> */}
                <span className="text-2xl underline text-tradeoff-primary_contrast uppercase font-spartan font-bold">
                  {card.action}
                </span>
              </h3>
              <p className="text-base text-white font-poppins">
                {card.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
