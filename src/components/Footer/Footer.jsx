import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        bg-brown-dark text-white
        flex flex-col md:flex-row items-center justify-between
        gap-6 px-4 py-6
      "
    >
      {/* logo */}
      <img src="/img/logont.png" alt="Qente logo" className="h-20" />

      {/* texto */}
      <div className="text-center flex-grow font-sansBrand leading-tight">
        <p className="mb-1">
          Diego Gaynor, Buenos Aires • Viernes a Domingo 12-23&nbsp;hs
        </p>
        <p className="mb-0 text-sm">© 2025 Qente Mikhuy</p>
      </div>

      {/* Instagram con margen extra en desktop */}
      <a
        href="https://www.instagram.com/qentemikhuy/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="
          text-white text-3xl hover:text-gold transition
          focus:outline-none focus:ring-2 focus:ring-gold/70 rounded
          mr-0 md:mr-24        /* ← aquí el espacio para el FAB */
        "
      >
        <FaInstagram />
      </a>
    </footer>
  );
}
