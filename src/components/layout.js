import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navigation from "./navigation";

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
            <a href="http://www.ihnovecomunicacao.com.br">
              <img src={Ih9Logo} style={{ width: "55px", animation: "pulse 1.2s linear infinite"}} alt="fireSpot" />
            </a>
          </div>
          <a href="http://www.ihnovecomunicacao.com.br">
            <div style={{ color: "rgb(5, 112, 212)", marginLeft: "5px", marginTop: "15px" }}><b>BLOG!</b></div>
          </a>
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

