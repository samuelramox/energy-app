import React from 'react';
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
      <div className="d-flex align-items-center flex-column">
        <h5 className="text-white mt-2">Selecione sua distribuida de energia aqui</h5>
        <ButtonDropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
          <DropdownToggle caret className="px-5 mb-3 bg-white text-primary font-weight-bold">
            Distribuidoras
          </DropdownToggle>
          <DropdownMenu className="px-4">
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      );
  }
}
