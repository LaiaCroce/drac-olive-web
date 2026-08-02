import {
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import "./Contacte.css";

export default function Contacte() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p>Parlem?</p>

        <h1>Contacta’ns</h1>

        <span>
          Vols formar part de la colla, contractar-nos per una actuació o
          saber-ne més? Escriu-nos.
        </span>
      </section>

      <section className="contact-content">
        <article className="contact-card contact-card--main">
          <p className="contact-card-label">Correu electrònic</p>

          <h2>Explica’ns què necessites</h2>

          <p>
            Ens pots escriure per consultar actuacions, col·laboracions,
            incorporacions a la colla o qualsevol altre dubte.
          </p>

          <a
            href="mailto:dracolive.web@gmail.com"
            className="contact-email-button"
          >
            <FaEnvelope />
            Enviar un correu
          </a>
        </article>

        <article className="contact-card">
          <p className="contact-card-label">Segueix-nos</p>

          <h2>Xarxes socials</h2>

          <div className="contact-socials">
            <a
              href="https://www.instagram.com/dracolive/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              Instagram Drac Olivé
            </a>

            <a
              href="https://www.instagram.com/fogosons/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              Instagram Fogosons
            </a>

            <a
              href="https://www.tiktok.com/@dracolive_"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
              TikTok
            </a>

            <a
              href="https://www.youtube.com/@DracOlive2016"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
              YouTube
            </a>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}