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
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema } from "@/schemas/validationSchemas";
import { z } from "zod";
import { faqs } from "@/data/faq";
import { FormField } from "./ui/FormField";

interface ValidationErrors {
  [key: string]: string;
}

export const FAQSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "Trade-Off - Geeco",
  });
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  const { toast } = useToast();

  const validateField = (name: string, value: string) => {
    const result = contactFormSchema.safeParse({ ...formData, [name]: value });
    if (!result.success) {
      const error = result.error.errors.find((err) => err.path[0] === name);
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error ? error.message : "",
      }));
    } else {
      setValidationErrors((prevErrors) => {
        const { [name]: removedError, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const errors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        errors[err.path[0]] = err.message; // Mapeia cada erro para o campo
      });
      setValidationErrors(errors); // Armazena os erros no estado
      return;
    }

    setLoading(true);
    try {
      contactFormSchema.parse(formData);

      const response = await fetch("/api/save-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          company: "Trade-Off - Geeco",
        });
        toast({
          variant: "default",
          title: "Dúvida recebida!",
          description: "Em breve entraremos em contato!",
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Oops! Algo deu errado.",
        description: "Tente novamente ou use os contatos ao fim da página.",
      });
    } finally {
      setLoading(false);
      return;
    }
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
            <form onSubmit={handleSubmit} action="" className="space-y-4 py-4">
              <FormField
                placeholder="Nome"
                name="name"
                value={formData.name}
                error={validationErrors.name}
                onChange={handleInputChange}
                disabled={loading}
              />
              <FormField
                placeholder="Telefone"
                name="phone"
                value={formData.phone}
                error={validationErrors.phone}
                onChange={handleInputChange}
                disabled={loading}
              />
              <FormField
                placeholder="Email"
                name="email"
                value={formData.email}
                error={validationErrors.email}
                onChange={handleInputChange}
                disabled={loading}
              />
              <div>
                <textarea
                  placeholder="Insira a sua mensagem"
                  disabled={loading}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full border ${
                    validationErrors.message
                      ? "border-red-500"
                      : "border-gray-300"
                  } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 font-poppins`}
                  rows={4}
                  required
                ></textarea>
                <p className="text-xs text-red-500 pl-2">
                  {validationErrors.message}
                </p>
              </div>
              <div className="flex justify-center">
                <Button disabled={loading} variant="tradeoff_secondary">
                  Enviar Pergunta
                </Button>
              </div>
              <input type="hidden" name="utm_campaign" />
              <input type="hidden" name="utm_medium" />
              <input type="hidden" name="utm_content" />
              <input type="hidden" name="utm_source" />
              <input type="hidden" name="utm_term" />
              <input type="hidden" name="gclid" />
              <input type="hidden" name="fbclid" />
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
