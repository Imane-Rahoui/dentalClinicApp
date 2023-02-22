import React from "react";
import urgence1 from "../images/urgence1.PNG";
import urgence2 from "../images/urgence2.PNG";
import "./Urgence.css";

function Urgence() {
  let pug1 = { marginTop: "40px", textAlign: "left", marginLeft: "100px" };
  let ud2 = {
    width: "15%",
    position: "absolute",
    right: "160px",
    top: "250px",
    marginTop: "20px",
  };
  return (
    <div>
      <img src={urgence1} width="100%"></img>
      <p style={pug1}>
        Besoin de voir un dentiste au plus vite ? Nous en avons plusieurs.
        <br></br>
        <br></br> Que vous soyez patient ou non de notre clinique, nous
        acceptons les urgences<br></br> dentaires quelles qu’elles soient : dent
        douloureuse, abcès dentaire,<br></br> infection buccale, dent ou
        prothèse brisée, etc. <br></br>
        <br></br> Communiquez avec nous le plus tôt possible et expliquez-nous
        votre situation. <br></br> <br></br>
        Nous ferons tout notre possible pour vous donner rapidement un
        rendez-vous <br></br>
        et pour vous conseiller en attendant.
      </p>
      <img src={urgence2} style={ud2}></img>
      <br></br>
      <br></br>
      <a href="tel:0522222222" id="appel">
        Appelez-Nous
      </a>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Urgence;
