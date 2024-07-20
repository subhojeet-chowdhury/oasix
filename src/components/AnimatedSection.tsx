import { useRef, useEffect, useState } from "react";
import "../styles/AnimatedSection.css";
import animation from "../assets/animation.mp4";

const AnimatedSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", () => setVideoLoaded(true));
      video.load();
    }

    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => setVideoLoaded(true));
      }
    };
  }, []);

  useEffect(() => {
    if (!videoLoaded) return;

    const video = videoRef.current;
    const section = sectionRef.current;

    if (video && section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play();
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(section);

      return () => {
        observer.unobserve(section);
      };
    }
  }, [videoLoaded]);

  return (
    <div ref={sectionRef} className="animated-section">
      {!videoLoaded && <div className="loading">Loading...</div>}
      <video ref={videoRef} src={animation} muted playsInline preload="auto" loop />
    </div>
  );
};

export default AnimatedSection;
