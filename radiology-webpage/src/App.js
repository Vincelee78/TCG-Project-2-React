import React from 'react';
import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/Carousel';
import AllCasesContent from './components/AllCasesContent';
import FeaturedCaseContents from './components/FeaturedCaseContents';
import ErrorMessage from './components/Errormessage';
import axios from 'axios';
import Info from './components/BackgroundInfo';






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




  setActiveAllCasesProp = () => {
    this.setState({
      'active': 'AllCasesContent'
    })
  }



  renderError() {
    if (this.state.active === 'errorMessage') {
      return <ErrorMessage />
    }
  }

  

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar setActiveAllCases={this.setActiveAllCasesProp} />
          <div class='title3'>{this.state.active === 'AllCasesContent' ? <AllCasesContent /> : <CarouselComponent />}</div>

          <div class="wrapper">
            {this.state.active!=='AllCasesContent' && <Info />}
            
            <div class='innerwrapper'>
              {this.state.active !== 'AllCasesContent' && <p class="title" id="title1"><FeaturedCaseContents />{this.renderError()}</p>}

            </div>
            <div class='fixed-bg bg-1'>
            </div>
            <div class="fixed-bg bg-2"><span class="title1" > </span></div>

            <div class="fixed-bg bg-3"><span class="title2" ></span></div>

          </div>

        </div>

      </React.Fragment>
    );
  }
}


