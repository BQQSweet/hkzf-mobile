import React, { Component } from "react";
import "./index.scss";
export default class GridItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div id="grid_item">
        {data.icon}
        <div className="name">{data.name}</div>
      </div>
    );
  }
}
