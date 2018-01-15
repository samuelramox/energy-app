import React, { Component } from 'react';
import { Button, Container, Row, Col,
} from 'reactstrap'
import "./index.css"

class Presentation extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg="8" xs="12" className="d-flex align-items-center flex-column m-auto">
            <h1 className="animated pulse mt-5">Energy App</h1>
            <hr className="mt-3 w-75 border-0 bg-secondary" />
            <p className="text-muted">
              A tarifa branca é uma nova modalidade opcional, criada pela Agência Nacional de Energia Elétrica (Aneel), para estimular o consumo de energia quando o sistema elétrico
              é menos usado ou fica ocioso.</p>
            <p className="text-muted">
              A escolha pela tarifa branca é recomendada para clientes que concentram seus hábitos de consumo entre 21h30 e 16h30. Este aplicativo ajudará a calcular o consumo
              mensal e ajudar a decidir se deve aderir à nova tarifa branca ou continuar com a tarifa convencional.
            </p>
            <Button outline color="success" size="lg" href="/" className="button mt-3">
              Iniciar Simulação
            </Button>
            <hr className="mt-4 w-75 border-0 bg-secondary" />
            </Col>
          </Row>
        </Container>
      </div>
      );
  }
}

export default Presentation;
