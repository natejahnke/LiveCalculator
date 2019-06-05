import React from "react";

const HistoryList = props => (
  <div className="history">
    {props.order}. {props.history}
  </div>
);

export default HistoryList;
