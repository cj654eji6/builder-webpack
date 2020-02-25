"use strict";

// import React from "react";
// import logo from "./images/logo.svg";
// import largeNumber from "large-number";
// import "./search.less";

const React = require("react");
const largeNumber = require("large-number");
const logo = require("./images/logo.svg");
require("./search.less");

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
        <img src={logo.default} onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}

module.exports = <Search></Search>;
