import React, {Component} from "react";
import MyGrid from "../../components/Grid";
import UserPanel from "../../components/UserPanel";
import './index.scss'
export default class Mine extends Component {
  render() {
    return (
      <div id="mine" className='w100'>
        <UserPanel />
        <MyGrid />
      </div>
    );
  }
}
