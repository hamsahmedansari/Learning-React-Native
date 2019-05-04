import React from "react";
import { Button, StyleSheet, View } from "react-native";

const task3 = () => {
  const showAlert = () => {
    alert("button is Press");
  };
  return (
    <View style={[styles.container]}>
      <Button
        onPress={showAlert}
        style={styles.horizontal}
        title="Show Alert"
        color="#841584"
        accessibilityLabel="Alert about this purple button"
      />
      <Button
        onPress={showAlert}
        style={styles.horizontal}
        title="Show Alert From Disabled"
        color="#FFC107"
        disabled={true}
        accessibilityLabel="Disabled Button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    margin: 5
  }
});

export default task3;
