import React from 'react';
import './App.css';
import logo from './home-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCasesContent from './components/AllCasesContent';
import FeaturedCaseContents from './components/FeaturedCaseContents';
import ErrorMessage from './components/Errormessage';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion'
import Carousel from 'react-bootstrap/Carousel'





export default class App extends React.Component {
  state = {
    'active': 'home',

    data: [

    ],
  }

  url = "https://5000-maroon-anglerfish-ugo6rg5n.ws-us17.gitpod.io/"

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      let response = await axios.get(this.url + "featuredCase")
      this.setState({
        data: response.data
      })

    } catch (e) {
      this.setState({
        active: 'errorMessage'
      })

    }

  }


  setActiveArticles = () => {
    this.setState({
      'active': 'Articles'
    })
  }



  setActiveAllCases = () => {
    this.setState({
      'active': 'AllCasesContent'
    })
  }

  renderAllCases = () => {
    if (this.state.active === 'AllCasesContent')
      return <AllCasesContent />
  }

  renderError() {
    if (this.state.active === 'errorMessage') {
      return <ErrorMessage />
    }
  }


  render() {
    return (
      <React.Fragment>
        <div id="nav">
          <div id='allLogos'>
            <img src={logo} alt={logo} id="logo" />
            <a style={{ fontFamily: 'Stencil Std, fantasy', textDecoration: 'none' }} id="pagename" href='App.js'><b>MedRadiology</b></a>
          </div>

          <nav className="navbar" id="navbar">
            <span className="navbar-toggle" id="js-navbar-toggle">
              <i className="fa fa-bars"></i>
            </span>
            <ul className="main-nav" id="js-menu">
              <li><span onClick={this.setActiveArticles} className="navlink">REPORTS </span></li>
              <li><span onClick={this.setActiveAllCases} className="navlink">ALL CASES </span></li>
              <li><span className="navlink" id="navbarDropdown" data-bs-toggle="dropdown">COURSES</span></li>
              <li><span onClick={this.setActiveAbout} className="navlink">ABOUT</span></li>

            </ul>
          </nav>

          {/* {this.renderAllCases()} */}
        </div>
        <div id="infowords"> Online Resource for radiologists, radiology trainees and students</div>

        <div className="App">
          {/* <Navbar setActiveAllCases={this.setActiveAllCasesProp} setActiveArticles={this.setActiveArticles1} /> */}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header></Accordion.Header>
              <Accordion.Body>

              <div className='carouselTitle'>
              <Carousel fade>
              <Carousel.Item interval={3000}>
              <img
              className="d-block w-100"
              src="https://www.carestream.com/blog/wp-content/uploads/2020/01/future_of_diag_imaging_fb_1_2020_en.jpg"
              alt="First slide" style={{ width: '100%', height: '600px', backgroundSize: 'cover' }}
              />
              <Carousel.Caption>
          
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
              className="d-block w-100"
              src="https://d1hj7uubji8r0c.cloudfront.net/sites/radiology/files/styles/max_width_full/public/images/2020-02/pcir_cover_photos_hi_res_resize.jpg?itok=VHDBxu-X"
              alt="Second slide" style={{ width: '100%', height: '600px', backgroundSize: 'cover' }}
              />

              <Carousel.Caption>
            
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
              className="d-block w-100"
              src="https://www.elsevier.com/__data/assets/image/0012/1022133/Radiology-at-a-Crossroads_Five-converging-trends-reshaping-the-need-for-diagnostic-decision-support.JPG"
              alt="Third slide" style={{ width: '100%', height: '600px', backgroundSize: 'cover' }}
              />

              <Carousel.Caption>
            
              </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
              </div>
              
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        



        <div className="wrapper">
          {/* <button onClick={this.renderInfo()}>a</button>{this.renderinfo2()} */}

          <div className='innerwrapper'>
            {(this.state.active !== 'AllCasesContent' && this.state.active !== 'Articles') && <p className="title" id="title1"><FeaturedCaseContents />{this.renderError()}</p>}
            <div className='wrapper2'>
              {this.state.active === 'AllCasesContent' ? <div className='title3'><AllCasesContent /> </div>: null} {this.state.active === 'Articles' ? <div className='title3'> <ErrorMessage /></div> : null}
            </div>
          </div>
          <div className='fixed-bg bg-1'>
          </div>
          <div className="fixed-bg bg-2"><span className="title1" > </span></div>

          <div className="fixed-bg bg-3"><span className="title2" ></span></div>

        </div>

      </div>

          </React.Fragment >
          );
  }
}


