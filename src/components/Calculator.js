import React from "react";
import Results from "./Results";
import Numpad from "./Numpad";
import HistoryList from "./HistoryList";
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
    } else if (e === "1" || e.keyCode === 97 || e.keyCode === 49) {
      this.setState({
        result: this.state.result + e
      });
    } else if (e === "2" || e.keyCode === 98 || e.keyCode === 50) {
      this.setState({
        result: this.state.result + e
      });
    } else if (e === "3" || e.keyCode === 99 || e.keyCode === 51) {
      this.setState({
        result: this.state.result + e
      });
    } else if (e === "4" || e.keyCode === 100 || e.keyCode === 52) {
      this.setState({
        result: this.state.result + e
      });
    } else if (e === "5" || e.keyCode === 101 || e.keyCode === 53) {
      this.setState({
        result: this.state.result + e
      });
    } else if (e === "6" || e.keyCode === 102 || e.keyCode === 54) {
      this.setState({
        result: this.state.result + e
      });
    } else if (e === "7" || e.keyCode === 103 || e.keyCode === 55) {
      this.setState({
        result: this.state.result + e
      });
    } else if (e === "8" || e.keyCode === 104 || e.keyCode === 56) {
      this.setState({
        result: this.state.result + e
      });
    } else if (e === "9" || e.keyCode === 105 || e.keyCode === 57) {
      this.setState({
        result: this.state.result + e
      });
    } else if (e === "0" || e.keyCode === 96 || e.keyCode === 48) {
      this.setState({
        result: this.state.result + e
      });
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
      <React.Fragment>
        <div className="container">
          <div className="calculator">
            <Results result={this.state.result} />
            <Numpad onClick={this.onClick} />
          </div>
          <div className="list">
            {this.state.resultsList.map((list, index) => (
              <HistoryList
                key={index + 1}
                order={index + 1}
                history={list.text}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
