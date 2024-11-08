import { Button } from "@/components/ui/Button";
import React from "react";

export const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center md:h-[calc(100vh+400px)] h-[calc(100vh+0px)] md:bg-[url('/images/hero-bg-geeco2.png')] bg-[url('/images/hero-bg-geeco.png')] bg-cover bg-center bg-no-repeat py-12 px-4 shadow-md shadow-tradeoff-primary">
      <div className="absolute inset-0 left-0 right-0 top-0 bottom-0 opacity-100 md:backdrop-blur-[1px] backdrop-blur-[7px]">
        <div className="max-w-[1200px] flex items-center justify-center mx-auto px-4 py-12 h-full">
          <div className="flex-1 flex flex-col md:mb-[500px] gap-6 max-w-[500px] m-auto">
            <h1 className="md:text-6xl text-5xl text-white uppercase font-spartan font-bold">
              Facilitando a economia circular.
            </h1>
            <div className="">
              <h2 className="md:text-lg text-base text-white font-poppins">
                Conectamos quem quer vender coprodutos, resíduos ou rejeitos
                industriais e potencializar sua receita com quem quer comprar
                matéria-prima de forma mais barata e sustentável.
              </h2>
            </div>
            <div>
              <Button variant="tradeoff_secondary">
                <p className="uppercase">Fale com um especialista</p>
              </Button>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
};
