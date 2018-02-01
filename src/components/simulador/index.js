import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap'
import Header from '../header'
import Produtos from '../produtos'
import Footer from '../footer'
import Distribuidoras from '../distribuidoras'
import Tabela from '../tabela'


class Simulador extends Component {
  render() {
    return (
      <div className="bg-blueGlaucous">
        <Header />
        <Container className="mt-3 mb-2">
          <Row>
            <Col className="d-flex align-items-center flex-column">
            <h1 className="text-center text-white">Cadastre seus aparelhos</h1>
            <hr className="mt-0 bg-white" style={ { width: '360px' } } />
            <Distribuidoras/>
            </Col>
          </Row>
        </Container>
        <Container className="mb-2">
          <Row>
            <Col className="d-flex align-items-center flex-column">
            <Produtos/>
            <Tabela />
            <Container className="mb-3">
              <Row>
                <Col className="d-flex align-items-center flex-column">
                <Button color="success">CALCULAR</Button>
                </Col>
              </Row>
            </Container>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
      );
  }
}

export default Simulador;
