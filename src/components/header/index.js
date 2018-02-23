import React, { Component } from 'react';
import PropTypes from 'prop-types'
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
          <Nav className="ml-auto" onClick={ this.handleClick } selectedkey={ [this.state.active] }>
            <NavItem key="home">
              <NavLink href="/" className="text-dark">HOME</NavLink>
            </NavItem>
            <NavItem key="sobre">
              <NavLink href="/sobre" className="text-dark">SOBRE</NavLink>
            </NavItem>
            <NavItem key="simulador">
              <NavLink href="/simulador" className="text-dark">SIMULADOR</NavLink>
            </NavItem>
            <NavItem key="resultado">
              <NavLink href="/resultado" className="text-dark">RESULTADO</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
      );
  }
}


Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
// pass in custom element to use
}

export default Header;
