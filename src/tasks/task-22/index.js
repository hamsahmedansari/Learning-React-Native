import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";

class task22 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", padding: 10 }}>
        <TouchableHighlight onPress={() => alert("you just Click me")}>
          <Text style={{ borderWidth: 2, borderColor: "red", padding: 20 }}>
            Click Me
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default task22;
