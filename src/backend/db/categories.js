import { v4 as uuid } from "uuid";
import sunglassesImg from "../../assets/sunglassesHomepage.jpg"
import barwareImg from "../../assets/barwareHomepage.jpeg"
import groomingImg from "../../assets/groomingHomepage.jpg"
import fitnessImg from "../../assets/fitnessHomepage.jpg"
import footwearImg from "../../assets/footwearHomepage.jpg"

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "sunglasses",
    image : sunglassesImg,
    title: "Sunglasses",
  },
  {
    _id: uuid(),
    categoryName: "barware",
    image : barwareImg,
    title: "Barware",
  },
  {
    _id: uuid(),
    categoryName: "grooming",
    image : groomingImg,
    title: "Grooming",
  },
  {
    _id: uuid(),
    categoryName: "fitness",
    image : fitnessImg,
    title: "Fitness",
  },
  {
    _id: uuid(),
    categoryName: "footwear",
    image : footwearImg,
    title: "Footwear",
  },
];
