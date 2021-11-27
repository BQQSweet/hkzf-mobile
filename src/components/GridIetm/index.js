import React, { Component } from "react";
import "./index.scss";
export default class GridItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div id="grid_item">
        <div className="icon circle">{data.icon}</div>
        <div className="name mt6">{data.name}</div>
      </div>
    );
  }
}
