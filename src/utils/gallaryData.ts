import imageDaria from "../assets/gallaries/image-daria.svg";
import imageCompare from "../assets/gallaries/image-compare.svg";
import imagePredictions from "../assets/gallaries/image-predictions.svg";
import imageInfrastructure from "../assets/gallaries/image-infrastructure.svg";
import imageFacility from "../assets/gallaries/image-facility.svg";
import imageFloors from "../assets/gallaries/image-floors.svg";

export interface GalleryItem {
  image: string;
  heading: string;
  description: string;
}

export const galleryData: GalleryItem[] = [
  {
    image: imageDaria,
    heading: "Artificial intelligence Daria",
    description: "Our AI assistant Daria will help you remotely find your dream home in a new way.",
  },
  {
    image: imageCompare,
    heading: "Save. Compare!",
    description: "Conveniently compare up to 18 apartments, developers and projects.",
  },
  {
    image: imagePredictions,
    heading: "Predictions and statistics",
    description: "Big data analysis is available to everyone without registrations.",
  },
  {
    image: imageInfrastructure,
    heading: "All about infrastructure",
    description: "Calculate the distance to the desired objects with ease.",
  },
  {
    image: imageFacility,
    heading: "Detailed information about the facility",
    description:
      "Housing, developer and unit maps are always at your fingertips, where you expect to find it.",
  },
  {
    image: imageFloors,
    heading: "Walk around the facilities and floors",
    description:
      "We add digital copies of the property and tours so you can feel at home before you buy even if the house hasn't been built yet.",
  },
];
