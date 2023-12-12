// Navigation.js

import {HashLink as Link} from "react-router-hash-link";
import logo from "/Users/ulas/Documents/GitHub/personal-site/src/assets/logo.svg";
import githubLogo from "/Users/ulas/Documents/GitHub/personal-site/src/assets/github-mark-white.svg";
import linkedinLogo from "/Users/ulas/Documents/GitHub/personal-site/src/assets/linkedin-logo.png";
import ensLogo from "/Users/ulas/Documents/GitHub/personal-site/src/assets/ens-logo.png";
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
            <img className="navbar-items" id="logo" src={logo} />
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
                        <img src={githubLogo}/>
                    </a>
                </div>

                <div id="linkedin-logo">
                    <a href="https://www.linkedin.com/in/ulas-yildiz-7561a688/">
                        <img src={linkedinLogo}/>
                    </a>
                </div>
                <div id="ens-logo">
                    <a href="https://app.ens.domains/apoxy.eth">
                        <img src={ensLogo}/>
                    </a>
                </div>

            </div>


        </nav>
    );
};

export default Navbar;
