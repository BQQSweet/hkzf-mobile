import React, { Component } from "react";
import "./iconfont.css";
class Star extends Component {
  render() {
    const { color } = this.props;
    return (
      <>
        <span style={{ color }} className="iconfont icon-shoucang"></span>
      </>
    );
  }
}

class House extends Component {
  render() {
    const { color } = this.props;
    return (
      <>
        <span style={{ color }} className="iconfont icon-zufang"></span>
      </>
    );
  }
}

class Record extends Component {
  render() {
    const { color } = this.props;
    return (
      <>
        <span style={{ color }} className="iconfont icon-11jilu-2"></span>
      </>
    );
  }
}

class Identify extends Component {
  render() {
    const { color } = this.props;
    return (
      <>
        <span style={{ color }} className="iconfont icon-shenfenxinxi"></span>
      </>
    );
  }
}

class User extends Component {
  render() {
    const { color } = this.props;
    return (
      <div>
        <span style={{ color }} className="iconfont icon-geren"></span>
      </div>
    );
  }
}

class Service extends Component {
  render() {
    const { color } = this.props;
    return (
      <>
        <span style={{ color }} className="iconfont icon-lianxikefu"></span>
      </>
    );
  }
}

export { Star, House, Record, Identify, User, Service };
