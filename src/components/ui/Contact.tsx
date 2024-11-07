import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface ContactSectionProps {
  socialLinks: {
    linkedin: string;
    instagram: string;
    whatsapp: string;
    email: string;
    website: string;
  };
  addressLink: string;
  address: string;
  companyName: string;
  hoverColor: string;
  textColor: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  socialLinks,
  addressLink,
  address,
  companyName,
  hoverColor,
  textColor,
}) => {
  return (
    <footer className={`py-8 bg-transparent ${textColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-10">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: textColor }}
              className={`${hoverColor} transition-colors`}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: textColor }}
              className={`${hoverColor} transition-colors`}
            >
              <FaInstagram size={24} />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: textColor }}
              className={`${hoverColor} transition-colors`}
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className={`${hoverColor} transition-colors`}
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href={socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`${hoverColor} transition-colors`}
            >
              <FaGlobe size={24} />
            </a>
          </div>

          {/* Address */}
          <a
            href={addressLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 text-sm ${hoverColor}`}
          >
            <FaMapMarkerAlt size={20} />
            <p className="text-center md:text-left max-w-[350px]">{address}</p>
          </a>
        </div>

        {/* Copyright Note */}
        <p className="text-center text-xs mt-6" style={{ color: textColor }}>
          © {new Date().getFullYear()} {companyName}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};
