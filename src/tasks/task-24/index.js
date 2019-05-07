import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";

class task24 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => alert("you just Click me")}>
          <Text style={{ borderWidth: 2, borderColor: "red", padding: 20 }}>
            Click Me !!!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default task24;
