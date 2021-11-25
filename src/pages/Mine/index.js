import { Grid } from "antd-mobile/es/components/grid/grid";
import React, { Component } from "react";
import MyGrid from "../../components/Grid";
import UserPanel from "../../components/UserPanel";
export default class Mine extends Component {
  render() {
    return (
      <div>
        <UserPanel />
        <MyGrid />
      </div>
    );
  }
}
