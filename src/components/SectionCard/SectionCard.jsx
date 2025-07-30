import { Link } from "react-router-dom";
import "./SectionCard.css";

export default function SectionCard({ title, img, to, reverse }) {
  return (
    <div
      className={`row g-0 section-card align-items-center ${
        reverse ? "flex-md-row-reverse" : ""
      }`}
    >
      <div className="col-md-6">
        <img src={img} alt={title} className="img-fluid" />
      </div>
      <div className="col-md-6 p-4">
        <h2 className="mb-3">{title}</h2>
        <Link to={to} className="btn btn-primary">
          Conocer más
        </Link>
      </div>
    </div>
  );
}
