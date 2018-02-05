import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import HomeLayout from '../homeLayout'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <HomeLayout />
        </BrowserRouter>
      </div>
      );
  }
}

export default App;
