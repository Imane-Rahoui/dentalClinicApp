import React, { useState, useContext } from "react";
import MapContainer from "./Map";
import insc from "../images/insc.PNG";
import { FirebaseContext } from "./Firebase";
import "./Inscrip.css";
function Form() {
  const firebase = useContext(FirebaseContext);
  console.log(firebase);
  const data = {
    InputName1: "",
    InputName2: "",
    InputDN: "",
    InputEmail1: "",
    InputTele: "",
    InputPassword1: "",
    InputPassword2: "",
    InputAdd: "",
    InputVille: "",
    Sexe: "",
  };
  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .signUpUser(InputEmail1, InputPassword1)
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          InputName1,
          InputName2,
          InputDN,
          InputEmail1,
          InputTele,
          InputPassword1,
          InputPassword2,
          InputAdd,
          InputVille,
          Sexe,
        });
      })
      .then((user) => {
        setLoginData({ ...data });
        setError(0);
        alert("Génial. Vous vous étes inscris maintenant !");
      })
      .catch((error) => {
        setLoginData({ ...data });
        setError(error);
      });
  };
  const {
    InputName1,
    InputName2,
    InputDN,
    InputEmail1,
    InputTele,
    InputPassword1,
    InputPassword2,
    InputAdd,
    InputVille,
    Sexe,
  } = loginData;
  const btn =
    InputName1 == "" ||
    InputName2 == "" ||
    InputDN == "" ||
    InputEmail1 == "" ||
    InputTele == "" ||
    InputPassword1 != InputPassword2 ||
    InputPassword2 == "" ||
    InputAdd == "" ||
    InputVille == "" ? (
      <button type="submit" class="btn btn-primary" disabled id="submit">
        S'inscrire
      </button>
    ) : (
      <button type="submit" class="btn btn-primary" id="submit">
        S'inscrire
      </button>
    );
  //gestion erreur
  const ErrorMsg = error !== "" && <span id="smsg">{error.message}</span>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-insc1">
            <div class="form-group">
              <label for="InputName1" class="form-label mt-4">
                Nom
              </label>{" "}
              <label for="InputName1" class="form-label mt-4" id="oblig">
                (obligatoire)
              </label>
              <input
                onChange={handleChange}
                value={InputName1}
                type="text"
                class="form-control"
                id="InputName1"
                required
              />
            </div>{" "}
            <div class="form-group">
              <label for="InputName2" class="form-label mt-4">
                Prénom
              </label>{" "}
              <label for="InputName2" class="form-label mt-4" id="oblig">
                (obligatoire)
              </label>
              <input
                onChange={handleChange}
                type="text"
                value={InputName2}
                class="form-control"
                id="InputName2"
                required
              />
            </div>
            <div class="form-group">
              <label for="InputDN" class="form-label mt-4">
                Date de naissance
              </label>{" "}
              <label for="InputDN" class="form-label mt-4" id="oblig">
                (obligatoire)
              </label>
              <input
                onChange={handleChange}
                type="date"
                value={InputDN}
                class="form-control"
                id="InputDN"
                required
              />
            </div>
            <div class="form-group">
              <label for="InputEmail1" class="form-label mt-4">
                Adresse Email
              </label>{" "}
              <label for="InputEmail1" class="form-label mt-4" id="oblig">
                (obligatoire)
              </label>
              <input
                onChange={handleChange}
                type="email"
                class="form-control"
                id="InputEmail1"
                value={InputEmail1}
                aria-describedby="emailHelp"
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="InputTele" class="form-label mt-4">
                Numéro De Téléphone
              </label>{" "}
              <label for="InputTele" class="form-label mt-4" id="oblig">
                (obligatoire)
              </label>
              <input
                onChange={handleChange}
                type="number"
                class="form-control"
                value={InputTele}
                id="InputTele"
                required
              />
            </div>
          </div>
          <div className="form-insc2">
            <div class="form-group">
              <label for="InputVille" class="form-label mt-4">
                Ville
              </label>{" "}
              <label for="InputVille" class="form-label mt-4" id="oblig">
                (obligatoire)
              </label>
              <input
                onChange={handleChange}
                type="text"
                class="form-control"
                value={InputVille}
                id="InputVille"
                required
              />
            </div>{" "}
            <div class="form-group">
              <label for="InputAdd" class="form-label mt-4">
                Adresse
              </label>{" "}
              <label for="InputAdd" class="form-label mt-4" id="oblig">
                (obligatoire)
              </label>
              <textarea
                onChange={handleChange}
                class="form-control"
                id="InputAdd"
                value={InputAdd}
                rows="2"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <label for="InputPassword1" class="form-label mt-4">
                Mot de passe
              </label>{" "}
              <label for="InputPassword1" class="form-label mt-4" id="oblig">
                (obligatoire)
              </label>
              <input
                onChange={handleChange}
                type="password"
                class="form-control"
                id="InputPassword1"
                placeholder="Password"
                value={InputPassword1}
                required
              />
            </div>
            <div class="form-group">
              <label for="InputPassword2"> </label>
              <input
                onChange={handleChange}
                type="password"
                class="form-control"
                id="InputPassword2"
                placeholder="Comfirm Password"
                value={InputPassword2}
                required
              />
            </div>
            <div class="form-group">
              <label for="Sexe" class="form-label mt-4">
                Sexe
              </label>{" "}
              <label for="InputPassword1" class="form-label mt-4" id="oblig">
                (obligatoire)
              </label>
              <select
                onChange={handleChange}
                class="form-select"
                id="Sexe"
                value={Sexe}
              >
                <option>Homme</option>
                <option>Femme</option>
              </select>
            </div>
            <div className="b">{ErrorMsg}</div>
            <div>{btn}</div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

function Inscrip() {
  let deco = { position: "absolute", top: "1000px", left: "0px" };
  return (
    <div>
      <MapContainer /> <Form /> <img src={insc} style={deco} width="100%"></img>
    </div>
  );
}

export default Inscrip;
