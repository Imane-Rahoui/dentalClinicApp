import React from "react";
import "./Footer.css";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
function Footer() {
  let i1Style = {
    color: "#97BB5A",
    fontSize: "24px",
    position: "absolute",
    left: "183px",
    bottom: "145px",
  };
  let i2Style = {
    color: "#97BB5A",
    fontSize: "24px",
    position: "absolute",
    left: "560px",
    bottom: "144px",
  };
  let i3Style = {
    color: "#97BB5A",
    fontSize: "24px",
    position: "absolute",
    right: "308px",
    bottom: "145px",
  };
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <RiMailFill style={i1Style} /> <h5>E-mail</h5>
            <a href="mailto:Contact@tourin.com" className="link">
              Contact@tourin.com
            </a>
          </div>
          {/* Column2 */}
          <div className="col">
            <RiPhoneFill style={i2Style} /> <h5>Contact</h5>
            <a className="link" href="tel:0511111111">
              0511111111
            </a>
            <br></br>
            <a className="link" href="tel:0522222222">
              0522222222
            </a>
          </div>
          {/* Column3 */}
          <div className="col">
            <MdLocationOn style={i3Style} />
            <h5>Addresse</h5>
            <address>
              82 Rue Soumaya Résidence Shehrazad 2, 20250. Casablanca, Maroc.
            </address>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} | All rights reserved | Terms Of
            Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
