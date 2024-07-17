import Carousel from "./components/Carousel.tsx";
import Footer from "./components/Footer.tsx";
import Gallery from "./components/Gallery.tsx";
import Header from "./components/Header.tsx";
import HeroSection from "./components/HeroSection.tsx";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Carousel />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
