import { useEffect, useState } from "react";
import "../styles/Carousel.css";

const Carousel = () => {
  const contents = [
    {
      start: "We've made it easy and ",
      highlight: "convenient to search for a home",
    },
    {
      start: "Find your dream home with ",
      highlight: "our user-friendly search tools",
    },
    {
      start: "Discover the perfect property ",
      highlight: "at your fingertips, hassle-free",
    },
    {
      start: "Simplifying your journey to ",
      highlight: "homeownership, one click at a time",
    },
    {
      start: "Navigate the real estate market ",
      highlight: "effortlessly with our platform",
    },
    {
      start: "Streamlined house hunting: ",
      highlight: "Your ideal home awaits discovery",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
        setFade(true);
      }, 400);
    }, 3000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <section className="carousel-container">
      <div className="carousel-content">
        <h2 className={fade ? "fade-in" : "fade-out"}>
          {contents[currentIndex].start}
          <span>{contents[currentIndex].highlight}</span>
        </h2>
        <h3>oasix</h3>
      </div>
      <div className="carousel-slider">
        {contents.map((content, index) => {
          if (index === currentIndex) return <span className="slide slide-active"></span>;
          else return <span className="slide"></span>;
        })}
      </div>
    </section>
  );
};

export default Carousel;
