/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button"

const Nav = ({ changeLang, actualLang }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active">
        <Link to="/"><Button>Home</Button></Link>
        <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link">
        <Link to="/about"><Button>About</Button></Link></a>
      <a className="nav-item nav-link"> 
      <Link to="/works">
        <Button type="dashed">Works</Button></Link></a>
        <div className="flag"><span onClick={changeLang}>{actualLang()}</span></div>
      </div>
  </div>
      </nav>
  );
};

export default Nav;
