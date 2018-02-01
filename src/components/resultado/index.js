import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardText } from 'reactstrap'
import Header from '../header'
import Footer from '../footer'


class Resultado extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container className="mt-3 mb-2">
          <Row>
            <Col className="d-flex align-items-center flex-column">
            <h1 className="text-center text-blueYale">Resultado</h1>
            <hr className="mt-0 bg-secondary" style={ { width: '360px' } } />
            <h5 className="mt-1 text-center text-blueYale">Verifique aqui qual a melhor tarifa para você:</h5>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4 mb-2">
          <Row>
            <Col lg={ { size: 4, order: 1 } }>
            <Card className="pb-5 mb-3">
              <CardHeader tag="h4" className="bg-blueSail text-blueYale font-weight-bold text-center">TARIFA CONVECIONAL</CardHeader>
              <CardBody className="d-flex align-items-center justify-content-center py-5 text-danger">
                <CardText className="font-weight-bold mt-4 mr-2" style={ { fontSize: '2rem' } }>R$</CardText>
                <CardText className="font-weight-bold display-2">320</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col xs={ { size: 12, order: 3 } } lg={ { size: 4, order: 2 } }>
            <Card className="text-center text-blueYale border-0 mt-xs-1 mt-md-1 mt-lg-5">
              <CardBody>
                <CardText className="mb-0" style={ { fontSize: '1.25rem' } }>A melhor opção para você é a:</CardText>
                <CardText className="font-weight-bold" style={ { fontSize: '2rem' } }>TARIFA BRANCA</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col lg={ { size: 4, order: 3 } }>
            <Card className="pb-5 mb-3">
              <CardHeader tag="h4" className="bg-blueSail text-blueYale font-weight-bold text-center">TARIFA BRANCA</CardHeader>
              <CardBody className="d-flex align-items-center justify-content-center py-5 text-success">
                <CardText className="font-weight-bold mt-4 mr-2" style={ { fontSize: '2rem' } }>R$</CardText>
                <CardText className="font-weight-bold display-2">240</CardText>
              </CardBody>
            </Card>
            </Col>
          </Row>
        </Container>
        <Container className="my-5">
          <Row>
            <Col className="d-flex align-items-center flex-column">
            <Button color="success" className="px-5">FAZER NOVA SIMULAÇÃO</Button>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
      );
  }
}

export default Resultado;
