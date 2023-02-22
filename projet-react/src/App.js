import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import { Router, Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div className="App-container ">
        <div className="content-wrap">
          <Header />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
