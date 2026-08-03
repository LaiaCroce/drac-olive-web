import { Link } from "react-router-dom";
import "./FeatureSection.css";

export default function FeatureSection({
  eyebrow,
  title,
  paragraphs = [],
  image,
  imageAlt = "",
  reverse = false,
  button,
}) {
  return (
    <section
      className={`feature-section ${
        reverse ? "feature-section--reverse" : ""
      }`}
    >
      <div className="container feature-section__layout">
        <div className="feature-section__image-wrapper">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="feature-section__image"
            />
          ) : (
            <div className="feature-section__image-placeholder">
              Fotografia pendent
            </div>
          )}
        </div>

        <div className="feature-section__content">
          {eyebrow && (
            <div className="feature-section__eyebrow">
              <span aria-hidden="true" />
              <p>{eyebrow}</p>
            </div>
          )}

          <h2>{title}</h2>

          <div className="feature-section__text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {button && (
            <Link to={button.link} className="button-primary">
              {button.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}