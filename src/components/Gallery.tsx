import React, { useRef } from "react";
import "../styles/Gallery.css";
import { galleryData, GalleryItem } from "../utils/gallaryData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const galleriesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const galleries = galleriesRef.current;

    if (section && galleries) {
      const totalScroll = galleries.scrollWidth - galleries.offsetWidth;

      gsap.to(galleries, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="galleries-container">
      <h2>Explore the functions of the marketplace</h2>
      <div ref={triggerRef} className="galleries-wrapper">
        <div ref={galleriesRef} className="galleries">
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
