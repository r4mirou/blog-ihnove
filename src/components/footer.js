import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";
import "../assets/scss/style.scss"

const Footer = () => (
  <footer className="site-footer">
    <div className="container" style={{textAlign:"end"}}>
      <p>Developed <span className="icon -love"><RiHeart2Line style={{animation: "pulse 1.2s linear infinite"}}/></span> by  <a href="http://www.ihnovecomunicacao.com.br">r1_development</a></p>
    </div>
  </footer>
)

export default Footer