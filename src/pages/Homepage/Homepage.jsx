import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../components/Nav/Nav";
import "./Homepage.css";
import heroImg from "../../assets/hero_img.jpg";
import watchImg from "../../assets/watchHomepage.jpg";
import accImg from "../../assets/accHomepage.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [homepageData, setHomepageData] = useState([]);

  useEffect(() => {
    (async function getCategoryFunction() {
      try {
        const resp = await axios.get("api/categories");
        setHomepageData(resp.data.categories);
      } catch (err) {
        console.error(err);
        setHomepageData(`Error Occured`);
      }
    })();
  }, []);

  return (
    <div className="container_home">
      <Nav />
      <section>
        {homepageData.map((item) => {
          return (
            <div className="card_container_homepage ">
              <div className="card_wrapper_homepage">
                <img className="card_image" src={item.image} alt="categories" />
              </div>
              <div className="card_info">
                <div className="card_title">{item.title}</div>
              </div>
            </div>
          );
        })}
      </section>
      <div className="hero_image ">
        <img className="hero_img_width" src={heroImg} alt="carosol" />
        <div className="hero_image_content">
          <h2 className="hero_img_tagline">Vee-Kay Accessories</h2>
          <p className="hero_img_tagline">
            Welcome to Men's Club Accessories where you will get a wide range of
            varieties
          </p>
          <Link to="/product">
            <button className="btn btn-default">View Products</button>
          </Link>
        </div>
        <div className="card_btm">
          <div className="card_btm_left">
            <div className="card_wrapper_homepage">
              <img className="card_image" src={watchImg} alt="watch" />
            </div>
            <div className="card_info">
              <h1>Watches</h1>
              <p>
                Check out for best mens accessories collection to style up this
                deason.
              </p>
              <a href="/Pages/Product/product.html">
                <Link to="/product">
                  <button className="btn btn-default">Explore Now</button>
                </Link>
              </a>
            </div>
          </div>
          <div className="card_btm_right">
            <div className="card_wrapper_homepage">
              <img className="card_image" src={accImg} alt="accessories" />
            </div>
            <div className="card_info">
              <h1>Fragnance</h1>
              <p>
                Check out for best mens accessories collection to style up this
                deason.
              </p>
              <a href="/Pages/Product/product.html">
                <Link to="/product">
                  <button className="btn btn-default">Explore Now</button>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Homepage };
