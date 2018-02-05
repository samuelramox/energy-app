import React, { Component } from 'react';
import './index.css'


class Switch extends Component {
  render() {
    return (
      <label className="switch">
        <input type="checkbox" />
        <span className="slider">
                <div className="switchTextLeft">SIM</div>
                <div className="switchTextRight">NAO</div>
              </span>
      </label>
      );
  }
}

export default Switch
