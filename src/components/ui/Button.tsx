"use client";
import React from "react";

// Tipos para as variantes de botões
type ButtonVariant =
  | "primary"
  | "secondary"
  | "terciary"
  | "green"
  | "outline"
  | "link"
  | "arquiteto_primary"
  | "arquiteto_secondary"
  | "danger"
  | "vessel"
  | "tradeoff_primary"
  | "tradeoff_secondary"
  | "tradeoff_outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string; // URL ou ID para rolar a página
  onClick?: () => void; // Função de clique personalizada
  enableAnalytics?: boolean; // Permitir envio de evento para o Google Analytics
  analyticsEvent?: string; // Nome do evento a ser enviado ao Google Analytics
}

// Definir estilos para cada variante
const variantClasses = {
  primary:
    "md:w-min w-full bg-vrd_orange hover:bg-vrd_gray text-white shadow-md shadow-vrd_gray/30",
  secondary: "md:w-min w-full bg-vrd_gray hover:bg-vrd_orange text-vrd_primary",
  terciary:
    "md:w-max w-full bg-vrd_primary hover:bg-vrd_gray text-orange hover:text-white hover:scale-105 transition-transform duration-200 w-full shadow-md shadow-vrd_gray/20",
  green:
    "md:w-max w-full bg-vrd_green hover:bg-vrd_gray text-white hover:scale-105 transition-transform duration-200 w-full shadow-md shadow-vrd_gray/20",
  outline:
    "md:w-max w-full bg-vrd_gray hover:bg-vrd_nude text-white hover:scale-105 hover:text-vrd_gray transition-transform duration-200 w-full shadow-md shadow-vrd_gray/20",
  link: "text-blue-500 hover:underline",
  danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  arquiteto_primary:
    "bg-arquiteto-gray-dark text-white py-2 px-4 rounded hover:bg-arquiteto-secondary shadow-md shadow-arquiteto-gray/30",
  arquiteto_secondary:
    "bg-arquiteto-gray-light text-arquiteto-gray-dark py-2 px-4 rounded hover:bg-arquiteto-gray-default shadow-md shadow-arquiteto-gray/30",
  vessel: "p-0 m-0 rounded-none",
  tradeoff_primary:
    "rounded-full py-2 bg-tradeoff-primary text-tradeoff-primary_contrast hover:bg-tradeoff-primary_contrast hover:text-tradeoff-primary uppercase font-poppins",
  tradeoff_secondary:
    "bg-yellow-300 text-tradeoff-primary hover:bg-yellow-400 transition-colors duration-300 rounded-lg shadow-lg font-poppins",
  tradeoff_outline:
    "border-[2px] rounded-full py-2 text-tradeoff-primary_contrast border-tradeoff-primary_contrast font-poppins",
};

declare global {
  interface Window {
    gtag: (
      command: string,
      trackingId: string,
      options?: {
        page_path?: string;
        event_category?: string;
        event_label?: string;
      }
    ) => void; // Adicionando propriedades para gtag
  }
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  enableAnalytics = false,
  analyticsEvent = "button_click",
  ...rest
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Se a propriedade `href` estiver presente, agir como link
    if (href) {
      event.preventDefault();

      // Se o `href` for um ID (#id), rolar para a seção correspondente
      if (href.startsWith("#")) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Redirecionar para outra página se `href` for uma URL e estivermos no cliente
        window.open(href);
      }
    }

    // Executar a função `onClick` se fornecida
    if (onClick) {
      onClick();
    }

    // Enviar evento ao Google Analytics se habilitado
    if (enableAnalytics && typeof window.gtag !== "undefined") {
      window.gtag("event", analyticsEvent, {
        event_category: "button",
        event_label: children?.toString() || "unknown",
      });
      console.log(`Evento ${analyticsEvent} enviado para o Google Analytics.`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`text-nowrap md:px-10 px-4 py-2 rounded-sm self-center font-bold focus:outline-none transition-colors duration-200 text-center mt-3 ${variantClasses[variant]} disabled:opacity-50`}
      {...rest}
    >
      {children}
    </button>
  );
};
