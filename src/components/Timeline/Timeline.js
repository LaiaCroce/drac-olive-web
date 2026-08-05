import "./Timeline.css";

export default function Timeline({ events = [] }) {
  return (
    <section className="timeline-section">
      <div className="container">
        <div className="timeline-heading">
          <p>El nostre recorregut</p>
          <h2>Més de vint anys de foc, música i cultura popular</h2>
        </div>

        <div className="timeline">
          {events.map((event, index) => (
            <article
              className={`timeline-item ${
                index % 2 === 0
                  ? "timeline-item--left"
                  : "timeline-item--right"
              }`}
              key={`${event.year}-${event.title}`}
            >
              <div className="timeline-item__marker">
                <span />
              </div>

              <div className="timeline-item__year">
                {event.year}
              </div>

              <div className="timeline-item__card">
                <div className="timeline-item__image-wrapper">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.imageAlt || event.title}
                      className="timeline-item__image"
                    />
                  ) : (
                    <div className="timeline-item__placeholder">
                      Fotografia pendent
                    </div>
                  )}
                </div>

                <div className="timeline-item__content">
                
                  <h3>{event.title}</h3>

                  <p>{event.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}