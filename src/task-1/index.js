import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import ListItem from "./components/listitem";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFiled: "",
      todos: []
    };
  }
  handleChangeTextFiled = value => {
    this.setState({
      textFiled: value
    });
  };
  handleAddTodos = () => {
    const { textFiled } = this.state;
    if (!textFiled.length) return false;
    const colors = [
      "#C2185B",
      "#D32F2F",
      "#FF4081",
      "#7B1FA2",
      "#303F9F",
      "#0097A7",
      "#03A9F4",
      "#009688",
      "#388E3C",
      "#8BC34A",
      "#AFB42B",
      "#FFEB3B",
      "#FFA000",
      "#FF9800",
      "#E64A19",
      "#795548",
      "#616161",
      "#607D8B",
      "#212121",
      "#F5F5F5"
    ];
    const random = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
    this.setState(per => ({
      ...per,
      todos: [
        ...per.todos,
        {
          title: textFiled,
          bg: colors[random]
        }
      ],
      textFiled: ""
    }));
  };
  render() {
    const { textFiled, todos } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Task 1 - Todo App</Text>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.textFiled}
            placeholder="Add Task To List"
            value={textFiled}
            onChangeText={this.handleChangeTextFiled}
          />
          <Button
            title="Added"
            // color="#841584"
            accessibilityLabel="Add to List"
            onPress={this.handleAddTodos}
          />
        </View>
        <View style={{ width: "100%" }}>
          {todos.map((todo, i) => (
            <ListItem todo={todo} key={i} />
          ))}
        </View>
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
    padding: 10,
    paddingTop: 30
  },
  heading: { fontWeight: "bold", fontSize: 20, margin: 10 },
  textFiled: {
    width: 300,
    borderColor: "black",
    borderWidth: 1
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
