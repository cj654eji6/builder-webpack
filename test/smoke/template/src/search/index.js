"use strict";

import React from "react";
import ReactDOM from "react-dom";
import logo from "./images/logo.svg";
import largeNumber from "large-number";
import "./search.less";

class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null
    };
  }
  loadComponent() {
    import("./text.js").then(Text => {
      this.setState({
        Text: Text.default
      });
    });
  }
  render() {
    const { Text } = this.state;
    const addResult = largeNumber("999", "1");
    return (
      <div className="search-text">
        {Text ? <Text /> : null} Search Text Hello {addResult}
        <img src={logo} onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
