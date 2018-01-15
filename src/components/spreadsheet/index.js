import React, { Component } from 'react';
import { Table, Input, Form, FormGroup } from 'reactstrap'


class Spreadsheet extends Component {
  render() {
    return (
      <div>
        <div className="border">
          <h1 className="text-muted mx-3">Lista de Aparelhos</h1>
        </div>
        <Table responsive striped>
          <thead className="thead-dark">
            <tr>
              <th>
                <Form className="mb-4">
                  <FormGroup check>
                    <Input type="checkbox" />
                  </FormGroup>
                </Form>
              </th>
              <th>Nome</th>
              <th>Potência</th>
              <th>Quantidade</th>
              <th>Tempo de uso (min/dia)</th>
              <th>Consumo (kWh/dia)</th>
              <th>Horário de uso</th>
              <th>Tarifa Branca</th>
              <th>Tarifa Convencional</th>
              <th>Custo TF. Branca Mês</th>
              <th>Custo TF. Conv. Mês</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Form>
                  <FormGroup check>
                    <Input type="checkbox" />
                  </FormGroup>
                </Form>
              </th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">
                <Form>
                  <FormGroup check>
                    <Input type="checkbox" />
                  </FormGroup>
                </Form>
              </th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
      );
  }
}
export default Spreadsheet;
