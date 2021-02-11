import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-main">
      <div className="container-home-main">
        <div className="headings-home-main">
          <h1 className="heading-home-h1">
            <span className="heading-home-span">Confiez vos rêves à des </span>
            <span className="heading-home-span-indigo">experts du Web</span>
          </h1>
          <p class="heading-home-paragraph">
            Grâce à notre savoir-faire, notre expérience et notre écoute, nous
            accompagnons nos clients dans la création de site internet: étude,
            UX, conception, design, développement, SEO. Notre agence web est
            capable de répondre à tous vos besoins et d'élaborer une véritable
            stratégie digitale.
          </p>
          <div className="heading-buttons">
            <div className="heading-buttons-container">
              <Link to={"/works"}>
                <span className="heading-button-primary">Projets</span>
              </Link>
            </div>
            <div class="heading-button-secondary-container">
              <Link to={"/about"}>
                <span className="heading-button-secondary">L'agence</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="heading-image-container">
        <img
          class="heading-image"
          src={
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/11/11/harold-0.jpg"
          }
          alt=""
        />
      </div>
    </main>
  );
}

export default Home
