import React, { Component } from "react";
import { View, Button, ToastAndroid, StyleSheet } from "react-native";

class task48 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="show Basic Toast"
          color="red"
          onPress={() => {
            ToastAndroid.show(
              "A pikachu appeared nearby !",
              ToastAndroid.SHORT
            );
          }}
        />
        <Button
          title="show Basic Toast 2"
          color="yellow"
          onPress={() => {
            ToastAndroid.showWithGravity(
              "All Your Base Are Belong To Us",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
          }}
        />

        <Button
          title="show Basic Toast 2"
          color="purple"
          onPress={() => {
            ToastAndroid.showWithGravityAndOffset(
              "A wild toast appeared!",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around"
  }
});
export default task48;
