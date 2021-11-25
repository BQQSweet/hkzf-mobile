import React, { Component } from "react";
import "./index.scss";
export default class UserPanel extends Component {
  render() {
    return (
      <div id="UserPanel">
        <div className="backImg">
            <img src="/assets/mine_back.jpg" alt=""/>
        </div>
        <div className="panel">
          <div className="headImg"></div>
        </div>
      </div>
    );
  }
}
