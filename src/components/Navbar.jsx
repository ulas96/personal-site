// Navigation.js

import {HashLink as Link} from "react-router-hash-link";
import logo from "/Users/ulas/Documents/GitHub/personal-site/src/assets/logo.svg";
import {ens, github, linkedin} from "../constants/index.js";
import "./style.css";

const Navbar = () => {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (window.pageYOffset > 0) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    return (
        <nav >
            <img className="navbar-items" id="logo" src={logo} alt="logo"/>
            <ul className="navbar-list">
                <li className="navbar-items">
                    <Link className="link" smooth to="#banner">Home</Link>
                </li>
                <li className="navbar-items">
                    <Link className="link" smooth to="#about">About</Link>
                </li>
                <li className="navbar-items">
                    <Link className="link" smooth to="#skills">Skills</Link>
                </li>
                <li className="navbar-items">
                    <Link className="link" smooth to="#projects">Projects</Link>
                </li>
            </ul>

            <div className="platform-logo">
                <div id="github-logo">
                    <a href="https://github.com/ulas96">
                        <img src={github} alt="github"/>
                    </a>
                </div>

                <div id="linkedin-logo">
                    <a href="https://www.linkedin.com/in/ulas-yildiz-7561a688/">
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                </div>
                <div id="ens-logo">
                    <a href="https://app.ens.domains/apoxy.eth">
                        <img src={ens} alt="ens"/>
                    </a>
                </div>

            </div>


        </nav>
    );
};

export default Navbar;
