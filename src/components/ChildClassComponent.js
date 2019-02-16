import React, { Component } from "react";
class ChildClassComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return <div>{this.props.msg}</div>;
  }
}

export default ChildClassComponent;
