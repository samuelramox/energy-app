import React, { Component } from 'react';
import Header from '../header'
// import Presentation from '../presentation'
// import Register from "../register"
import Spreadsheet from "../spreadsheet"
import Footer from '../footer'
import '../../animate.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Spreadsheet/>
        <Footer/>
      </div>
      );
  }
}

export default App;
