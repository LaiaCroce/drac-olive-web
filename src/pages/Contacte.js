import {
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFire,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import "./Contacte.css";

export default function Contacte() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const emailBody = [
      `Nom: ${name}`,
      `Correu: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:dracolive.web@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <main className="contact-page">
      <Hero
        kicker="Parlem?"
        title="Contacta’ns"
        description="Vols formar part de la colla, contractar-nos per una actuació o saber-ne més? Escriu-nos i ens posarem en contacte amb tu."
      />

      <section className="contact-section">
        <div className="container contact-layout">
          <div className="contact-introduction">
            <p className="contact-eyebrow">Drac Olivé</p>

            <h2>Explica’ns què necessites</h2>

            <p className="contact-introduction__text">
              Pots contactar amb nosaltres per consultar actuacions,
              incorporacions a la colla, activitats, col·laboracions o
              qualsevol altre dubte.
            </p>

            <a
              href="mailto:dracolive.web@gmail.com"
              className="contact-direct-email"
            >
              <FaEnvelope aria-hidden="true" />

              <span>
                <small>Correu electrònic</small>
                dracolive.web@gmail.com
              </span>
            </a>

            <div className="contact-reasons">
              <article className="contact-reason">
                <FaCalendarAlt aria-hidden="true" />

                <div>
                  <h3>Actuacions</h3>
                  <p>Contractació, disponibilitat i informació de sortides.</p>
                </div>
              </article>

              <article className="contact-reason">
                <FaUsers aria-hidden="true" />

                <div>
                  <h3>Forma part de la colla</h3>
                  <p>Descobreix com unir-te a Piro o Fogosons.</p>
                </div>
              </article>

              <article className="contact-reason">
                <FaFire aria-hidden="true" />

                <div>
                  <h3>Altres consultes</h3>
                  <p>Activitats, projectes i informació general.</p>
                </div>
              </article>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__heading">
              <p>Envia’ns un missatge</p>
              <h2>Parlem</h2>
            </div>

            <div className="contact-form__row">
              <label>
                Nom
                <input
                  type="text"
                  name="name"
                  placeholder="El teu nom"
                  required
                />
              </label>

              <label>
                Correu
                <input
                  type="email"
                  name="email"
                  placeholder="nom@correu.cat"
                  required
                />
              </label>
            </div>

            <label>
              Motiu del contacte
              <select name="subject" defaultValue="" required>
                <option value="" disabled>
                  Selecciona una opció
                </option>

                <option value="Consulta sobre una actuació">
                  Contractar una actuació
                </option>

                <option value="Vull formar part de la colla">
                  Formar part de la colla
                </option>

                <option value="Consulta sobre merchandising">
                  Merchandising
                </option>

                <option value="Consulta general">
                  Altres consultes
                </option>
              </select>
            </label>

            <label>
              Missatge
              <textarea
                name="message"
                rows="7"
                placeholder="Explica’ns breument en què et podem ajudar..."
                required
              />
            </label>

            <button type="submit" className="button-primary">
              Enviar missatge
            </button>

            <p className="contact-form__notice">
              En prémer el botó s’obrirà la teva aplicació de correu amb el
              missatge preparat.
            </p>
          </form>
        </div>
      </section>

      <section className="contact-social-section">
        <div className="container contact-social-section__content">
          <div>
            <p className="contact-eyebrow">També ens trobaràs aquí</p>
            <h2>Segueix el foc i el ritme</h2>
          </div>

          <div className="contact-socials">
            <a
              href="https://www.instagram.com/dracolive/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram aria-hidden="true" />
              <span>Instagram Drac Olivé</span>
            </a>

            <a
              href="https://www.instagram.com/fogosons/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram aria-hidden="true" />
              <span>Instagram Fogosons</span>
            </a>

            <a
              href="https://www.tiktok.com/@dracolive_"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok aria-hidden="true" />
              <span>TikTok</span>
            </a>

            <a
              href="https://www.youtube.com/@DracOlive2016"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube aria-hidden="true" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}