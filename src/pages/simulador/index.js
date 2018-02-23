import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'reactstrap'
import Produtos from '../../components/produtos'
import Distribuidoras from '../../components/distribuidoras'


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


export default Simulador;
