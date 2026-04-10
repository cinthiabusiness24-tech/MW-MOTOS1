const WHATSAPP_NUMBER = "553534722344";

export const getWhatsAppLink = (productName?: string): string => {
  const message = productName
    ? `Olá, tenho interesse no produto ${productName}`
    : "Olá, gostaria de falar com um especialista";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_DISPLAY = "+55 (35) 3472-2344";
