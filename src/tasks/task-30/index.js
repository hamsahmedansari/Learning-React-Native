import React from "react";
import { Button, StyleSheet, View, Alert } from "react-native";

const task30 = () => {
  return (
    <View style={[styles.container]}>
      <Button
        onPress={() => {
          Alert.alert("I am Heading", "I am Message");
        }}
        style={styles.horizontal}
        title="Simple Alert"
        color="#841584"
        accessibilityLabel="Alert about this purple button"
      />
      <Button
        onPress={() => {
          Alert.alert("I am Heading", "I am Message", [
            {
              text: "Cancel",
              onPress: () => console.log("alert is cancel"),
              style: "cancel"
            },
            {
              text: "Ok",
              onPress: () => console.log("alert is Ok")
            },
            { text: "bla..", onPress: () => console.log("alert is bla..") }
          ]);
        }}
        style={styles.horizontal}
        title="Advance Alert"
        color="#d05ce3"
        accessibilityLabel="Alert about this purple button"
      />
      <Button
        onPress={() => {
          Alert.alert(
            "I am Heading",
            "I am Message",
            [
              {
                text: "Cancel",
                onPress: () => console.log("alert is cancel"),
                style: "cancel"
              },
              {
                text: "Ok",
                onPress: () => console.log("alert is Ok")
              }
            ],
            { cancelable: false }
          );
        }}
        style={styles.horizontal}
        title="Advance Alert Cant Back "
        color="#9c4dcc"
        accessibilityLabel="Alert about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    justifyContent: "space-evenly",
    padding: 10
  },
  horizontal: {
    flexDirection: "row",
    padding: 10,
    marginTop: 10
  }
});

export default task30;
