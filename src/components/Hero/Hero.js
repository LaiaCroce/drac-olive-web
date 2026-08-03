import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero({
  kicker,
  title,
  description,
  primaryButton,
  secondaryButton,
  home = false,
  images = [],
  interval = 5000,
}) {
  const [activeImage, setActiveImage] = useState(0);
  const hasCarousel = home && images.length > 0;

  useEffect(() => {
    if (!hasCarousel || images.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [hasCarousel, images.length, interval]);

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  return (
    <section className={`hero ${home ? "hero--home" : "hero--page"}`}>
      {hasCarousel && (
        <div className="hero-carousel" aria-hidden="true">
          {images.map((image, index) => (
            <div
              key={image}
              className={`hero-carousel__slide ${
                index === activeImage ? "hero-carousel__slide--active" : ""
              }`}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}

          <div className="hero-carousel__overlay" />
        </div>
      )}

      <div className="container hero-content">
        {kicker && <p className="hero-kicker">{kicker}</p>}

        <h1 className="hero-title">{title}</h1>

        {description && <p className="hero-text">{description}</p>}

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

      {hasCarousel && images.length > 1 && (
        <>
          <button
            type="button"
            className="hero-carousel__arrow hero-carousel__arrow--previous"
            onClick={showPreviousImage}
            aria-label="Fotografia anterior"
          >
            ←
          </button>

          <button
            type="button"
            className="hero-carousel__arrow hero-carousel__arrow--next"
            onClick={showNextImage}
            aria-label="Fotografia següent"
          >
            →
          </button>

          <div
            className="hero-carousel__dots"
            aria-label="Seleccionar fotografia"
          >
            {images.map((image, index) => (
              <button
                type="button"
                key={`dot-${image}`}
                className={`hero-carousel__dot ${
                  index === activeImage ? "hero-carousel__dot--active" : ""
                }`}
                onClick={() => setActiveImage(index)}
                aria-label={`Mostrar fotografia ${index + 1}`}
                aria-current={index === activeImage ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}