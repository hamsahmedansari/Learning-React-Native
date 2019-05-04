import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const task2 = props => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
      <ActivityIndicator size="small" color="#00ff00" />
      <ActivityIndicator size="large" color="#0000ff" />
      <ActivityIndicator
        size="small"
        animating={false}
        hidesWhenStopped={false}
        color="#0000ff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default task2;
