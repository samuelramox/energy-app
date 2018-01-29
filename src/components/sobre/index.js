import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, CardText, CardBody, CardTitle } from 'reactstrap'
import Header from '../header'
import Footer from '../footer'


class Sobre extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container className="mb-2">
          <Row>
            <Col xs="12" className="d-flex align-items-center flex-column m-auto">
            <h2 className="mt-3 text-center text-primary">Entenda a Tarifa Branca</h2>
            <hr className="mt-1 border-5 bg-secondary" />
            <h6 className="mt-1 text-center text-primary">Entenda como funciona e economize</h6>
            </Col>
          </Row>
        </Container>
        <Container className="mb-3">
          <Row>
            <Col>
            <Card className="text-center text-primary border-0">
              <CardBody>
                <i className="material-icons">update</i>
                <CardTitle>O que é a Tarifa Branca?</CardTitle>
                <CardText>É uma nova modalidade, criada pela Agência Nacional de Energia Elétrica (Aneel), para estimular o consumo de energia quando o sistema elétrico é menos
                  usado ou fica ocioso. </CardText>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card className="text-center text-primary border-0">
              <CardBody>
                <i className="material-icons">update</i>
                <CardTitle>Quem pode aderir?</CardTitle>
                <CardText>A adesão é opcional e pode ser feita por clientes de baixa tensão, que tenham média anual de consumo superior a 500 kWh/mês.</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card className="text-center text-primary border-0">
              <CardBody>
                <i className="material-icons">update</i>
                <CardTitle>Quais as vantagens?</CardTitle>
                <CardText>Clientes que concentram seus hábitos de consumo entre 21h30 e 16h30 podem ter uma boa economia na conta. Porém, a escolha errada poderá ter um custo maior
                  em relação à tarifa convencional.</CardText>
              </CardBody>
            </Card>
            </Col>
          </Row>
        </Container>
        <Container className="mb-5">
          <Row>
            <Col xs="12" className="d-flex align-items-center flex-column m-auto">
            <h6 className="mt-1 mb-3 text-center text-primary">Use nosso simulador e economize!</h6>
            <Button color="success" className="px-5">FAZER SIMULAÇÃO</Button>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
      );
  }
}

export default Sobre;
