import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFiled: ""
    };
  }
  handleChangeTextFiled = value => {
    this.setState({
      textFiled: value
    });
  };
  render() {
    const { textFiled } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Task 1 - Todo App</Text>

        <TextInput
          style={styles.textFiled}
          placeholder="Add Task To List"
          value={textFiled}
          onChangeText={this.handleChangeTextFiled}
        />
        <Text>{textFiled}</Text>
      </View>
    );
  }
}

export default Task;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30
  },
  heading: { fontWeight: "bold", fontSize: 20 },
  textFiled: {
    width: 300
  }
});
