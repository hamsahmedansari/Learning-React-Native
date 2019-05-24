import React, { Component } from "react";
import { View, Text } from "react-native";
import { Font } from "expo";

class task53 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }
  componentDidMount = async () => {
    await Font.loadAsync({
      "Custom-Indie_Flower": require("../../../assets/fonts/Indie_Flower/IndieFlower.ttf")
    });
    this.setState({
      fontLoaded: true
    });
  };
  render() {
    if (!this.state.fontLoaded)
      return (
        <View>
          <Text>Loading Fonts</Text>
        </View>
      );
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 56, fontFamily: "Custom-Indie_Flower" }}>
          Hello, world!
        </Text>
      </View>
    );
  }
}

export default task53;
