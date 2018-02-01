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
        <Navbar className="border border-dark border-top-0 border-right-0 border-left-0 pr-2 pl-0" style={ { fontSize: '0.8rem', fontWeight: 'bold' } }>
          <Nav className="ml-auto" onClick={ this.handleClick } selectedKeys={ [this.state.isActive] }>
            <NavItem key="home">
              <NavLink href="/" className="text-dark">HOME</NavLink>
            </NavItem>
            <NavItem key="sobre">
              <NavLink href="/" className="text-dark">SOBRE</NavLink>
            </NavItem>
            <NavItem key="simulador">
              <NavLink href="/" className="text-dark">SIMULADOR</NavLink>
            </NavItem>
            <NavItem key="resultado">
              <NavLink href="/" className="text-dark">RESULTADO</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
      );
  }
}

export default Header;


