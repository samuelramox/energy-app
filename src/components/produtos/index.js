import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Button, ButtonGroup, Form, FormGroup, Input, Label } from 'reactstrap';
import Switch from '../switch';


class Produtos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cSelected: []
    };

    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({
      cSelected: [...this.state.cSelected]
    });
  }


  render() {
    return (
      <div className="bg-white p-1 mb-4 text-blueYale small">
        <Form>
          <FormGroup>
            <Container className="font-weight-bold">
              <Row>
                <Col lg={ 4 } md={ 6 } sm={ 12 } xs={ 12 } className="mt-3">
                <Label for="name">Nome</Label>
                <Input name="name" id="name" placeholder="Ex: Geladeira" />
                </Col>
                <Col lg={ 3 } md={ 3 } sm={ 6 } xs={ 6 } className="mt-3">
                <Label for="potency">Potência(Watts)</Label>
                <Input name="potency" id="potency" placeholder="Ex: 200" />
                </Col>
                <Col lg={ 2 } md={ 3 } sm={ 6 } xs={ 6 } className="mt-3">
                <Label for="quantity">Quantidade</Label>
                <Input type="number" name="quantity" id="quantity" placeholder="Ex: 01" />
                </Col>
              </Row>
            </Container>
            <Container className="font-weight-bold">
              <Row>
                <Col lg={ 2 } md={ 4 } sm={ 12 } xs={ 12 } className="mt-3 col-meia">
                <Label for="allDay" className="d-block">Usa o dia todo?</Label>
                <Switch/>
                </Col>
                <Col lg={ 2 } md={ 4 } sm={ 6 } xs={ 6 } className="mt-3">
                <Label for="timeOn">Horário em que liga?</Label>
                <Input type="time" name="timeOn" id="timeOn" className="text-center" />
                </Col>
                <Col lg={ 2 } md={ 4 } sm={ 6 } xs={ 6 } className="mt-3">
                <Label for="longOn">Quanto tempo ligado?</Label>
                <Input type="time" name="longOn" id="longOn" className="text-center" />
                </Col>
                <Col lg={ 2 } md={ 4 } sm={ 12 } xs={ 12 } className="mt-3 col-meia">
                <Label for="everyWeek" className="d-block">Todos os dias?</Label>
                <Switch id="everyWeek" />
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 } xs={ 12 } className="mt-3">
                <Label for="useDays" className="mr-2">Marque os dias de uso:</Label>
                <ButtonGroup>
                  <Button color="primary" onClick={ () => this.onCheckboxBtnClick(1) } active={ this.state.cSelected.includes(1) }>D</Button>
                  <Button color="primary" onClick={ () => this.onCheckboxBtnClick(2) } active={ this.state.cSelected.includes(2) }>S</Button>
                  <Button color="primary" onClick={ () => this.onCheckboxBtnClick(3) } active={ this.state.cSelected.includes(3) }>T</Button>
                  <Button color="primary" onClick={ () => this.onCheckboxBtnClick(4) } active={ this.state.cSelected.includes(4) }>Q</Button>
                  <Button color="primary" onClick={ () => this.onCheckboxBtnClick(5) } active={ this.state.cSelected.includes(5) }>Q</Button>
                  <Button color="primary" onClick={ () => this.onCheckboxBtnClick(6) } active={ this.state.cSelected.includes(6) }>S</Button>
                  <Button color="primary" onClick={ () => this.onCheckboxBtnClick(7) } active={ this.state.cSelected.includes(7) }>S</Button>
                </ButtonGroup>
                </Col>
                <Col lg={ 2 } md={ 12 } xs={ 12 } sm={ 12 } className="d-flex justify-content-center align-items-center mt-3">
                <button className="button-icon ml-4"><i class="material-icons-small text-success">add_circle</i></button>
                <Label for="" className="ml-2 mt-2">Adicione outro horário</Label>
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <Container className="my-2">
            <Row>
              <Col className="d-flex align-items-center flex-column">
              <Button color="success">ADICIONAR</Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
      );
  }
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

Input.propTypes = {
  children: PropTypes.node,
  // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  valid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};


export default Produtos


