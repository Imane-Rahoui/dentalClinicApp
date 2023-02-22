import logo from "../images/Logo.png";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { TiPin } from "react-icons/ti";
import { GoAlert } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { IoIosTime } from "react-icons/io";
import "./Header.css";
import React from "react";
import Home from "./Home";
import Services from "./Services";
import Urgence from "./Urgence";
import HoraireTravail from "./HoraireTravail";
import Inscrip from "./Inscrip";
import Connexion from "./Connexion";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoCompo: true,
      seCompo: false,
      udCompo: false,
      htCompo: false,
      coCompo: false,
      inCompo: false,
    };
  }
  toggleButton = (flag) => {
    if (flag == "ho") {
      this.setState({ hoCompo: true });
      this.setState({ seCompo: false });
      this.setState({ udCompo: false });
      this.setState({ htCompo: false });
      this.setState({ coCompo: false });
      this.setState({ inCompo: false });
    } else if (flag == "se") {
      this.setState({ hoCompo: false });
      this.setState({ seCompo: true });
      this.setState({ udCompo: false });
      this.setState({ htCompo: false });
      this.setState({ coCompo: false });
      this.setState({ inCompo: false });
    } else if (flag == "ud") {
      this.setState({ hoCompo: false });
      this.setState({ seCompo: false });
      this.setState({ udCompo: true });
      this.setState({ htCompo: false });
      this.setState({ coCompo: false });
      this.setState({ inCompo: false });
    } else if (flag == "ht") {
      this.setState({ hoCompo: false });
      this.setState({ seCompo: false });
      this.setState({ udCompo: false });
      this.setState({ htCompo: true });
      this.setState({ coCompo: false });
      this.setState({ inCompo: false });
    } else if (flag == "co") {
      this.setState({ hoCompo: false });
      this.setState({ seCompo: false });
      this.setState({ udCompo: false });
      this.setState({ htCompo: false });
      this.setState({ coCompo: true });
      this.setState({ inCompo: false });
    } else if (flag == "in") {
      this.setState({ hoCompo: false });
      this.setState({ seCompo: false });
      this.setState({ udCompo: false });
      this.setState({ htCompo: false });
      this.setState({ coCompo: false });
      this.setState({ inCompo: true });
    }
  };
  render() {
    const { hoCompo, seCompo, udCompo, htCompo, coCompo, inCompo } = this.state;
    let insc = {
      color: "#545454",
      fontSize: "18px",
      position: "relative",
      left: "195px",
      top: "17px",
    };
    let con = {
      color: "#545454",
      fontSize: "18px",
      position: "relative",
      left: "140px",
      top: "17px",
    };
    let horai = {
      color: "#545454",
      fontSize: "18px",
      position: "relative",
      left: "87px",
      top: "15px",
    };
    let emerg = {
      color: "#545454",
      fontSize: "18px",
      position: "relative",
      left: "36px",
      top: "16px",
    };
    let serv = {
      color: "#545454",
      fontSize: "22px",
      position: "relative",
      left: "10px",
      top: "18px",
    };
    let home = {
      color: "#545454",
      fontSize: "22px",
      position: "relative",
      right: "15px",
      top: "18px",
    };
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <img src={logo} className="logo"></img>
            <div class="collapse navbar-collapse" id="navbarColor03">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <MdHome style={home} />
                  <a
                    class="nav-link"
                    id="home"
                    href="#"
                    onClick={() => this.toggleButton("ho")}
                  >
                    Acceuil
                  </a>
                </li>
                <li class="nav-item">
                  <TiPin style={serv} />
                  <a
                    class="nav-link"
                    id="services"
                    href="#"
                    onClick={() => this.toggleButton("se")}
                  >
                    Nos services
                  </a>
                </li>
                <li class="nav-item">
                  <GoAlert style={emerg} />
                  <a
                    class="nav-link"
                    id="emergency"
                    href="#"
                    onClick={() => {
                      this.toggleButton("ud");
                    }}
                  >
                    Urgence dentaire
                  </a>
                </li>
                <li class="nav-item">
                  <IoIosTime style={horai} />
                  <a
                    class="nav-link"
                    id="horaire"
                    href="#"
                    onClick={() => this.toggleButton("ht")}
                  >
                    heurs de travail
                  </a>
                </li>
                <li class="nav-item">
                  <VscAccount style={con} />
                  <a
                    class="nav-link"
                    id="conn"
                    href="#"
                    onClick={() => this.toggleButton("co")}
                  >
                    se connecter
                  </a>
                </li>
                <li class="nav-item">
                  <IoAddCircleSharp style={insc} />
                  <a
                    class="nav-link"
                    id="inscrip"
                    href="#"
                    onClick={() => this.toggleButton("in")}
                  >
                    s'inscrire
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {hoCompo ? <Home /> : null}
        {seCompo ? <Services /> : null}
        {udCompo ? <Urgence /> : null}
        {htCompo ? <HoraireTravail /> : null}
        {inCompo ? <Inscrip /> : null}
        {coCompo ? <Connexion /> : null}
      </div>
    );
  }
}

export default Header;
