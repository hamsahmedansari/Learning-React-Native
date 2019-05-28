import React, { Component } from "react";
import { View, Button } from "react-native";
import { Amplitude } from "expo";
import api from "./api";

class task58 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Checking"
    };
  }
  componentDidMount() {
    Amplitude.initialize(api);
    Amplitude.setUserProperties({
      "i am name": "i am test"
    });
  }
  _handelLog = () => {
    Amplitude.logEvent("i am click from Amplitude");
  };
  _handelLogDetails = () => {
    Amplitude.logEventWithProperties(
      "i am click from Amplitude with detail's",
      {
        test: "test value"
      }
    );
  };
  render() {
    return (
      <View>
        <Button title="log to server" onPress={this._handelLog} />
        <Button
          title="log to server with details"
          onPress={this._handelLogDetails}
        />
      </View>
    );
  }
}

export default task58;
