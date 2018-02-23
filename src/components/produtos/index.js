import React, { Component } from 'react';
import { Loading } from './Loading';
import { ProductError } from './ProductError';
import ProductSuccess from './ProductSuccess';


class Produtos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cSelected: [],
      status: 'loading',
      data: null
    };
  }

  componentDidMount() {
    fetch('https://private-259dc-tarifabranca.apiary-mock.com/equipments', {
      method: 'GET',
      mode: ''
    })
      .then(res => res.json())
      .then(data => this.setState({
        status: 'success',
        data
      }))
      .catch(() => this.setState({
        status: 'error'
      }))
  }

  onCheckboxBtnClick = (selected) => {
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

  renderProducts = () => {
    return {
      loading: () => <Loading />,
      error: () => <ProductError />,
      success: () => <ProductSuccess cSelected={ this.state.cSelected } onCheckboxBtnClick={ this.onCheckboxBtnClick } data={ this.state.data } />
    }
  }

  render() {
    const {status} = this.state;
    return (
      <div>
        { this.renderProducts()[status]() }
      </div>
    )
  }
}


export default Produtos
