import "../styles/Gallery.css";
import { galleryData, GalleryItem } from "../utils/gallaryData";

const Gallery = () => {
  return (
    <section className="galleries-container">
      <h2>Explore the functions of the marketplace</h2>
      <div className="galleries-wrapper">
        <div className="galleries">
          {galleryData.map((gallery: GalleryItem, index: number) => (
            <div className="gallery" key={index}>
              <div className="gallery-image">
                <img src={gallery.image} alt={gallery.heading} />
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
