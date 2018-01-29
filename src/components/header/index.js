import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
    }

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

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      active: e.key,
    });
  }


  render() {
    return (
      <div>
        <Navbar color="transparent" className="border border-top-0 border-right-0 border-left-0 border-secondary px-0">
          <Nav className="ml-auto" onClick={ this.handleClick } selectedKeys={ [this.state.isActive] }>
            <NavItem key="home">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem key="sobre">
              <NavLink href="/">Sobre</NavLink>
            </NavItem>
            <NavItem key="simulador">
              <NavLink href="/">Simulador</NavLink>
            </NavItem>
            <NavItem key="resultado">
              <NavLink href="/">Resultado</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
      );
  }
}

export default Header;


