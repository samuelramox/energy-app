import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap'
import Produtos from '../produtos'
import Distribuidoras from '../distribuidoras'
import Tabela from '../tabela'


class Simulador extends Component {
  render() {
    return (
      <div className="bg-blueGlaucous">
        <Container>
          <Row>
            <Col className="d-flex align-items-center flex-column">
            <h1 className="text-center text-white  mt-3">Cadastre seus aparelhos</h1>
            <hr className="mt-0 bg-white" style={ { width: '360px' } } />
            <Distribuidoras/>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="d-flex align-items-center flex-column">
            <Produtos/>
            <Tabela />
            <Container className="mb-4">
              <Row>
                <Col className="d-flex align-items-center flex-column">
                <Button color="success" href="/resultado">CALCULAR</Button>
                </Col>
              </Row>
            </Container>
            </Col>
          </Row>
        </Container>
      </div>
      );
  }
}

export default Simulador;
