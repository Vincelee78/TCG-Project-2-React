import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Wrapper from './Wrapper';
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from './Tab';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <Navbar />
    
      <Wrapper />

    </div>
    </React.Fragment>
  );
}

export default App;
