import React from "react";
import service1 from "../images/services1.png";
import service2 from "../images/services2.PNG";
import service3 from "../images/services3.PNG";
import service5 from "../images/services5.PNG";
import service6 from "../images/services6.PNG";
import service4 from "../images/services4.PNG";
import service7 from "../images/services7.PNG";
import service9 from "../images/services9.PNG";
import service10 from "../images/services10.PNG";
function Services() {
  let sservice1 = {
    width: "100%",
  };
  let sservice2 = {
    width: "100%",
    position: "absolute",
    top: "2700px",
    right: "0px",
  };
  let sservicet1 = {
    width: "30%",
    borderRadius: "20px",
    position: "relative",
    right: "23%",
    marginTop: "30px",
    marginBottom: "20px",
  };
  let sservicet2 = {
    width: "30%",
    borderRadius: "20px",
    position: "relative",
    left: "23%",
    bottom: "450px",
    marginTop: "20px",
    marginBottom: "20px",
  };
  let sservicet3 = {
    width: "30%",
    borderRadius: "20px",
    position: "relative",
    right: "23%",
    bottom: "450px",
    marginTop: "20px",
    marginBottom: "20px",
  };
  let sservicet4 = {
    width: "30%",
    borderRadius: "20px",
    position: "relative",
    left: "23%",
    bottom: "925px",
    marginTop: "20px",
    marginBottom: "20px",
  };
  let sservicet5 = {
    width: "40%",
    borderRadius: "20px",
    position: "relative",
    right: "23%",
    bottom: "870px",
    marginTop: "20px",
    marginBottom: "20px",
  };
  let sservicet6 = {
    width: "40%",
    borderRadius: "20px",
    position: "absolute",
    top: "1900px",
    right: "0px",
    left: "90px",
    marginTop: "20px",
    marginBottom: "20px",
  };
  let sservicet7 = {
    width: "30%",
    borderRadius: "20px",
    position: "absolute",
    top: "2300px",
    right: "0px",
    left: "90px",
    marginTop: "20px",
    marginBottom: "20px",
  };
  let sservicet8 = {
    width: "40%",
    borderRadius: "20px",
    position: "absolute",
    top: "2300px",
    right: "0px",
    left: "700px",
    marginTop: "20px",
    marginBottom: "20px",
  };
  let H5t1 = { position: "relative", right: "23%" };
  let H5t2 = { position: "relative", left: "23%", bottom: "450px" };
  let H5t3 = { position: "relative", right: "23%", bottom: "450px" };
  let H5t4 = { position: "relative", left: "23%", bottom: "913px" };
  let H5t5 = { position: "relative", left: "23%", bottom: "1159px" };
  let H5t6 = { position: "absolute", top: "2000px", left: "650px" };
  let H5t7 = { position: "absolute", top: "1960px", left: "770px" };
  let H5t8 = { position: "absolute", top: "2390px", left: "80px" };
  let H5t9 = { position: "absolute", top: "2355px", left: "80px" };
  return (
    <div>
      <img src={service1} style={sservice1}></img>
      <img src={service2} style={sservicet1}></img>
      <h5 style={H5t1}>Soins dentaires usuels</h5>
      <p style={H5t1}>
        Nous offrons les services usuels : examen dentaire, nettoyage et
        <br></br>
        détartrage, obturation suite à une carie, traitement de canal,<br></br>
        extraction de dents, etc.
      </p>
      <img src={service3} style={sservicet2}></img>
      <h5 style={H5t2}>Soins dentaires de pointe</h5>
      <p style={H5t2}>
        En plus des services de base, nous offrons aussi toute une gamme de
        <br></br>
        services dentaires de pointe comme la détection du cancer oral,<br></br>
        l’implantologie, la dentisterie cosmétique, l’orthodontie, la radiologie
        <br></br>
        buccale 3D…
      </p>
      <img src={service5} style={sservicet3}></img>
      <h5 style={H5t3}>
        Protocole et équipement de stérilisation haut de gamme
      </h5>
      <p style={H5t3}>
        Orchidée est une clinique dentaire soucieuse de la stérilisation de ses
        <br></br>
        instruments et des mesures d’asepsie. En effet, le centre de<br></br>
        stérilisation de la clinique dentaire est outillé des équipements les
        <br></br>
        plus récents. Venez visiter notre Stéricentre, vous serez à même de
        <br></br>
        constater les efforts mis en place par notre équipe pour assurer le
        <br></br>
        meilleur confort de nos patients.
        <br></br>
      </p>
      <img src={service6} style={sservicet4}></img>
      <h5 style={H5t4}>Urgence dentaire</h5>
      <p style={H5t4}>
        Les urgences dentaires sont nombreuses. Dent cassée, abcès gingival,
        <br></br>
        blessure causée par un appareil orthodontique, etc., lorsqu’un tel
        <br></br>
        problème survient, le patient a besoin de soins rapides. C’est pourquoi,
        <br></br>à la clinique dentaire Orchidée, nous avons des horaires
        flexibles.<br></br>
      </p>
      <img src={service4} style={sservicet5}></img>
      <h5 style={H5t5}>Radiologie 3D (scan numérique de la bouche)</h5>
      <p style={H5t5}>
        Les radiographies sont des outils d’une grande importance pour les
        <br></br>
        dentistes. C’est d’autant plus vrai dans le cas des radiographies en 3D.
        <br></br>
        En effet, elles permettent aux dentistes de poser un diagnostic de façon
        <br></br>
        plus précise, d’avoir un meilleur aperçu de l’anatomie de la bouche du
        <br></br>
        patient lors de chirurgies, de traitements d’endodontie (traitements de
        <br></br>
        canal), d’implants, etc. Équipé des meilleures technologies, la clinique
        <br></br>
        dentaire Orchidée est une clinique dentaire qui a intégré la radiologie
        <br></br>
        3D dans ses méthodes de diagnostic buccal.<br></br>
      </p>
      <img src={service7} style={sservicet6}></img>
      <h5 style={H5t7}>Prothèses dentaires (dentiers)</h5>
      <p style={H5t6}>
        actuelle et présente aujourd’hui. Les nouvelles technologies de<br></br>
        fabrication, le savoir-faire du dentiste ainsi que les nouveaux<br></br>
        matériaux donnent à la prothèse une apparence si naturelle qu’elle est
        <br></br>
        invisible pour les yeux!! La prothèse dentaire est de mise lorsqu’il y a
        <br></br>
        quelques dents manquantes qui n’ont pu être réparées pour des raisons
        <br></br>
        physiologiques ou mécaniques. Elle peut remplacer les dents de façon
        <br></br>
        permanente ou temporaire.
      </p>
      <h5 style={H5t9}>HOLLYWOOD SMILE UN SOURIRE HOLLYWOODIEN ÉCLATANT</h5>
      <p style={H5t8}>
        actuelle et présente aujourd’hui. Les nouvelles technologies de<br></br>
        fabrication, le savoir-faire du dentiste ainsi que les nouveaux<br></br>
        matériaux donnent à la prothèse une apparence si naturelle qu’elle est
        <br></br>
        invisible pour les yeux!! La prothèse dentaire est de mise lorsqu’il y a
        <br></br>
        quelques dents manquantes qui n’ont pu être réparées pour des raisons
        <br></br>
        physiologiques ou mécaniques. Elle peut remplacer les dents de façon
        <br></br>
        permanente ou temporaire.
      </p>
      <img src={service9} style={sservicet8}></img>
      <img src={service10} style={sservice2}></img>
    </div>
  );
}

export default Services;
