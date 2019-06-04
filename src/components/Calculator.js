import React from "react";
import Results from "./Results";
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
        <Results result={this.state.result} />
        <Numpad onClick={this.onClick} />
      </div>
    );
  }
}
