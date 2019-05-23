import React, { Component } from "react";
import { View, Text } from "react-native";

class task46 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text
          style={{
            textShadowOffset: {
              width: 5,
              height: 5
            },
            fontSize: 40,
            textShadowColor: "green"
          }}
        >
          I am some text
          {"\n"}
        </Text>
        <Text
          style={{
            color: "Red",
            fontSize: 20,
            fontStyle: "italic",
            fontWeight: "bold",
            textAlign: "center",
            textDecorationLine: "line-through"
          }}
        >
          I am some text
        </Text>
      </View>
    );
  }
}

export default task46;
