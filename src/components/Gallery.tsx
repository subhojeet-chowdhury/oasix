import { useEffect, useRef, useState } from "react";
import "../styles/Gallery.css";
import { galleryData, GalleryItem } from "../utils/gallaryData";

const Gallery = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const current = containerRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section className={`galleries-container ${isVisible ? "scrolling" : ""}`} ref={containerRef}>
      <h2>Explore the functions of the marketplace</h2>
      <div className="galleries-wrapper">
        <div className="galleries">
          {[...galleryData, ...galleryData].map((gallery: GalleryItem, index: number) => (
            <div className="gallery" key={index}>
              <div className="gallery-image">
                <img src={gallery.image} alt="Daria" />
              </div>
              <div className="gallery-content">
                <h3>{gallery.heading}</h3>
                <p>{gallery.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button>
        Go to marketplace <i className="fa-solid fa-arrow-right"></i>
      </button>
    </section>
  );
};

export default Gallery;
