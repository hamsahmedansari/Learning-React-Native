import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

class task26 extends Component {
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
      <View style={{ padding: 10, borderWidth: 2, borderColor: "red" }}>
        <Text>I am GrantParent View</Text>
        <View style={{ padding: 10, borderWidth: 2, borderColor: "green" }}>
          <Text>I am Parent View</Text>
          <View style={{ padding: 10, borderWidth: 2, borderColor: "pink" }}>
            <Text>I am Child View</Text>
          </View>
        </View>
        <View
          style={{ padding: 10, borderWidth: 2, borderColor: "yellow" }}
          onStartShouldSetResponder={() => true}
          onResponderReject={() => this._updateLog("onResponderReject")}
          onResponderRelease={() => this._updateLog("onResponderRelease")}
          onResponderTerminate={() => this._updateLog("onResponderTerminate")}
          onStartShouldSetResponderCapture={() =>
            this._updateLog("onStartShouldSetResponderCapture")
          }
          onResponderGrant={() => this._updateLog("onResponderGrant")}
          onResponderMove={() => this._updateLog("onResponderMove")}
        >
          <Text>Responder</Text>
        </View>
        <ScrollView
          style={{
            padding: 10,
            borderWidth: 4,
            margin: 5,
            borderColor: "orange"
          }}
        >
          <Text style={{ fontSize: 20 }}>LOGS</Text>
          {this.state.logs.map(log => (
            <Text>{log}</Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default task26;
