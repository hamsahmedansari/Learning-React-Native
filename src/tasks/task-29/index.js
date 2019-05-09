import React, { Component } from "react";
import { WebView, ActivityIndicator } from "react-native";

class task29 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: false
    };
  }
  render() {
    return (
      <WebView
        source={{ uri: "https://github.com/hamsahmedansari" }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default task29;
