import React from "react";
import Display from "./Display";
import Numpad from "./Numpad";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ""
    };
  }

  compute = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  clear = () => {
    this.setState({
      result: ""
    });
  };

  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  onClick = e => {
    if (e === "C") {
      this.clear();
    } else if (e === "=") {
      this.compute();
    } else if (e === "del") {
      this.delete();
    } else {
      this.setState({
        result: this.state.result + e
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.result} />
        <Numpad onClick={this.onClick} />
      </div>
    );
  }
}
