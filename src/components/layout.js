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
        {/* Bradley Hand */}
        {/* <Logo title={"img"} /> */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <Link to={"/"}>
              <img src={Ih9Logo} style={{ width: "55px", animation: "pulse 1.2s linear infinite" }} alt="fireSpot" />
            </Link>
          </div>
          <Link to={"/"}>
            <div style={{ color: "rgb(5, 112, 212)", marginLeft: "5px", marginTop: "15px" }}><b>BLOG!</b></div>
          </Link>
        </div>
        <Navigation />
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

