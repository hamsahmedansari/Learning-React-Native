import React, { Component } from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";

class task25 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
  }
  _updateLog = log => {
    const logs = [...this.state.logs];
    logs.push(log);
    this.setState({ logs });
  };
  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onBlur={() => this._updateLog("onBlur")}
          onFocus={() => this._updateLog("onFocus")}
          onLongPress={() => this._updateLog("onLongPress")}
          onPress={() => this._updateLog("onPress")}
          onPressIn={() => this._updateLog("onPressIn")}
          onPressOut={() => this._updateLog("onPressOut")}
        >
          <Text style={{ borderWidth: 2, borderColor: "red", padding: 20 }}>
            Click Me !!!
          </Text>
        </TouchableWithoutFeedback>

        {this.state.logs.map(log => (
          <Text>{log}</Text>
        ))}
      </View>
    );
  }
}

export default task25;
