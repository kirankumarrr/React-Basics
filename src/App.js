import React, { Component } from "react";
import FunComp from "./components/funcomponent";
import ChildClassComponent from "./components/ChildClassComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "Parent defined msg"
    };
  }
  render() {
    return (
      <div>
        <div>
          <FunComp msg={this.state.a} name="Dev" />
          <ChildClassComponent msg={this.state.a} name="Dev" />
        </div>
      </div>
    );
  }
}

export default App;
