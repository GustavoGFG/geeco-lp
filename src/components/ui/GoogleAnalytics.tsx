"use client"; // Marque o componente como do cliente
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Importar usePathname para obter a URL atual

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
    ) => void; // Especificando tipos
  }
}

const GoogleAnalytics = () => {
  const pathname = usePathname(); // Obter o pathname atual

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-CSKSVHT5XL", {
        page_path: pathname,
      });
    }
  }, [pathname]); // Executar o efeito sempre que o pathname mudar

  return null;
};

export default GoogleAnalytics;
