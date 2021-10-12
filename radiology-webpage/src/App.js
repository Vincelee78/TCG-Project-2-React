import React from 'react';
import './App.css';
import Navbar from './Navbar';
import FeaturedTab from './FeaturedTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/Carousel';
import AllCasesTab from './components/AllCasesTab';
import AllCasesContent from './components/AllCasesContent';





export default class App extends React.Component {
  state = {
    'active': 'featuredCase',  // indicate which page is active

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
          {this.state.active === 'AllCasesContent' ? <AllCasesContent /> : <CarouselComponent/>}

          <div class="wrapper">
            <p class="title" id="title1"> {this.state.active === 'AllCasesContent' ? <AllCasesTab />: <FeaturedTab/>} </p>
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

