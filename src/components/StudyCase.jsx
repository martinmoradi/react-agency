import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import clients from "../data/clients";

const StudyCase = () => {
  const { clientSlug } = useParams();
  const [currentClient, setCurrentClient] = useState();

  useEffect(() => {
    const foundClient = clients.find((client) => client.slug === clientSlug);
    setCurrentClient(foundClient);
  }, [clientSlug]);

  if (!currentClient) {
    return "Chargement...";
  }

  const { clientName, title, studyCase } = currentClient;
  return (
    <div className="mt-12">
      <hr />
      {currentClient && (
        <div className="studycase-container">
          <h2 className="studycase-clientname">{clientName}</h2>
          <h3 className="studycase-title">
            {title}
          </h3>
          <p className="studycase-details">
            {studyCase}
          </p>
        </div>
      )}
    </div>
  );
};

export default StudyCase;
