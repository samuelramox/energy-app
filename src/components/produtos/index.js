import React, { Component } from 'react';
import { Col, Button, ButtonGroup, Form, FormGroup, Label, Input, FormText, Container, Row } from 'reactstrap';


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
      <div className="bg-white p-1 mb-4 text-primary small">
        <Form>
          <FormGroup>
            <Container className="font-weight-bold">
              <Row>
                <Col lg={ 4 } md={ 6 } xs={ 12 } sm={ 12 } className="mt-3">
                <Label for="nome">Nome</Label>
                <Input name="nome" id="nome" placeholder="Ex: Geladeira" />
                </Col>
                <Col lg={ 3 } md={ 3 } xs={ 6 } sm={ 6 } className="mt-3">
                <Label for="potencia">Potência(Watts)</Label>
                <Input name="potencia" id="potencia" placeholder="Ex: 200" />
                </Col>
                <Col lg={ 2 } md={ 3 } xs={ 6 } sm={ 6 } className="mt-3">
                <Label for="quantidade">Quantidade</Label>
                <Input type="number" name="quantidade" id="quantidade" placeholder="Ex: 01" />
                </Col>
              </Row>
            </Container>
            <Container className="font-weight-bold">
              <Row>
                <Col lg={ 2 } md={ 4 } xs={ 12 } sm={ 12 } className="mt-3">
                <Label for="diaTodo" className="d-block">Usa o dia todo?</Label>
                <Button id="diaTodo">Switch</Button>
                </Col>
                <Col lg={ 2 } md={ 4 } xs={ 6 } sm={ 6 } className="mt-3">
                <Label for="horario">Horário em que liga?</Label>
                <Input type="time" name="horario" id="horario" className="text-center" />
                </Col>
                <Col lg={ 2 } md={ 4 } xs={ 6 } sm={ 6 } className="mt-3">
                <Label for="tempo">Quanto tempo ligado?</Label>
                <Input type="time" name="tempo" id="tempo" className="text-center" />
                </Col>
                <Col lg={ 3 } md={ 6 } xs={ 12 } sm={ 12 } className="mt-3">
                <Label for="tempo">Marque os dias de uso:</Label>
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
                <Col lg={ 3 } md={ 12 } xs={ 12 } sm={ 12 } className="d-flex justify-content-center align-items-center mt-3">
                <Button className="button-icon" outline color="link"><i class="material-icons-small text-success">add_circle</i></Button>
                <Label for="diaTodo" className="mx-1 mt-2">Adicione outro horário</Label>
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <Container className="mb-3">
            <Row>
              <Col className="d-flex align-items-center flex-column m-auto mb-3">
              <Button color="success">ADICIONAR</Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
      );
  }
}

export default Produtos
