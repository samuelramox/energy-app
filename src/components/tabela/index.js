import React, { Component } from 'react';
import { Table, Button, Container, Row, Col } from 'reactstrap';


class Tabela extends Component {
  render() {
    return (
      <Table responsive hover>
        <thead className="bg-white text-primary small">
          <tr>
            <th className="text-center">#</th>
            <th>NOME</th>
            <th className="text-center">POTÊNCIA(W)</th>
            <th className="text-center">QTD</th>
            <th className="text-center">HORÁRIOS</th>
            <th className="text-center">TEMPO(por dia)</th>
            <th className="text-center">CONSUMO(kWh/dia)</th>
            <th className="text-center">DIAS DE USO</th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody className="table-primary text-primary small font-weight-bold">
          <tr>
            <th scope="row" className="text-center">1</th>
            <td>Geladeira</td>
            <td className="text-center">200</td>
            <td className="text-center">01</td>
            <td className="text-center">09:30</td>
            <td className="text-center">02:00</td>
            <td className="text-center">0.99</td>
            <td className="text-center">@mdo</td>
            <Button className="button-icon" outline color="link"><i class="material-icons-small text-danger">remove_circle</i></Button>
          </tr>
        </tbody>
      </Table>
      );
  }
}

export default Tabela
