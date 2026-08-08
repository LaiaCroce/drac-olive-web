import "./IntroSection.css";

export default function IntroSection({
  eyebrow,
  title,
  text,
}) {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="intro-section__content">

          {eyebrow && (
            <p className="intro-section__eyebrow">
              {eyebrow}
            </p>
          )}

          <h2>{title}</h2>

          <p>{text}</p>

        </div>
      </div>
    </section>
  );
}