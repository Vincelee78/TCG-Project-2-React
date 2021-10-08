import React from 'react';
import logo from './home-logo.png';

export default function Navbar(props) {
    return (
        <React.Fragment>
            <div id="nav">
                <div class="logo">
                    <img src={logo} alt={logo} class="main-logo" />
                    <a style={{ fontFamily: 'Stencil Std, fantasy' }}><b>We Speak Fish</b></a>
                </div>

                <nav class="navbar" id="navbar">
                    <span class="navbar-toggle" id="js-navbar-toggle">
                        <i class="fa fa-bars"></i>
                    </span>
                    <ul class="main-nav" id="js-menu">
                        <li><a href="#js-menu" class="navlink">HOME </a></li>
                        <li><a href="#about1" class="navlink">ABOUT </a></li>
                        <li><a href="#title1" class="navlink">WHAT'S NEW </a></li>
                        <li><a class="navlink dropdown-toggle" href="#" id="navbarDropdown" data-bs-toggle="dropdown">MENU</a></li>
                        <li><a href="" class="navlink">CATERING</a></li>
                        <li><a href="#locations-main" class="navlink">LOCATE US </a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSePTFf-uotYvd_JqDSmQSM5USZJCr_lvAb0a75WxL5Fb0rW5Q/viewform" class="navlink" target="_blank">CAREERS </a></li>
                    </ul>
                </nav>
            </div>

        </React.Fragment>

    )
}