import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from "react-native";

import ListItem from "./components/listitem";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFiled: "",
      todos: [
        {
          bg: "#FF4081",
          id: "1556884670488",
          title: "T"
        },
        {
          bg: "#C2185B",
          id: "1556884675366",
          title: "Rest"
        },
        {
          bg: "#D32F2F",
          id: "1556884677320",
          title: "Vaba"
        },
        {
          bg: "#AFB42B",
          id: "1556884678495",
          title: "Vabaa"
        },
        {
          bg: "#616161",
          id: "1556884679650",
          title: "Vabaaa"
        },
        {
          bg: "#795548",
          id: "1556884681059",
          title: "Vabaaaz"
        },
        {
          bg: "#616161",
          id: "1556884682246",
          title: "Vabaaazs"
        },
        {
          bg: "#009688",
          id: "1556884683595",
          title: "Vabaaazsssss"
        },
        {
          bg: "#FFA000",
          id: "1556884685040",
          title: "Vabaaazsssssvbsh"
        },
        {
          bg: "#E64A19",
          id: "1556884688410",
          title: "Vau"
        },
        {
          bg: "#FF9800",
          id: "1556884691986",
          title: "P"
        },
        {
          bg: "#8BC34A",
          id: "1556884696919",
          title: "Us"
        },
        {
          bg: "#FF4081",
          id: "1556884703475",
          title: " Shs"
        },
        {
          bg: "#FFEB3B",
          id: "1556884707578",
          title: "Sysb"
        }
      ]
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
          id: String(new Date().getTime()),
          title: textFiled,
          bg: colors[random]
        }
      ],
      textFiled: ""
    }));
  };
  handelDeleteTodos = id => {
    if (!id.length) return false;
    const { todos } = this.state;
    let oldTodo = todos.find(todo => todo.id === id);
    let newTodos = todos.filter(todo => todo !== oldTodo);
    this.setState({
      todos: newTodos
    });
    alert(`Successfully Delete '${oldTodo.title}' !!!`);
  };
  render() {
    const { textFiled, todos } = this.state;
    // console.log(this.state);

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Task 1 - Todo App</Text>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.textFiled}
            placeholder="Add Task To List"
            value={textFiled}
            onChangeText={text => this.handleChangeTextFiled(text)}
          />
          <Button
            title="Added"
            // color="#841584"
            accessibilityLabel="Add to List"
            onPress={this.handleAddTodos}
          />
        </View>
        <ScrollView style={{ width: "100%" }}>
          {todos.map((todo, i) => (
            <ListItem
              todo={todo}
              index={i}
              key={i}
              delete={this.handelDeleteTodos}
            />
          ))}
        </ScrollView>
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
