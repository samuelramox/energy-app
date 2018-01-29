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
      <div className="table-info">
        <Header />
        <Container className="mb-2">
          <Row>
            <Col className="d-flex align-items-center flex-column m-auto">
            <h1 className="mt-3 text-center text-white">Cadastre seus aparelhos</h1>
            <hr className="mt-1 border-5 bg-secondary" />
            <Distribuidoras/>
            </Col>
          </Row>
        </Container>
        <Container className="mb-5">
          <Row>
            <Col className="d-flex align-items-center flex-column m-auto">
            <Produtos/>
            <Tabela />
            <Container className="mb-3">
              <Row>
                <Col className="d-flex align-items-center flex-column m-auto mb-3">
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
