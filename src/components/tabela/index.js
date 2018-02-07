import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';


class Tabela extends Component {
  render() {
    return (
      <Table responsive hover>
        <thead className="bg-white text-blueYale small">
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
        <tbody className="bg-blueSail text-blueYale small font-weight-bold">
          <tr>
            <th scope="row" className="text-center">1</th>
            <td>Geladeira</td>
            <td className="text-center">200</td>
            <td className="text-center">01</td>
            <td className="text-center">09:30</td>
            <td className="text-center">02:00</td>
            <td className="text-center">0.99</td>
            <td className="text-center">@mdo</td>
            <button className="button-icon"><i class="material-icons-small text-danger">remove_circle</i></button>
          </tr>
        </tbody>
      </Table>
      );
  }
}

Table.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.bool
};


export default Tabela
