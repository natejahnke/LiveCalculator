import React from "react";

const Numpad = props => (
  <div className="grid-container">
    <button
      className="clear"
      name="C"
      onClick={e => props.onClick(e.target.name)}
    >
      C
    </button>
    <button
      className="delete"
      name="del"
      onClick={e => props.onClick(e.target.name)}
    >
      del
    </button>
    <button
      className="divide"
      name="/"
      onClick={e => props.onClick(e.target.name)}
    >
      /
    </button>

    <button
      className="nine"
      name="9"
      onClick={e => props.onClick(e.target.name)}
    >
      9
    </button>
    <button
      className="eight"
      name="8"
      onClick={e => props.onClick(e.target.name)}
    >
      8
    </button>
    <button
      className="seven"
      name="7"
      onClick={e => props.onClick(e.target.name)}
    >
      7
    </button>
    <button
      className="multiply"
      name="*"
      onClick={e => props.onClick(e.target.name)}
    >
      x
    </button>

    <button
      className="six"
      name="6"
      onClick={e => props.onClick(e.target.name)}
    >
      6
    </button>
    <button
      className="five"
      name="5"
      onClick={e => props.onClick(e.target.name)}
    >
      5
    </button>
    <button
      className="four"
      name="4"
      onClick={e => props.onClick(e.target.name)}
    >
      4
    </button>
    <button
      className="minus"
      name="-"
      onClick={e => props.onClick(e.target.name)}
    >
      -
    </button>

    <button
      className="three"
      name="3"
      onClick={e => props.onClick(e.target.name)}
    >
      3
    </button>
    <button
      className="two"
      name="2"
      onClick={e => props.onClick(e.target.name)}
    >
      2
    </button>
    <button
      className="one"
      name="1"
      onClick={e => props.onClick(e.target.name)}
    >
      1
    </button>
    <button
      className="plus"
      name="+"
      onClick={e => props.onClick(e.target.name)}
    >
      +
    </button>

    <button
      className="decimal"
      name="."
      onClick={e => props.onClick(e.target.name)}
    >
      .
    </button>
    <button
      className="zero"
      name="0"
      onClick={e => props.onClick(e.target.name)}
    >
      0
    </button>
    <button
      className="equals"
      name="="
      onClick={e => props.onClick(e.target.name)}
    >
      =
    </button>
  </div>
);

export default Numpad;
