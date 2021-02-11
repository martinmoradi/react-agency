import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import clients from "../data/clients";
import StudyCase from "../components/StudyCase"

const Works = () => {
  const [isDisplayedWithCards, setIsDisplayedWithCards] = useState(false);
  const displaySwitch = isDisplayedWithCards ? false : true;

  return (
    <main className="works-main-container">
      <div
        onClick={() => setIsDisplayedWithCards(displaySwitch)}
        className="display-switch-button"
      >
        {isDisplayedWithCards ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        )}
      </div>
      <div className="works-heading-container">
        <div className="works-heading-text-container">
          <h1 className="works-heading-primary">
            Au fil des années, nous avons pu accompagner
            <span className="works-heading-primary-span"> les meilleurs</span>
          </h1>
          <p className="works-heading-secondary">
            Découvrez pas à pas comment nous avons été présents pour lancer vos
            marques préférées.
          </p>
        </div>
      </div>

      {!isDisplayedWithCards ? (
        <div className="works-list-container">
          {clients.map((client) => (
            <div className="works-list-margin">
              <h3 className="works-list-title">
                <Link to={`/works/${client.slug}`} key={client.slug}>
                  Découvrir notre travail pour {client.clientName}
                </Link>
                <hr />
              </h3>
            </div>
          ))}
        </div>
      ) : (
        <dl className="works-cards-container">
          {clients.map((client) => (
            <div className="works-list-margin">
              <h3 class="works-cards-heading">
                <Link to={`/works/${client.slug}`} key={client.slug}>
                  Découvrir notre travail pour {client.clientName}
                </Link>
                <hr />
              </h3>
              <h4 class="works-cards-secondary">{client.title}</h4>
            </div>
          ))}
        </dl>
      )}
      <Switch>
        <Route path="/works/:clientSlug">
          <StudyCase />
        </Route>
      </Switch>
    </main>
  );
};

export default Works;
