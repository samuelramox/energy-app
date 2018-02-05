import React, { Component } from 'react';
import Header from './header'
import Sobre from './sobre'
import Simulador from './simulador'
import Resultado from './resultado'
import Footer from './footer'
import { Route, Switch } from 'react-router-dom'


class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/sobre" component={ Sobre } />
          <Route path="/simulador" component={ Simulador } />
          <Route path="/resultado" component={ Resultado } />
        </Switch>
        <Footer/>
      </div>
      );
  }
}

export default MainLayout;
