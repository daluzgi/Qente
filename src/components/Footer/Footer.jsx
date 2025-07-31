import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="py-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 px-4"
      style={{ background: "var(--color-brown-dark)", color: "#fff" }}
    >
      {/* logo izquierda */}
      <img src="/img/logont.png" alt="Qente logo" height="80" />

      {/* texto centro */}
      <div className="text-center flex-grow-1">
        <p className="mb-1">
          Diego Gaynor, Buenos Aires • Viernes a Domingo 12-23 hs
        </p>
        <p className="mb-0">© 2025 Qente Mikhuy</p>
      </div>

      {/* Instagram derecha */}
      <a
        href="https://www.instagram.com/qentemikhuy/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white fs-3"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </footer>
  );
}
