import React, { Component } from 'react';
import Header from '../components/header'
import Sobre from '../pages/sobre'
import Simulador from '../pages/simulador'
import Resultado from '../pages/resultado'
import Footer from '../components/footer'
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
