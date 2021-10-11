import React from 'react';
import logo from './home-logo.png';



export default class Navbar extends React.Component {
    state = {
        'active': 'listing',  // indicate which page is active
        
      }

      setActive = (page) => {
        this.setState({
            'active': page
        })
    }

    // renderContent() {

    //     if (this.state.active === "AllCasesContent") {
    //       return (
    //         <React.Fragment>
    //           <AllCasesContent />
    //         </React.Fragment>
    //       )
    //     }
    // }

    render(){
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
                        <li><a href="#js-menu" class="navlink">ARTICLES </a></li>
                        <li><a href="#about1" class="navlink">INFORMATION ON FEATURED CASES </a></li>
                        <li><a href="AllCasesContent" onClick={() => {this.setActive('AllCasesContent')}} class="navlink">ALL CASES </a></li>
                        <li><a class="navlink" href="#" id="navbarDropdown" data-bs-toggle="dropdown">COURSES</a></li>
                        <li><a href="" class="navlink">ABOUT</a></li>
                        
                    </ul>
                    {/* {this.renderContent()} */}
                </nav>
                
            </div>
            <div id="infowords"> Online Resource for radiologists, radiology trainees and students</div>

        </React.Fragment>

    )
}
}

