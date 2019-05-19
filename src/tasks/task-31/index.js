import React, { Component } from "react";
import { View, AppState, Text } from "react-native";

class task31 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState
    };
  }

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }
  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("====================================");
      console.log("App has come to the foreground!");
      console.log("====================================");
    }
    this.setState({ appState: nextAppState });
  };
  render() {
    return <Text>Current state is: {this.state.appState}</Text>;
  }
}

export default task31;
