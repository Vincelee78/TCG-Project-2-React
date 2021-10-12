import React from 'react';
import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/Carousel';
import AllCasesContent from './components/AllCasesContent';
import FeaturedCase from './components/FeaturedCase';





export default class App extends React.Component {
  state = {
    'active': 'featuredCaseContents',  // indicate which page is active

  }

  setActive = () => {
    this.setState({
      'active': 'AllCasesContent'
    })
  }


  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar setActive1={this.setActive} />
          <div class='title3'>{this.state.active === 'AllCasesContent' ? <AllCasesContent /> : <CarouselComponent/>}</div>

          <div class="wrapper">
            <p class="title" id="title1"> {this.state.active !== 'AllCasesContent' && <FeaturedCase/>} </p>
            <div class='fixed-bg bg-1'>
            </div>
            <div class="fixed-bg bg-2"><a class="title1"> </a></div>
            <div class="fixed-bg bg-3"><a class="title2"></a></div>
          </div>

  </div>

      </React.Fragment>
    );
  }
}

      
