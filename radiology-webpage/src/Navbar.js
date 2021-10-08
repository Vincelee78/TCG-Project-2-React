import React from 'react';
import logo from './home-logo.png';


export default function Navbar(props) {
    return (
        <React.Fragment>
            <div id="nav">
                <div id='allLogos'>
                    <img src={logo} alt={logo} id="logo" />
                    <a style={{ fontFamily: 'Stencil Std, fantasy' }} id="pagename"><b>MedRadiology</b></a>
                </div>

                <nav class="navbar" id="navbar">
                    <span class="navbar-toggle" id="js-navbar-toggle">
                        <i class="fa fa-bars"></i>
                    </span>
                    <ul class="main-nav" id="js-menu">
                        <li><a href="#js-menu" class="navlink">HOME </a></li>
                        <li><a href="#about1" class="navlink">ABOUT </a></li>
                        <li><a href="#title1" class="navlink">CASES </a></li>
                        <li><a class="navlink dropdown-toggle" href="#" id="navbarDropdown" data-bs-toggle="dropdown">COURSES</a></li>
                        <li><a href="" class="navlink">INFORMATION</a></li>
                        
                    </ul>
                </nav>
            </div>
            <div id="infowords"> Online Resource for radiologists, radiology trainees and students</div>

        </React.Fragment>

    )
}