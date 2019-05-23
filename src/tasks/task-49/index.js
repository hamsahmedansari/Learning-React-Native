import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

class task49 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.child} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1
  },
  child: {
    flex: 1,
    backgroundColor: "blue",
    transform: [
      { perspective: 850 },
      { translateX: -Dimensions.get("window").width * 0.24 },
      { rotateY: "60deg" }
    ]
  }
});
export default task49;
