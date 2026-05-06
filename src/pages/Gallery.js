import "./Gallery.css";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <p>Moments de foc</p>
        <h1>Galeria</h1>
        <span>
          Descobreix els correfocs, actuacions i moments del Drac Olivé.
        </span>
      </section>

      <section className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Galeria ${index}`} />
          </div>
        ))}
      </section>
    </main>
  );
}