import "./StorySection.css";

function StorySection() {
  return (
    <section className="story-section">
      <div className="story-image">
        <div className="story-image-overlay"></div>
      </div>

      <div className="story-content">
        <p className="story-kicker">La nostra història</p>

        <h2>
          Una colla feta de foc,
          tradició i comunitat.
        </h2>

        <p>
          El Drac Olivé neix de la passió per la cultura popular i el foc.
          Som una colla que viu cada actuació com una festa compartida,
          mantenint viva la tradició dels correfocs i les bèsties.
        </p>

        <p>
          Més que una colla, som una família que treballa perquè el foc,
          la música i la cultura segueixin omplint els carrers.
        </p>
      </div>
    </section>
  );
}

export default StorySection;