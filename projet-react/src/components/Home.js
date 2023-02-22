import React from "react";
import home1 from "../images/home1.png";
import home1_1 from "../images/home1-1.png";
import g2 from "../images/g2.PNG";
import g3 from "../images/g3.PNG";
import g4 from "../images/g4.PNG";
import g5 from "../images/g5.PNG";
import g6 from "../images/g6.PNG";
import g7 from "../images/g7.PNG";
import g8 from "../images/g8.PNG";
import g9 from "../images/g9.PNG";
function Home() {
  let sHome1 = {
    width: "100%",
  };
  let sHome1_1 = {
    width: "100%",
    marginBottom: "50px",
  };
  return (
    <div>
      <img src={home1} style={sHome1}></img>
      <img src={home1_1} style={sHome1_1}></img>
      <div class="row" id="row">
        <div>
          <img src={g3} id="col" width="300" height="300"></img>
          <img src={g2} id="col" width="300" height="300"></img>
          <img src={g5} id="col" width="300" height="300"></img>
          <img src={g9} id="col" width="300" height="300"></img>
        </div>
        <div>
          <img src={g4} id="col" width="300" height="300"></img>
          <img src={g6} id="col" width="300" height="300"></img>
          <img src={g7} id="col" width="300" height="300"></img>
          <img src={g8} id="col" width="300" height="300"></img>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Home;
