import React, { Component } from 'react';
import { Button, Container, Row, Col, } from 'reactstrap'
import Header from '../header'
import Background from '../../img/night-city.jpg'


class Home extends Component {
  render() {
    return (
      <div style={ { height: '100vh', width: '100%', backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgorundSize: 'cover', backgroundPosition: 'center center'  } }>
        <Header />
        <Container>
          <Row>
            <Col xs="12" className="d-flex align-items-center flex-column m-auto">
            <hr className="mt-5 mb-3 border-5 bg-white" />
            <h1 className="mt-3 text-center text-white">SIMULADOR TARIFA<br/>BRANCA</h1>
            <hr className="mt-3 border-5 bg-white" />
            <h3 className="mt-5 text-center text-white">Economize na conta de luz usando nosso simulador</h3>
            <Row>
            <Button color="primary" size="lg" href="/" className="mt-5 mx-3">
              Calcular
            </Button>
            <Button color="secondary" size="lg" href="/" className="mt-5 mx-3">
              Leia mais
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
