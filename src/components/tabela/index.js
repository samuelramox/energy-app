import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap'


var timeCalc = 0;

function differenceHours(start, end) {
  let s = start.split(':');
  let e = end.split(':');

  let min = e[1] - s[1];
  let hour_ajust = 0;
  if (min < 0) {
    min += 60;
    hour_ajust += 1;
  }
  let hour = e[0] - s[0] - hour_ajust;
  let diff = hour + ":" + min;
  timeCalc = ((hour * 60) + min) * 0.0166667;

  return diff;
}

function totalValue(potency, quantity, dayvalues) {
  let total = (potency * quantity * timeCalc.toFixed(3) * (dayvalues * 4)) / 1000;
  console.log(total)
  return total;
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
            <th className="text-center">CONSUMO(kWh/mês)</th>
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
                  { `${item.timeOn} a  ${item.longOn}` }
                </td>
                <td className="text-center">
                  { differenceHours(item.timeOn, item.longOn) }
                </td>
                <td className="text-center">
                  { totalValue(item.potency, item.quantity, item.dayvalues) }
                </td>
                { /* <td className="text-center">{ item.useDays }</td> */ }
                <button className="button-icon" onClick={ () => this.props.removeObj(item) }>
                  <i className="material-icons-small text-danger">remove_circle</i>
                </button>
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
