import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";

class task37 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height
    };
  }
  render() {
    return (
      <View>
        <Text>
          Width: {this.state.width} {"\n"}
          Height: {this.state.height} {"\n"}
        </Text>
      </View>
    );
  }
}

export default task37;
