import "../styles/Gallery.css";
import { galleryData, GalleryItem } from "../utils/gallaryData";

const Gallery = () => {
  return (
    <section className="galleries-container">
      <h2>Explore the functions of the marketplace</h2>
      <div className="galleries">
        {galleryData.map((gallery: GalleryItem) => (
          <div className="gallery">
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
    </section>
  );
};

export default Gallery;
