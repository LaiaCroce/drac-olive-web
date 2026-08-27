import { Link, useParams } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import news from "../data/news";

import "./NoticiesDetall.css";

export default function NoticiaDetall() {
  const { slug } = useParams();

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main>
        <Hero
          kicker="Notícies"
          title="Notícia no trobada"
          description="La notícia que busques no existeix o ja no està disponible."
        />

        <section className="article-not-found">
          <div className="container">
            <Link to="/noticies" className="button-primary">
              Tornar a notícies
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Hero
        kicker="Actualitat · Drac Olivé"
        title={article.title}
        description={article.excerpt}
      />

      <article className="article-page">
        <div className="container article-page__container">

          <div className="article-page__image">
            Fotografia de la notícia
          </div>

          <div className="article-page__content">
            <Link
              to="/noticies"
              className="article-page__back"
            >
              ← Tornar a notícies
            </Link>

            {article.content.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}