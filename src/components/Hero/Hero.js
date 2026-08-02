import { Link } from "react-router-dom";
import "./Hero.css";

function Hero({
  kicker,
  title,
  description,
  primaryButton,
  secondaryButton,
  home = false,
}) {
  return (
    <section className={`hero ${home ? "hero-home" : "hero-page"}`}>
      <div className="container hero-content">

        {kicker && (
          <p className="hero-kicker">{kicker}</p>
        )}

        <h1 className="hero-title">{title}</h1>

        {description && (
          <p className="hero-text">
            {description}
          </p>
        )}

        {(primaryButton || secondaryButton) && (
          <div className="hero-buttons">

            {primaryButton && (
              <Link
                to={primaryButton.link}
                className="button-primary"
              >
                {primaryButton.label}
              </Link>
            )}

            {secondaryButton && (
              <Link
                to={secondaryButton.link}
                className="button-secondary"
              >
                {secondaryButton.label}
              </Link>
            )}

          </div>
        )}

      </div>
    </section>
  );
}

export default Hero;