import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col, } from 'reactstrap'
import Header from '../../components/header'
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


export default Home;
