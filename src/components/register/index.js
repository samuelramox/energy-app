import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap'


class Register extends Component {
  render() {
    return (
      <div>
        <div className="border">
          <h1 className="text-muted mx-3">Cadastrar Aparelhos</h1>
        </div>
        <Container>
          <Form className="text-center">
            <FormGroup row className="mt-4">
              <Col sm={ 2 }>
              <Label for="Name">Nome</Label>
              <Input name="Name" id="Name" />
              </Col>
              <Col sm={ 2 }>
              <Label for="Potency">Potência Elétrica (W)</Label>
              <Input name="Potency" id="Potency" />
              </Col>
              <Col sm={ 1 }>
              <Label for="Amount">Qtd</Label>
              <Input name="Amount" id="Amount" />
              </Col>
              <Col sm={ 2 }>
              <Label for="Usage">Tempo de uso</Label>
              <Input type="number" name="Usage" id="Usage" placeholder="min/dia" />
              </Col>
              <Col sm={ 2 }>
              <Label for="Consumption">Consumo</Label>
              <Input name="Consumption" id="Consumption" placeholder="kWh/dia" />
              </Col>
              <Col sm={ 2 }>
              <Label for="Schedule">Horário de Utilização</Label>
              <Input name="Schedule" id="Schedule" />
              </Col>
              <Col sm={ 1 }>
              <Label>Add</Label>
              <Input/>
              </Col>
            </FormGroup>
            <Button className="mt-4">Cadastrar</Button>
          </Form>
        </Container>
      </div>
      );
  }
}

export default Register;
