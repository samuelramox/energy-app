import React, { Component } from 'react';
import Home from '../home'
import Sobre from '../sobre'
import Simulador from '../simulador'
import Resultado from '../resultado'


class App extends Component {
  render() {
    return (
      <div>
         <Home />
        <Sobre />
        <Simulador />
        <Resultado />
      </div>
      );
  }
}

export default App;
