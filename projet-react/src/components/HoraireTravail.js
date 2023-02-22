import React from "react";
import horairetravail2 from "../images/horairetravail2.PNG";
import horairetravail1 from "../images/horairetravail1.PNG";
import background from "../images/background.PNG";

function HoraireTravail() {
  let ht1 = {
    width: "30%",
    margin: "20px",
    position: "relative",
    left: "300px",
  };
  let bck = {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "0px",
    top: "390px",
    zIndex: "-1",
  };
  let ht2 = {
    marginTop: "40px",
    textAlign: "left",
    marginLeft: "100px",
    position: "absolute",
    top: "550px",
    left: "0px",
  };
  let H52 = {
    marginTop: "40px",
    textAlign: "left",
    marginLeft: "100px",
    position: "absolute",
    top: "520px",
    left: "0px",
  };

  return (
    <div>
      <img src={horairetravail2} width="100%"></img>
      <img src={horairetravail1} style={ht1}></img>
      <img src={background} style={bck}></img>
      <h5 style={H52}>Soins dentaires de pointe</h5>
      <p style={ht2}>
        En plus des services de base, nous offrons aussi toute une gamme de
        <br></br>
        services dentaires de pointe comme la détection du cancer oral,<br></br>
        l’implantologie, la dentisterie cosmétique, l’orthodontie, la radiologie
        <br></br>
        buccale 3D…
      </p>
    </div>
  );
}

export default HoraireTravail;
