import { Link } from "react-router-dom";
import news from "../../data/news";
import "./NewsGrid.css";

export default function NewsGrid() {
  const featured = news.find((item) => item.featured);
  const others = news.filter((item) => !item.featured);

  return (
    <section className="news-grid">
      <div className="container">

        {featured && (
          <article className="featured-news">
            <div className="featured-news__image">
              Fotografia destacada
            </div>

            <div className="featured-news__content">
              <span>NOTÍCIA DESTACADA</span>

              <h2>{featured.title}</h2>

              <p>{featured.excerpt}</p>

              <Link
                to={`/noticies/${featured.slug}`}
                className="button-primary"
              >
                Llegir més
              </Link>
            </div>
          </article>
        )}

        <div className="news-grid__cards">
          {others.map((item) => (
            <Link
              key={item.id}
              to={`/noticies/${item.slug}`}
              className="news-card"
            >
              <div className="news-card__image">
                Foto
              </div>

              <div className="news-card__content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>

                <span className="news-card__link">
                  Llegir notícia →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}