import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <img></img>
      <div className="section-3-container">
        <div className="question">
          <div className="question-item" id="question1">
            <a className="question-link" href="#question1">
              Fiabilité
            </a>
            <div className="answer">
              <p>
                Les annonces postées par Kasa garentissent une fiabilité totale.
                Les photos sont <br />
                conformes aux logements, et toutes les informations sont
                régulièrement vérifiées <br />
                par nos équipes.
                <br />
              </p>
            </div>
          </div>

          <div className="question-item" id="question2">
            <a className="question-link" href="#question2">
              Respect
            </a>
            <div className="answer">
              <p>
                La bienveillance fait partie des valeurs fondatrice de kasa.
                Tout comportement <br />
                discriminatoire ou de perturbation du voisinage entraînera une
                exclusion de <br />
                notre plateforme.
                <br />
              </p>
            </div>
          </div>

          <div className="question-item" id="question3">
            <a className="question-link" href="#question3">
              Service
            </a>
            <div className="answer">
              <p>
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience
                <br />
                parfaite. N'hésitez pas à nous contacter si vous avez la moindre
                question. <br />
              </p>
            </div>
          </div>

          <div className="question-item" id="question4">
            <a className="question-link" href="#question4">
              Sécurité
            </a>
            <div className="answer">
              <p>
                La sécrurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les <br />
                voyageurs, chaque logement correspont aux critères de sécurités
                établis par nos <br />
                services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à <br />
                nos équipes de vérifier que les standards sont bien respectés.
                Nous organisons <br />
                également des ateliers sur la sécrurité domestiques pour nos
                hôtes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
