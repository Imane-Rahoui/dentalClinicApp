import React from "react";
import { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    let map = {
      width: "100%",
      height: "50%",
    };
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={map}
          initialCenter={{
            lat: 33.573109,
            lng: -7.589843,
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC3L3CatUS2fNQWA5gp03jeQpi9VzemX9o",
})(MapContainer);
