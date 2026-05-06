export default function Merch() {
  const products = [
    {
      id: 1,
      nom: "Samarreta Drac Olivé",
      preu: "15€",
      descripcio: "Samarreta oficial de la colla.",
    },
    {
      id: 2,
      nom: "Dessuadora Drac Olivé",
      preu: "30€",
      descripcio: "Dessuadora amb el disseny del drac.",
    },
  ];

  return (
    <div>
      <h1>Merchandising</h1>
      <p>Productes oficials del Drac Olivé.</p>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.nom}</h3>
          <p>{product.descripcio}</p>
          <strong>{product.preu}</strong>
        </div>
      ))}
    </div>
  );
}