import React from "react";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
  const aboutlist = [
    {
      id: "Fiabilité",
      content:
        "Les annonces postées par Kasa garentissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations son régulièrement vérifiées par nos équipes.",
    },
    {
      id: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrice de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: "Sécurité",
      content:
        "La sécrurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspont aux critères de sécurités établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons  également des ateliers sur la sécrurité domestiques pour nos hôtes.",
    },
  ];
  return (
    <div className="about">
      <Navigation />
      <div className="title-background"></div>
      <div className="dropdown-wrapper">
        {aboutlist.map((dropD, index) => (
          <Dropdown
            key={index}
            dropTitle={dropD.id}
            dropDetails={<h4>{dropD.content}</h4>}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
