import React, { Component } from "react";
import { View, Image } from "react-native";

class task50 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Image source={require("../../../assets/hams.jpg")} />
      </View>
    );
  }
}

export default task50;
