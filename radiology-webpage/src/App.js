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
import Report from './components/Report';
import RadiologistInfo from './components/RadiologistInfo';
import About from './components/About';
import Tooltip from "react-bootstrap/Tooltip";
import Search from './components/Search';







export default class App extends React.Component {
  state = {
    'active': 'home',
    search: '',

    data: [

    ],
    dataSearch: [],
  }

  url = "https://5000-maroon-anglerfish-ugo6rg5n.ws-us17.gitpod.io/"

  renderTooltip = () => (
    <Tooltip >Favourite this case</Tooltip>
  );

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


  setActiveReports = () => {
    this.setState({
      'active': 'Reports'
    })
  }


  setActiveAllCases = () => {
    this.setState({
      'active': 'AllCasesContent'
    })
  }

  setActiveRadiologist = () => {
    this.setState({
      'active': 'RadiologistInfo'
    })
  }

  setActiveAbout = () => {
    this.setState({
      'active': 'About'
    })
  }

  setActiveSearch = async () => {
    try {
      await axios.get(this.url + "searchCases/", {
        params: {
          search: this.state.search
        }
      })
        .then((res) => {
          this.setState({
            dataSearch: res.data
          })
        })


    } catch (e) {
      this.setState({
        active: 'errorMessage'
      })

    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  renderAllCases = () => {
    if (this.state.active === 'About') {
      return <About />

    } if (this.state.active === 'AllCasesContent') {
      return <AllCasesContent />

    } if (this.state.active === 'Reports') {
      return <Report />

    } if (this.state.active === 'RadiologistInfo') {
      return <RadiologistInfo />

    } if (this.state.active === 'Search') {
      return <Search />
    }
  }

  // renderError() {
  //   if (this.state.active === 'errorMessage') {
  //     return <ErrorMessage />
  //   }
  // }



  render() {
    return (
      // this.state.data.map(patientsData => {
      <React.Fragment>
        <div id="nav">

          <img src={logo} alt={logo} id="logo" />
          <a style={{ fontFamily: 'Stencil Std, fantasy', textDecoration: 'none' }} id="pagename" href='App.js'>MedRadiology</a>


          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="row d-flex flex-row">

              <button class="navbar-toggler d-flex justify-content-end p-4 ml-auto d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 main-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" onClick={this.setActiveAbout}>ABOUT</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" onClick={this.setActiveReports}>REPORTS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" onClick={this.setActiveAllCases}>ALL CASES</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#" onClick={this.setActiveRadiologist}>RADIOLOGIST INFORMATION</a>
                  </li>
                </ul>
                <div class="d-flex">
                  <input class="form-control" type="search" placeholder="Search case" name="search" onChange={this.onChange}></input>
                  <button class='searchbtn rounded-3' onClick={this.setActiveSearch}><i class="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </nav>

          {/* <nav className="navbar" id="navbar">
            <span className="navbar-toggle" id="js-navbar-toggle">
              <i className="fa fa-bars"></i>
            </span>
            <ul className="main-nav" id="js-menu">
              <li><span onClick={this.setActiveArticles} className="navlink">REPORTS </span></li>
              <li><span onClick={this.setActiveAllCases} className="navlink">ALL CASES </span></li>
              <li><span className="navlink" id="navbarDropdown" data-bs-toggle="dropdown">COURSES</span></li>
              <li><span onClick={this.setActiveAbout} className="navlink">ABOUT</span></li>

            </ul>
          </nav> */}

          {/* {this.renderAllCases()} */}
        </div>
        <div id="infowords"> Online Resource for radiologists, radiology trainees and students</div>
        {this.state.active === 'Reports' ? <div className='title4'><Report /></div> : null}
        {this.state.active === 'RadiologistInfo' ? <div className='title5'><RadiologistInfo /></div> : null}
        {this.state.active === 'About' ? <div className='title6'><About /></div> : null}

        <div className="App">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header></Accordion.Header>
              <Accordion.Body>

                <div className='carouselTitle'>
                  <Carousel fade>
                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block w-100"
                        src="https://www.elsevier.com/__data/assets/image/0012/1022133/Radiology-at-a-Crossroads_Five-converging-trends-reshaping-the-need-for-diagnostic-decision-support.JPG"
                        alt="First slide"
                      />
                      <Carousel.Caption>

                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block w-100"
                        src="https://d1hj7uubji8r0c.cloudfront.net/sites/radiology/files/styles/max_width_full/public/images/2020-02/pcir_cover_photos_hi_res_resize.jpg?itok=VHDBxu-X"
                        alt="Second slide"
                      />

                      <Carousel.Caption>

                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block w-100"
                        src="https://www.carestream.com/blog/wp-content/uploads/2020/01/future_of_diag_imaging_fb_1_2020_en.jpg"
                        alt="Third slide"
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
            <div className='innerwrapper'>
              {(this.state.active !== 'AllCasesContent' && this.state.active !== 'Reports' && this.state.active !== 'RadiologistInfo' && this.state.active !== 'About') && <p className="title" id="title1"><FeaturedCaseContents /></p>}
              <div className='wrapper2'>
                {this.state.active === 'AllCasesContent' ? <div className='title3'><AllCasesContent /> </div> : null} {this.state.active === 'errorMessage' ? <div className='title3'> <ErrorMessage /></div> : null}

              </div>
            </div>
            <div className='fixed-bg bg-1'>
            </div>
            <div className="fixed-bg bg-2"><span className="title1" > </span></div>

            <div className="fixed-bg bg-3"><span className="title2" ></span></div>

          </div>

        </div>

      </React.Fragment >
      // })
    );
  }
}


