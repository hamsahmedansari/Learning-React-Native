import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class task45 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text style={style.text}>I am some Text</Text>
        <View style={style.box} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  text: {
    margin: 10,
    color: "pink",
    textAlign: "center"
  },
  box: {
    width: 100,
    height: 100,
    margin: 40,
    backgroundColor: "red"
  }
});

export default task45;
