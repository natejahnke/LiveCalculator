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

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp);
  }

  //   Math function
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

  //   Push Result to Firebase database array
  pushResults = () => {
    fire
      .database()
      .ref()
      // eslint-disable-next-line
      .push(this.state.result + "=" + eval(this.state.result));
  };

  calculate = async () => {
    await this.pushResults();
    await this.compute();
    await this.clear();
    await this.pullResultsList();
  };

  //   Clear calculator function
  clear = () => {
    this.setState({
      result: ""
    });
  };

  //   Delete character function
  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  //   Keyboard number keys function
  handleKeyUp = e => {
    const key = e.keyCode;

    console.log(key);

    switch (key) {
      case 97:
      case 49:
        this.setState({
          result: this.state.result + "1"
        });
        break;
      case 98:
      case 50:
        this.setState({
          result: this.state.result + "2"
        });
        break;
      case 99:
      case 51:
        this.setState({
          result: this.state.result + "3"
        });
        break;
      case 100:
      case 52:
        this.setState({
          result: this.state.result + "4"
        });
        break;
      case 101:
      case 53:
        this.setState({
          result: this.state.result + "5"
        });
        break;
      case 102:
      case 54:
        this.setState({
          result: this.state.result + "6"
        });
        break;
      case 103:
      case 55:
        this.setState({
          result: this.state.result + "7"
        });
        break;
      case 104:
      case 56:
        this.setState({
          result: this.state.result + "8"
        });
        break;
      case 105:
      case 57:
        this.setState({
          result: this.state.result + "9"
        });
        break;
      case 96:
      case 48:
        this.setState({
          result: this.state.result + "0"
        });
        break;
      case 13:
        this.calculate();
        break;
      case 187:
      case 107:
        this.setState({
          result: this.state.result + "+"
        });
        break;
      case 8:
      case 46:
        this.delete();
        break;
      case 67:
        this.clear();
        break;
      default:
        break;
    }
  };

  //   Number key button click function
  handleonClick = e => {
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

  //   Read results from Firebase database and push to state array
  pullResultsList = () => {
    this.setState({
      resultsList: []
    });
    let messagesRef = fire
      .database()
      .ref()
      .orderByKey()
      .limitToLast(10);

    messagesRef.on("child_added", snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };

      this.setState({ resultsList: [message].concat(this.state.resultsList) });
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="header">Nate's Calculator</div>
        <div className="container">
          <div className="calculator-container">
            <div className="calculator">
              <Results result={this.state.result} />
              <Numpad onClick={this.handleonClick} />
            </div>
          </div>
          <div className="list">
            {this.state.resultsList.slice(0, 10).map((list, index) => (
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
