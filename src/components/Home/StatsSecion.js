import { useEffect, useRef, useState } from "react";
import "./StatsSection.css";

const stats = [
  {
    number: 20,
    prefix: "+",
    label: "Anys d'història",
  },
  {
    number: 30,
    prefix: "+",
    label: "Membres",
  },
  {
    number: 100,
    prefix: "+",
    label: "Actuacions",
  },
];

function AnimatedNumber({ number, prefix = "", duration = 1600 }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const numberRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);

          // Fa que el moviment es freni suaument al final.
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCurrentNumber(Math.round(number * easedProgress));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [duration, number]);

  return (
    <strong ref={numberRef} className="stat-card__number">
      {prefix}
      {currentNumber}
    </strong>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container stats-section__container">
        <p className="stats-section__eyebrow">El Drac en xifres</p>

        <h2 className="stats-section__title">
          Més de vint anys fent cremar Olesa
        </h2>

        <div className="stats-grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <AnimatedNumber
                number={stat.number}
                prefix={stat.prefix}
              />

              <span className="stat-card__label">
                {stat.label}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}