import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Wrapper from './Wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends React.Component {

  render(){
  return (
    <React.Fragment>
    <div className="App">
      <Navbar />
      <Wrapper />

    </div>
    </React.Fragment>
  );
}
}

