import { useMemo, useState } from "react";
import "./GalleryGrid.css";

const photos = [
  { id: 1, category: "drac" },
  { id: 2, category: "correfocs" },
  { id: 3, category: "fogosons" },
  { id: 4, category: "festes" },
  { id: 5, category: "drac" },
  { id: 6, category: "fogosons" },
  { id: 7, category: "correfocs" },
  { id: 8, category: "festes" },
  { id: 9, category: "drac" },
  { id: 10, category: "correfocs" },
  { id: 11, category: "fogosons" },
  { id: 12, category: "festes" },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("totes");

  const filteredPhotos = useMemo(() => {
    if (filter === "totes") return photos;

    return photos.filter((photo) => photo.category === filter);
  }, [filter]);

  const filters = [
    { id: "totes", label: "Totes" },
    { id: "correfocs", label: "Correfocs" },
    { id: "drac", label: "Drac" },
    { id: "fogosons", label: "Fogosons" },
    { id: "festes", label: "Festes" },
  ];

  return (
    <section className="gallery-grid">
      <div className="container">
        <div className="gallery-grid__filters">
          {filters.map((item) => (
            <button
              key={item.id}
              className={filter === item.id ? "active" : ""}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid__grid">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-grid__item"
            >
              <span>Fotografia pendent</span>

              <small>{photo.category}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}