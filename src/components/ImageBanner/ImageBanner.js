import "./ImageBanner.css";

export default function ImageBanner({
  image,
  imageAlt = "",
  eyebrow,
  quote,
  text,
  align = "center",
}) {
  const bannerStyle = image
    ? {
        backgroundImage: `url("${image}")`,
      }
    : undefined;

  return (
    <section
      className={`image-banner image-banner--${align}`}
      style={bannerStyle}
      aria-label={imageAlt || undefined}
    >
      <div className="image-banner__overlay" />

      <div className="container image-banner__content">
        {eyebrow && (
          <p className="image-banner__eyebrow">{eyebrow}</p>
        )}

        {quote && (
          <blockquote className="image-banner__quote">
            {quote}
          </blockquote>
        )}

        {text && (
          <p className="image-banner__text">{text}</p>
        )}
      </div>
    </section>
  );
}