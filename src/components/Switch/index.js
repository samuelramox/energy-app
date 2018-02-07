import React, { Component } from 'react';
import './index.css'


class Switch extends Component {
  render() {
    return (
      <label className="switch">
        <input type="checkbox" />
        <div className="slider">
          <span className="switchTextLeft">SIM</span>
          <span className="switchTextRight">NAO</span>
        </div>
      </label>
      );
  }
}

export default Switch
