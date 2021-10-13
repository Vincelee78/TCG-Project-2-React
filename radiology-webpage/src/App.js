import React from 'react';
import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/Carousel';
import AllCasesContent from './components/AllCasesContent';
import FeaturedCase from './components/FeaturedCase';





export default class App extends React.Component {
  state = {
    'active': 'home',  // indicate which page is active

  }

  setActive = () => {
    this.setState({
      'active': 'AllCasesContent'
    })
  }

  // showWrapper=()=>{
  //   return(<React.Fragment>
  //     <div class="wrapper">
  //         {this.state.active !== 'AllCasesContent' && <p class="title" id="title1"><FeaturedCase/></p>}
  //           <div class='fixed-bg bg-1'>
  //           </div>
  //           <div class="fixed-bg bg-2"><span class="title1" > </span></div>
  //           <div class="fixed-bg bg-3"><span class="title2" ></span></div>
  //         </div>

  //   </React.Fragment>)

  // }



  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar setActive1={this.setActive} />
          <div class='title3'>{this.state.active === 'AllCasesContent' ? <AllCasesContent /> : <CarouselComponent/>}</div>

          <div class="wrapper">
          {this.state.active !== 'AllCasesContent' && <p class="title" id="title1"><FeaturedCase/></p>}
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

      
