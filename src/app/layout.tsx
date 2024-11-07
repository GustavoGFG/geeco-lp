// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "VRD Tijolos Ecológicos - Inovação Sustentável, Economia e Eficiência na Construção",
  description:
    "Construa com inteligência e responsabilidade. VRD Tijolos Ecológicos oferece soluções que reduzem custos, aceleram prazos e diminuem o uso de cimento e madeira.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const title = "VRD Tijolos Ecológicos - Inovação Sustentável";
  const description =
    "Construa com inteligência e responsabilidade. VRD Tijolos Ecológicos oferece soluções que reduzem custos, aceleram prazos e diminuem o uso de cimento e madeira.";

  const imageUrl = "https://vrd-blocos.vercel.app/static/card-image.png";

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TH8NMJVB');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=handshake"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://vrd-blocos.vercel.app/v1" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Imagem dos Tijolos Ecológicos" />
      </head>
      <body
        className={`bg-transparent ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TH8NMJVB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}
