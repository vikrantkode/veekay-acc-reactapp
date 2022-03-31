import { v4 as uuid } from "uuid";
import sunglasses1 from "../../assets/sun1.jpg"
import sunglasses2 from "../../assets/sun2.jpg"
import sunglasses3 from "../../assets/sun3.jpg"
import sunglasses4 from "../../assets/sun4.jpg"
import barware1 from "../../assets/bar1.jpg"
import barware2 from "../../assets/bar2.jpg"
import barware3 from "../../assets/bar3.jpg"
import barware4 from "../../assets/bar4.jpg"
import groom1 from "../../assets/groom1.jpg"
import groom2 from "../../assets/groom2.jpg"
import groom3 from "../../assets/groom3.jpg"
import groom4 from "../../assets/groom4.jpg"
import fitness1 from "../../assets/fit1.jpg"
import fitness2 from "../../assets/fit2.jpg"
import fitness3 from "../../assets/fit3.jpg"
import fitness4 from "../../assets/fit4.jpg"
import fo1 from "../../assets/foot1.jpg"
import fo2 from "../../assets/foot2.jpg"
import fo3 from "../../assets/foot3.jpg"
import fo4 from "../../assets/foot4.jpg"

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
 {
    _id: uuid(),
    title: "Fuzoku | Sunglasses",
    image: sunglasses1,
    price: 299,
    original_price: 599,
    discount: "50%",
    rating: 4.2,
    categoryName: "sunglasses",
  },
  {
    _id: uuid(),
    title: "Oakley | Sunglasses",
    image: sunglasses2,
    price: 599,
    original_price: 899,
    discount: "50% ",
    rating: 4.7,
    categoryName: "sunglasses",
  },
  {
    _id: uuid(),
    title: "Ray-Ban | Sunglasses",
    image: sunglasses3,
    price: 249,
    original_price: 599,
    discount: "50%",
    rating: 4.3,
    categoryName: "sunglasses",
  },
  {
    _id: uuid(),
    title: "Aeropostale | Sunglasses",
    image: sunglasses4,
    price: 999,
    original_price: 1199,
    discount: "50%",
    rating: 4,
    categoryName: "sunglasses",
  },
  {
    _id: uuid(),
    title: "Bar-Box | Barware",
    image: barware1,
    price: 1499,
    original_price: 1899,
    discount: "50%",
    rating: 3.8,
    categoryName: "barware",
  },
  {
    _id: uuid(),
    title: "Indi-Gifts | Barware",
    image: barware2,
    price: 199,
    original_price: 449,
    discount: "50%",
    rating: 3.2,
    categoryName: "barware",
  },
  {
    _id: uuid(),
    title: "Collective | Barware",
    image: barware3,
    price: 749,
    original_price: 899,
    discount: "50%",
    rating: 3.5,
    categoryName: "barware",
  },
  {
    _id: uuid(),
    title: "Nestroots | Barware",
    image: barware4,
    price: 799,
    original_price: 999,
    discount: "50%",
    rating: 3.1,
    categoryName: "barware",
  },
  {
    _id: uuid(),
    title: "Colonge | Grooming",
    image: groom1,
    price: 499,
    original_price: 899,
    discount: "50%",
    rating: 2.9,
    categoryName: "grooming",
  },
  {
    _id: uuid(),
    title: "UstrA | Grooming",
    image: groom2,
    price: 399,
    original_price: 599,
    discount: "50%",
    rating: 2.7,
    categoryName: "grooming",
  },
  {
    _id: uuid(),
    title: "VK Watch | Grooming",
    image: groom3,
    price: 999,
    original_price: 1299,
    discount: "50%",
    rating: 2.5,
    categoryName: "grooming",
  },
  {
    _id: uuid(),
    title: "Sports | Grooming",
    image: groom4,
    price: 1399,
    original_price: 1499,
    discount: "50%",
    rating: 2.2,
    categoryName: "grooming",
  },
  {
    _id: uuid(),
    title: "Fitmax Weights | Fitness",
    image: fitness1,
    price: 649,
    original_price: 999,
    discount: "50%",
    rating: 2.1,
    categoryName: "fitness",
  },
  {
    _id: uuid(),
    title: "Fit Bands | Fitness",
    image: fitness2,
    price: 1299,
    original_price: 1999,
    discount: "50%",
    rating: 4.6,
    categoryName: "fitness",
  },
  {
    _id: uuid(),
    title: "Whey Proteins| Fitness",
    image: fitness3,
    price: 1099,
    original_price: 1499,
    discount: "50%",
    rating: 2.8,
    categoryName: "fitness",
  },
  {
    _id: uuid(),
    title: "Yoga Mat | Fitness",
    image: fitness4,
    price: 899,
    original_price:1199,
    discount: "50%",
    rating: 3.9,
    categoryName: "fitness",
  },
  {
    _id: uuid(),
    title: "Sliders | Footwear",
    image: fo1,
    price: 899,
    original_price: 1199,
    discount: "50%",
    rating: 3.9,
    categoryName: "footwear",
  },
  {
    _id: uuid(),
    title: "Flip-Flop | Footwear",
    image: fo2,
    price: 899,
    original_price: 1199,
    discount: "50%",
    rating: 3.9,
    categoryName: "footwear",
  },
  {
    _id: uuid(),
    title: "Dailywear | Footwear",
    image: fo3,
    price: 899,
    original_price:1199,
    discount: "50%",
    rating: 3.9,
    categoryName: "footwear",
  },
  {
    _id: uuid(),
    title: "Casuals | Footwear",
    image: fo4,
    price: 899,
    original_price:1199,
    discount: "50%",
    rating: 3.9,
    categoryName: "footwear",
  },
  
];
