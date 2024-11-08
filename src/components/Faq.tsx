"use client";
import { ContactSection } from "@/components/ui/Contact";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/Button";
import React, { useState } from "react";

export const FAQSection = () => {
  const faqs = [
    {
      question:
        "A compra de coprodutos sempre resulta em redução de custos para minha empresa?",
      answer:
        "A redução de custos ao adquirir coprodutos dependerá das características específicas da matéria-prima e das necessidades do seu negócio. Em alguns casos, a compra de coprodutos gera uma economia significativa, mas outros fatores como qualidade, processo de produção e sustentabilidade também devem ser considerados. Nossa equipe ajuda a identificar as melhores opções para equilibrar custos e benefícios, oferecendo soluções viáveis e sustentáveis para sua empresa.",
    },
    {
      question:
        "É seguro compartilhar as informações sobre meu resíduo com a Geeco?",
      answer:
        "Com certeza! Garantimos total segurança para seus dados. Se necessário, podemos assinar um NDA para proteger suas informações.",
    },
    {
      question: "Quanto tempo leva o processo?",
      answer:
        "O tempo varia conforme as características do coproduto ou resíduo. Peça uma avaliação gratuita para saber o tempo estimado para o seu caso!",
    },
    {
      question:
        "E se meu resíduo não puder ser vendido devido a contaminação ou outro problema?",
      answer:
        "Não se preocupe! Se o resíduo não for comercializável, buscaremos uma destinação mais sustentável ou, se necessário, podemos até desenvolver uma solução sob medida para o seu caso.",
    },
    {
      question: "Como funciona o processo de venda de resíduos?",
      answer:
        "Nós fazemos a representação comercial para a venda do seu coproduto, transformando seus resíduos em matéria-prima. Todo o processo é gerido por nós, garantindo segurança e eficácia.",
    },
    {
      question: "Como funciona o processo de compra de resíduos?",
      answer:
        "Primeiro, entendemos suas necessidades e definimos os requisitos da matéria-prima ideal. Em seguida, apresentamos à você aos coprodutos sustentáveis que atendem às suas exigências. Cuidamos de toda a negociação, garantindo segurança, flexibilidade e a melhor experiência.",
    },
    {
      question: "Quais tipos de resíduos posso vender/comprar?",
      answer:
        "Aceitamos uma ampla gama de coprodutos e resíduos industriais. Nossa equipe pode orientar quanto à melhor maneira de destinar seus resíduos.",
    },
    {
      question: "É seguro para o meio ambiente?",
      answer:
        "Nosso compromisso é com práticas que apoiam a economia circular e minimizam o impacto ambiental. Todos os processos são acompanhados para garantir segurança e sustentabilidade.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Pergunta enviada:", formData);
    setFormData({ name: "", email: "", question: "" });
  };

  return (
    <section className="w-full bg-gradient-to-r from-tradeoff-bg_gradient_dark to-tradeoff-bg_gradient_light text-white pt-12 pb-4">
      <div className="max-w-[1200px] mx-auto pb-8 md:px-10 px-4">
        <h2 className="text-2xl font-spartan font-bold uppercase text-center mb-8">
          Perguntas Frequentes
        </h2>
        <div className="flex lg:flex-row flex-col gap-20 items-center ">
          <Accordion className="flex-1" type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                value={String(index)}
                key={index}
                className="text-white"
              >
                <AccordionTrigger className="text-base text-start font-poppins">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-start p-1 pb-2 font-poppins text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Formulário de Dúvidas */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-tradeoff-primary flex-1">
            <h3 className="text-xl font-poppins mb-4 text-center">
              Não encontrou sua resposta? Pergunte-nos!
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div>
                <label className="block text-tradeoff-primary font-poppins">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 font-poppins"
                  required
                />
              </div>
              <div>
                <label className="block text-tradeoff-primary font-poppins">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 font-poppins"
                  required
                />
              </div>
              <div>
                <label className="block text-tradeoff-primary font-poppins">
                  Sua Pergunta
                </label>
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 font-poppins"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <Button type="submit" variant="tradeoff_secondary">
                  Enviar Pergunta
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ContactSection
        socialLinks={{
          linkedin: "https://www.linkedin.com/company/geecomateriais/",
          instagram: "https://www.instagram.com/geecomateriais/",
          whatsapp:
            "https://api.whatsapp.com/send?phone=553192834490&text=Olá, possuo um coproduto e gostaria de realizar uma avaliação do meu produto",
          email: "comercial@geeco.com.br",
          website: "https://geeco.com.br/",
        }}
        addressLink="https://www.google.com/maps/search/Rua+Suzana+Passos,+n%C2%BA+830,+Santo+Ant%C3%B4nio+da+Barra+Pedro+Leopoldo%2FMG+-+CEP+33.257-010+Minas+Gerais+-+Brasil/@-19.6416584,-44.0558335,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
        address="Rua Suzana Passos, nº 830, Santo Antônio da Barra Pedro Leopoldo/MG"
        companyName="Geeco Materiais & Engenharia"
        hoverColor="hover:text-tradeoff-primary_contrast"
        textColor="text-gray-400"
      />
    </section>
  );
};
