import React, { Component } from 'react';
import image from '../../img/senai.svg'


class Footer extends Component {
  render() {
    return (
      <footer className="bg-blueYale text-light w-100" style={ { height: '50px', lineHeight: '50px' } }>
        <p className="ml-4 d-inline-block">© Desenvolvido por</p>
        <img src={ `${image}` } alt="SENAI" style={ { width: '70px', height: '40px' } } className="mx-1 pb-1"/>
        <p className="d-inline-block">São Paulo</p>
      </footer>
      );
  }
}

export default Footer;



