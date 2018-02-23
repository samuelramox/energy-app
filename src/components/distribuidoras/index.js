import React from 'react';
import PropTypes from 'prop-types'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Distribuidoras extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="d-flex align-items-center flex-column my-3">
        <h5 className="text-white">Selecione sua distribuida de energia aqui</h5>
        <ButtonDropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
          <DropdownToggle caret className="px-5 btn-white font-weight-bold">
            Distribuidoras
          </DropdownToggle>
          <DropdownMenu className="px-4">
            <DropdownItem>AES Eletropaulo</DropdownItem>
            <DropdownItem>AES SUL (RGE SUL)</DropdownItem>
            <DropdownItem>AmE</DropdownItem>
            <DropdownItem>Enel RJ (Ampla)</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      );
  }
}


ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool
};
