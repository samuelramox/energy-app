import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Media } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="secondary" light expand="md">
          <NavbarBrand>
            <Media left href="#">
              <Media object data-src="../../img/logo-senai.jpg" alt="logo" />
            </Media>
          </NavbarBrand>
          <NavbarToggler onClick={ this.toggle } />
          <Collapse isOpen={ this.state.isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Cadastrar Agência</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Cadastrar Aparelhos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Listar Aparelhos</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      );
  }
}

export default Header;


