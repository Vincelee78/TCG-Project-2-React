import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Tab from './Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
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


  render(){
  return (
    <React.Fragment>
    <div className="App">
      <Navbar setActive1={this.setActive}/>
      <div class="wrapper">
      <p class="title" id="title1">{this.state.active==='AllCasesContent'? <AllCasesContent/>:<Tab/>}</p>
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

