import { BsWhatsapp } from "react-icons/bs";
import "./WhatsappButton.css";

export default function WhatsappButton() {
  const msg = "Hola! Quisiera reservar en Qente";
  return (
    <a
      href={`https://wa.me/5491121847446?text=${encodeURIComponent(msg)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat por WhatsApp"
    >
      <BsWhatsapp size={28} />
    </a>
  );
}
