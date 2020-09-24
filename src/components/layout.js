import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navigation from "./navigation";
import { Link } from "gatsby"

import "../assets/scss/style.scss"
import Footer from "./footer";

import Ih9Logo from '../../static/assets/ih9-logo.png';

const Layout = ({ children, className }) => {

  return (
    <div className="primary-container">
      <Header>
        <div style={{ display: "flex", flexDirection: "row", marginLeft:"3vw" }}>
          <div>
            <Link to={"/"}>
              <img src={Ih9Logo} style={{ width: "55px", animation: "pulse 1.2s linear infinite" }} alt="fireSpot" />
            </Link>
          </div>
          <Link to={"/"}>
            <div style={{ color: "white", marginLeft: "-35px", marginTop: "30px", 
            fontSize: "10px",

            // transform:"translateX(-35px) translateY(15px) ",
            
            animation: "pulse 1.2s linear infinite",
            animationDelay: ".6s",
          
          }}><b>BLOG!</b></div>
          </Link>
        </div>
        {/* <div style={{marginRight:"50px"}}> */}
        <Navigation />
        {/* </div> */}
      </Header>
      <main className={"container " + className}>
        <div style={{ marginBottom: "100px" }}></div>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

