import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap'


class Sobre extends Component {
  render() {
    return (
      <div>
        <Container className="mt-3">
          <Row>
            <Col className="d-flex align-items-center flex-column">
            <h1 className="text-center text-blueYale">Entenda a Tarifa Branca</h1>
            <hr className="mt-0 bg-secondary" style={ { width: '360px' } } />
            <h5 className="mt-1 text-center text-blueYale">Entenda como funciona e economize</h5>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col lg={ { size: 4, order: 1 } }>
            <Card className="text-center text-blueYale border-0">
              <CardBody>
                <i className="material-icons text-blueSail">update</i>
                <CardTitle>O que é a Tarifa Branca?</CardTitle>
                <CardText>É uma nova modalidade, criada pela Agência Nacional de Energia Elétrica (Aneel), para estimular o consumo de energia quando o sistema elétrico é menos
                  usado ou fica ocioso. </CardText>
              </CardBody>
            </Card>
            </Col>
            <Col xs={ { size: 12, order: 3 } } lg={ { size: 4, order: 2 } }>
            <Card className="text-center text-blueYale border-0">
              <CardBody>
                <i className="material-icons text-blueSail">flash_on</i>
                <CardTitle>Quem pode aderir?</CardTitle>
                <CardText>A adesão é opcional e pode ser feita por clientes de baixa tensão, que tenham média anual de consumo superior a 500 kWh/mês.</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col lg={ { size: 4, order: 3 } }>
            <Card className="text-center text-blueYale border-0">
              <CardBody>
                <i className="material-icons text-blueSail">monetization_on</i>
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
            <Col className="d-flex align-items-center flex-column">
            <h4 className="mb-3 text-center text-blueYale">Use nosso simulador e economize!</h4>
            <Button color="success" className="px-5" href="/simulador">FAZER SIMULAÇÃO</Button>
            </Col>
          </Row>
        </Container>
      </div>
      );
  }
}


Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string
}

Container.propTypes = {
  fluid: PropTypes.bool
// applies .container-fluid class
}

Row.propTypes = {
  noGutters: PropTypes.bool
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}

Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};


export default Sobre;
