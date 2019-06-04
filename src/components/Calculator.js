import React from "react";
import Results from "./Results";
import Numpad from "./Numpad";
import fire from "../firebase";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      resultsList: []
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

  pushResults = () => {
    // this.setState({
    //   resultsList: [
    //     ...this.state.resultsList,
    //     this.state.result + "=" + eval(this.state.result)
    //   ]
    // const pushCalc = fire.database().ref('results');
    // const item = this.
    fire
      .database()
      .ref()
      .push(this.state.result + "=" + eval(this.state.result));
  };

  calculate = async () => {
    await this.pushResults();
    await this.compute();
    await this.clear();
    await this.pullResultsList();
    // throw new Error("oops");
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
      this.calculate();
    } else if (e === "del") {
      this.delete();
    } else {
      this.setState({
        result: this.state.result + e
      });
    }
  };

  componentWillMount() {
    this.pullResultsList();
  }

  //   componentDidMount() {
  //     this.pullResultsList();
  //   }

  pullResultsList = () => {
    /* Create reference to messages in Firebase Database */
    this.setState({
      resultsList: []
    });
    let messagesRef = fire
      .database()
      .ref()
      .orderByKey()
      .limitToLast(10);

    messagesRef.on("child_added", snapshot => {
      /* Update React state when message is added at Firebase Database */

      let message = { text: snapshot.val(), id: snapshot.key };

      this.setState({ resultsList: [message].concat(this.state.resultsList) });
    });
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
