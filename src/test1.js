import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test1</Text>
        <Button
          title="Go to Test"
          onPress={() => this.props.navigation.navigate("test")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
