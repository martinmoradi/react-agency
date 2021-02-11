import React from "react";

const About = () => {
  return (
    <section className="about-main-container">
      <div className="about-main-secondary-container">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="about-main-text">
              <p>
                &ldquo;Websitic est une Agence de communication digitale à Paris
                ayant pour mission de vous accompagner sur vos projets digitaux.
                De l’étape d’avant projet web au lancement effectif du site,
                nous somme là pour vous. Tout au long de la durée de vie de nos
                projets communs, nous mettons tout en oeuvre pour vous proposer
                des stratégies digitales efficaces et vous permettre d’atteindre
                vos objectifs. Laissez votre projet entre des mains dignes de
                confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore
                "Sedal" vers le sommet.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="about-signature-container">
                <div className="md:flex-shrink-0">
                  <img
                    className="about-signature-image"
                    src="https://i.kym-cdn.com/photos/images/original/000/848/178/9f9.png"
                    alt=""
                  />
                  <div className="about-signature-text-container">
                    <div className="about-signature-text">
                      Hide the Pain Harold
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="about-signature-text-secondary">
                      CEO, Websitic
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
