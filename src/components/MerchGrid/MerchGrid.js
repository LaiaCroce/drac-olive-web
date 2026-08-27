import { useState } from "react";
import "./MerchGrid.css";

const products = [
  {
    id: 1,
    name: "Samarreta oficial",
    price: "18€",
  },
  {
    id: 2,
    name: "Dessuadora",
    price: "35€",
  },
  {
    id: 3,
    name: "Gorra",
    price: "15€",
  },
  {
    id: 4,
    name: "Bandana",
    price: "8€",
  },
  {
    id: 5,
    name: "Clauer",
    price: "5€",
  },
];

export default function MerchGrid() {

  const [featured, setFeatured] = useState(products[0]);
  const others = products.filter(
  (product) => product.id !== featured.id);

  return (
    <section className="merch-grid">
      <div className="container">

        <div className="merch-featured">

          <div className="merch-featured__image">
            Fotografia del producte
          </div>

          <div className="merch-featured__content">

            <span>PRODUCTE DESTACAT</span>

            <h2>{featured.name}</h2>

            <h3>{featured.price}</h3>

            <p>
              Aquí hi anirà la descripció del producte més destacat.
            </p>

          </div>

        </div>

        <div className="merch-products">

          {others.map((product) => (

            <div
              key={product.id}
              className="merch-card"
              onClick={() => setFeatured(product)}
            >

              <div className="merch-card__image">
                Foto
              </div>

              <h3>{product.name}</h3>

              <p>{product.price}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}