import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '51947726382'; // WhatsApp number with country code
  const message = 'Hola, estoy interesado en los servicios de SEGURANZA';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-[#25D366] rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative bg-[#25D366] rounded-xl p-4 shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center" style={{ width: 64, height: 64 }}>
          <FaWhatsapp className="w-12 h-12 text-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton; 