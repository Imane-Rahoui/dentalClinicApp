import React, { useState, useContext, useEffect, Component } from "react";
import "./Connexion.css";
import conn2 from "../images/connexion2.png";
import conn from "../images/connexion.png";
import rd1 from "../images/rd1.PNG";
import rd2 from "../images/rd2.PNG";
import rd3 from "../images/rd3.PNG";
import rd4 from "../images/rd4.PNG";
import rd5 from "../images/rd5.PNG";
import rd6 from "../images/rd6.PNG";
import rd7 from "../images/rd7.PNG";
import RDV from "../images/RDV.PNG";
import { FirebaseContext } from "./Firebase";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import emailjs from "emailjs-com";
import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  eventSettingsModel,
} from "@syncfusion/ej2-react-schedule";
function Connexion() {  
  const firebase = useContext(FirebaseContext);
  const [InputEmail, setEmail] = useState("");
  const [InputPassword, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [err, seterr] = useState("");
  const [Flag, setFlag] = useState(true);
  const [checkB, setcheckB] = useState(false);
  useEffect(() => {
    if (InputPassword.length > 5 && InputEmail != "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [InputPassword, InputEmail]);
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .logInUser(InputEmail, InputPassword)
      .then((user) => {
        setFlag(false);
      })
      .catch((error) => {
        setEmail("");
        seterr(error);
        setPassword("");
      });
  };
  const handleChangecheck = (event) => {
    setcheckB(event.target.checked);
  };
  useEffect(() => {
    if (checkB) {
      firebase.SignOutUser();
      setFlag(true);
      setcheckB(false);
      setEmail("");
      setPassword("");
    }
  }, [checkB]);

  return (
    <div>
      {" "}
      {/* {window.location.reload(false)} */}
      {console.log("db" + Flag)}
      {Flag ? (
        <div id="n1">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="form-con">
                <div class="form-group">
                  <label for="InputEmail" class="form-label mt-4">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={InputEmail}
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="InputPassword" class="form-label mt-4">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={InputPassword}
                    class="form-control"
                    required
                  />
                </div>
                {err !== "" && <span id="smsg">{err.message}</span>}
                {btn ? (
                  <button type="submit" class="btn btn-primary" id="submit">
                    Se connecter
                  </button>
                ) : (
                  <button
                    type="submit"
                    class="btn btn-primary"
                    id="submit"
                    disabled
                  >
                    Se connecter
                  </button>
                )}
              </div>
            </fieldset>
          </form>
          <img src={conn} className="auth"></img>
        </div>
      ) : (
        <div>
          <div className="form-check form-switch" id="barre">
            <label className="form-check-label" id="labelCCKB">
              Deconnexion{" "}
            </label>
            <input
              type="checkbox"
              id="CCKB"
              class="form-check-input"
              checked={checkB}
              onChange={handleChangecheck}
            />
            <span className="slider-round"></span>
          </div>
          {console.log("dbbbb" + Flag)}
          <div className="sslider">
            <AwesomeSlider>
              <div>
                <img src={rd1} width="900px" height="100%"></img>
              </div>
              <div>
                <img src={rd2} width="700px" height="700px"></img>
              </div>
              <div>
                <img src={rd3} width="700px" height="700px"></img>
              </div>
              <div>
                <img src={rd4} width="700px" height="700px"></img>
              </div>
              <div>
                <img src={rd5} width="700px" height="100%"></img>
              </div>
              <div>
                <img src={rd6} width="700px" height="100%"></img>
              </div>
              <div>
                <img src={rd7} width="700px" height="100%"></img>
              </div>
            </AwesomeSlider>
          </div>
          <Rdv />
          <img src={conn2} id="conn2"></img>          
        </div>
      )}
    </div>
  );
}
/* function Recup_echouée(props) {
  const firebase = useContext(FirebaseContext);
  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log("userSession:" + userSession);

    let listener = firebase.auth().onAuthStateChanged((user) => {
      setUserSession(user);
    });

    console.log("userSession:" + userSession);
    if (userSession !== null) {
      firebase
        .user(userSession.uid)
        .get()
        .then((doc) => {
          if (doc && doc.exists) {
            const myData = doc.data();
            setUserData(myData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => {
      listener();
    };
  }, [userSession]);
  return (
    <div>
      {userSession === null ? (
        <Fragment>
          <div className="loader">
            <p className="loaderText">Loading...</p>
          </div>
        </Fragment>
      ) : (
        <div className="RENDEEZZZV">
          {setUserSession(true)}
          <div className="container">
            <Connexion userData={userData} />
          </div>
        </div>
      )}
    </div>
  );
} */
class Calendar extends React.Component {
  render() {
    return (
      <div>
        <ScheduleComponent
          currentView="Month"
          selectedDate={new Date(2021, 6, 14)}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    );
  }
}
 function Rdv() {  

  const firebase = useContext(FirebaseContext);  
  const data = {
    rdvnom: "",
    rdvprenom: "",
    service: "Implants dentaires",
    rdvdate: "",
    rdvdtime: "",
    InputRdvMsg: "",
  };    
  const [rdvData, setrdvData] = useState(data);  
  let send=false;  
  const handleChange = (e) => {  
    console.log(rdvData);    
    setrdvData({ ...rdvData, [e.target.id]: e.target.value });
  };   
  const handleSubmit = (e) => { 
      e.preventDefault(); console.log(rdvdate)
      firebase.db.collection("rdv").where("rdvdate", "!=", rdvdate)
      .get()
      .then(() => {
              var newRdvRef = firebase.db.collection("rdv").doc();
              newRdvRef.set(rdvData);}
              )
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
      emailjs
      .sendForm(
        "ReactMail",
        "template_7qj48rf",
        e.target,
        "user_pI1Wp6xYsjKZ616138A2B"
      )
      .then(
        (result) => {
          console.log(result.text); 
          alert("Rendez vous le "+rdvdate+" à "+rdvdtime+" !")
        },
        (error) => {
          console.log(error.text);          
          alert("Ops, Une erreur s'est produit !")
        }
        )
    e.target.reset();
  };
  const {
    rdvnom,
    rdvprenom,
    service,
    rdvdate,
    rdvdtime,
    InputRdvMsg,
  } = rdvData;
    return (
        <div>
          <img src={RDV} width="350px" height="100%" id="prenRdv"></img>
          <form id="formRdv" onSubmit={handleSubmit}>
            <fieldset>
              <div class="form-group">
                <input
                  type="text"
                  id="rdvnom"                             
                  onChange={handleChange}
                  name="Nom"
                  class="form-control"
                  placeholder="Nom"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  id="rdvprenom"
                  name="Prenom"                        
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Prenom"
                />
              </div>
              <div class="form-group">
                <select
                  class="form-select"
                  id="service"                
                  onChange={handleChange}
                  name="service"                   
                  required
                >
                  <option disabled selected>
                    Selectionner
                  </option>
                  <option>Implants dentaires</option>
                  <option>Facettes dentaires</option>
                  <option>Blanchiment</option>
                  <option>Orthodontie / Invisalign</option>
                  <option>Soins dentaires</option>
                  <option>Urgence dentaires</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  id="rdvdate"
                  name="Drdv"                            
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Date de rendez-vous (MM/DD/YYYY)"
                  onfocus="(this.type='date')"
                />
              </div>
              <div class="form-group">
                <input
                  start="09:00"
                  end="19:00"
                  type="time"
                  name="Hrdv"                             
                  onChange={handleChange}
                  id="rdvdtime"
                  step={30}
                  placeholder="Select a date and time"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="InputRdvMsg"
                  name="Message"                            
                  onChange={handleChange}
                  rows="2"
                  placeholder="Message"
                  required
                ></textarea>
              </div>{" "}
              <div>
                <button type="submit" class="btn btn-primary" id="sub">
                  Prendre rendez-vous
                </button>
              </div>
            </fieldset>
          </form>
        </div>
    );
}

export default Connexion;
