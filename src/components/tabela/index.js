import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap'

function diferencaHoras(start, end) {
  var s = start.split(':');
  var e = end.split(':');

  var min = e[1] - s[1];
  var hour_carry = 0;
  if (min < 0) {
    min += 60;
    hour_carry += 1;
  }
  var hour = e[0] - s[0] - hour_carry;
  var diff = hour + ":" + min;

  return diff;
}


class Tabela extends Component {
  render() {
    return (
      <Table responsive hover>
        <thead className="bg-white text-blueYale small">
          <tr>
            { /* <th className="text-center">#</th> */ }
            <th>NOME</th>
            <th className="text-center">POTÊNCIA(W)</th>
            <th className="text-center">QTD</th>
            <th className="text-center">HORÁRIOS</th>
            <th className="text-center">TEMPO(por dia)</th>
            <th className="text-center">CONSUMO(kWh/dia)</th>
            { /* <th className="text-center">DIAS DE USO</th> */ }
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody className="bg-blueSail text-blueYale small font-weight-bold">
          { this.props.data && this.props.data.map((item) => (
              <tr>
                { /* <th scope="row" className="text-center">1</th> */ }
                <td>
                  { item.name }
                </td>
                <td className="text-center">
                  { item.potency }
                </td>
                <td className="text-center">
                  { item.quantity }
                </td>
                <td className="text-center">
                  { item.timeOn }
                </td>
                <td className="text-center">
                  { diferencaHoras(item.timeOn, item.longOn) }
                </td>
                <td className="text-center">
                  { item.potency * item.quantity }
                </td>
                { /* <td className="text-center">{ item.useDays }</td> */ }
                <button className="button-icon"><i className="material-icons-small text-danger">remove_circle</i></button>
              </tr>
            )) }
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
