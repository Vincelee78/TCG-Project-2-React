import React from 'react';
import './App.css';
import logo from './home-logo.png';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/Carousel';
import AllCasesContent from './components/AllCasesContent';
import FeaturedCaseContents from './components/FeaturedCaseContents';
import ErrorMessage from './components/Errormessage';
import axios from 'axios';
import Info from './components/BackgroundInfo';
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


  renderCarousel = () => {
    if (this.state.active === 'Carousel') {
      return <CarouselComponent />
    }
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

          <nav class="navbar" id="navbar">
            <span class="navbar-toggle" id="js-navbar-toggle">
              <i class="fa fa-bars"></i>
            </span>
            <ul class="main-nav" id="js-menu">
              <li><span onClick={this.setActiveArticles} class="navlink">ARTICLES </span></li>
              <li><span onClick={this.setActiveInfo} class="navlink">INFORMATION ON FEATURED CASES </span></li>
              <li><span onClick={this.setActiveAllCases} class="navlink">ALL CASES </span></li>
              <li><span class="navlink" id="navbarDropdown" data-bs-toggle="dropdown">COURSES</span></li>
              <li><span onClick={this.setActiveAbout} class="navlink">ABOUT</span></li>

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

              <div class='carouselTitle'>
              <Carousel>
              <Carousel.Item>
              <img
              className="d-block w-100"
              src="https://www.carestream.com/blog/wp-content/uploads/2020/01/future_of_diag_imaging_fb_1_2020_en.jpg"
              alt="First slide" style={{ width: '100%', height: '600px', backgroundSize: 'cover' }}
              />
              <Carousel.Caption>
            {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
              className="d-block w-100"
              src="https://d1hj7uubji8r0c.cloudfront.net/sites/radiology/files/styles/max_width_full/public/images/2020-02/pcir_cover_photos_hi_res_resize.jpg?itok=VHDBxu-X"
              alt="Second slide" style={{ width: '100%', height: '600px', backgroundSize: 'cover' }}
              />

              <Carousel.Caption>
            {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
              className="d-block w-100"
              src="https://www.elsevier.com/__data/assets/image/0012/1022133/Radiology-at-a-Crossroads_Five-converging-trends-reshaping-the-need-for-diagnostic-decision-support.JPG"
              alt="Third slide" style={{ width: '100%', height: '600px', backgroundSize: 'cover' }}
              />

              <Carousel.Caption>
            {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
              </div>
              
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        



        <div class="wrapper">
          {/* <button onClick={this.renderInfo()}>a</button>{this.renderinfo2()} */}

          <div class='innerwrapper'>
            {(this.state.active !== 'AllCasesContent' && this.state.active !== 'Articles') && <p class="title" id="title1"><FeaturedCaseContents />{this.renderError()}</p>}
            <div class='wrapper2'>
              {this.state.active === 'AllCasesContent' ? <div class='title3'><AllCasesContent /> </div>: null} {this.state.active === 'Articles' ? <div class='title3'> <ErrorMessage /></div> : null}
            </div>
          </div>
          <div class='fixed-bg bg-1'>
          </div>
          <div class="fixed-bg bg-2"><span class="title1" > </span></div>

          <div class="fixed-bg bg-3"><span class="title2" ></span></div>

        </div>

      </div>

          </React.Fragment >
          );
  }
}


