import React from 'react';
import logo from './home-logo.png';




export default function Navbar(props){
    
    
    return (
        <React.Fragment>
            <div id="nav">
                <div id='allLogos'>
                    <img src={logo} alt={logo} id="logo" />
                    <a style={{ fontFamily: 'Stencil Std, fantasy', textDecoration: 'none'}} id="pagename" href='App.js'><b>MedRadiology</b></a>
                </div>

                <nav class="navbar" id="navbar">
                    <span class="navbar-toggle" id="js-navbar-toggle">
                        <i class="fa fa-bars"></i>
                    </span>
                    <ul class="main-nav" id="js-menu">
                        <li><span class="navlink">ARTICLES </span></li>
                        <li><span class="navlink">INFORMATION ON FEATURED CASES </span></li>
                        <li><span onClick={props.setActive1} class="navlink">ALL CASES </span></li>
                        <li><span class="navlink" id="navbarDropdown" data-bs-toggle="dropdown">COURSES</span></li>
                        <li><span class="navlink">ABOUT</span></li>
                        
                    </ul>
                    
                </nav>
                
            </div>
            <div id="infowords"> Online Resource for radiologists, radiology trainees and students</div>

        </React.Fragment>

    )
}


