import React, { Component } from 'react';
import { Button, Container, Row, Col, } from 'reactstrap'
import Header from '../header'
import Background from '../../img/night-city.jpg'


class Home extends Component {
  render() {
    return (
      <div style={ { height: '100vh', width: '100%', backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgorundSize: 'cover', backgroundPosition: 'center' } }>
        <Header />
        <Container className="mt-5">
          <Row>
            <Col xs="12" className="d-flex align-items-center flex-column">
            <hr className="mt-5" style={ { border: '1px solid white', width: '40%' } } />
            <h1 className="mt-3 text-center text-white">SIMULADOR TARIFA<br/>BRANCA</h1>
            <hr className="mt-3" style={ { border: '1px solid white', width: '40%' } } />
            <h3 className="mt-5 text-center text-white">Economize na conta de luz usando nosso simulador</h3>
            <Row>
              <Button size="lg" className="mt-5 mx-3 btn-blue" href="/simulador">
                CALCULAR
              </Button>
              <Button size="lg" className="mt-5 mx-3 btn-white" href="/sobre">
                LEIA MAIS
              </Button>
            </Row>
            </Col>
          </Row>
        </Container>
      </div>
      );
  }
}

export default Home;
