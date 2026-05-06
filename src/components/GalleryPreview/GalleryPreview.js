import { Link } from "react-router-dom";
import "./GalleryPreview.css";

function GalleryPreview() {
  const images = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=900&auto=format&fit=crop",
  ];

  return (
    <section className="gallery-preview">
      <div className="gallery-preview-header">
        <p>Moments de foc</p>
        <h2>Galeria</h2>
        <Link to="/galeria" className="btn btn-secondary">
          Veure galeria
        </Link>
      </div>

      <div className="gallery-preview-grid">
        {images.map((image, index) => (
          <div className="gallery-preview-item" key={index}>
            <img src={image} alt={`Moment del Drac Olivé ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GalleryPreview;