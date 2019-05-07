import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";

class task23 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <TouchableNativeFeedback
          onPress={() => alert("you just Click me")}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <Text style={{ borderWidth: 2, borderColor: "red", padding: 20 }}>
            Click Me
          </Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default task23;
