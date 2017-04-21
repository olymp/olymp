import React, { Component } from "react";
import './logo.less';

export default class Logo extends Component {
  static defaultProps = {
    title: 'OP Zentrum',
    text: 'Im GesundheitsZentrum',
  }

  render() {
    const { title, text, icon, color } = this.props;

    if (icon) {
      return (
        <div className="logo-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 41 41" version="1.1">
            <g transform="scale(1.5)">
              <path
                style={{ fill: color }}
                className="logo-big"
                d="M23.9999995 24 L24 2.7 C24 2.7 23.3 0.7 21.9 1 C18.4139693 1.9 12 4 8.2 8 C4.5754908 11.8 1.7 18.9 1 22.3 C0.709504296 24.1 3.1 24 3.1 24 L23.9999995 24 Z" />
              <path
                d="M0 0.2 L0 9 C0 9 0.3 9.8 0.9 9.6 C2.4 9.3 5.2 8.4 6.8 6.8 C8.3 5.2 9.6 2.3 9.8 0.9 C10 0.2 9 0.2 9 0.2 L0 0.2 Z"
                className="logo-small"
              />
            </g>
          </svg>
        </div>
      );
    }
    return (
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="250px" height="41px" viewBox="0 0 220 41" version="1.1">
          <g transform="scale(1.5)">
            <path
              style={{ fill: color }}
              className="logo-big"
              d="M23.9999995 24 L24 2.7 C24 2.7 23.3 0.7 21.9 1 C18.4139693 1.9 12 4 8.2 8 C4.5754908 11.8 1.7 18.9 1 22.3 C0.709504296 24.1 3.1 24 3.1 24 L23.9999995 24 Z" />
            <path
              d="M0 0.2 L0 9 C0 9 0.3 9.8 0.9 9.6 C2.4 9.3 5.2 8.4 6.8 6.8 C8.3 5.2 9.6 2.3 9.8 0.9 C10 0.2 9 0.2 9 0.2 L0 0.2 Z"
              className="logo-small"
            />
            <text className="logo-title">
              <tspan x="31" y="11">{title}</tspan>
            </text>
            <text className="logo-sub" style={{ fill: color }}>
              <tspan x="31" y="22">{text}</tspan>
            </text>
          </g>
        </svg>
      </div>
    );
  }
}
