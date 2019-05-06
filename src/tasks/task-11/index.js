import React, { Component } from "react";
import { View, Picker, Text, StyleSheet } from "react-native";

class task11 extends Component {
  state = { user: "", list: [] };
  updateUser = user => {
    this.setState({ user: user });
  };
  componentDidMount() {
    this._getList().then(d => {
      this.setState({ list: d });
    });
  }
  _getList = () => {
    return new Promise((res, rej) => {
      let array = [];
      for (let i = 0; i < 50; i++) {
        array.push(String(i));
      }
      setTimeout(() => {
        res(array);
      }, 500);
    });
  };
  render() {
    return (
      <View>
        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          {this.state.list.map(list => (
            <Picker.Item key={Number(list)} label={list} value={list} />
          ))}
        </Picker>
        <Picker
          mode="dropdown"
          prompt="from picker"
          itemStyle={{ color: "red" }}
          selectedValue={this.state.user}
          onValueChange={this.updateUser}
        >
          {this.state.list.map(list => (
            <Picker.Item key={Number(list)} label={list} value={list} />
          ))}
        </Picker>
        <Text style={styles.text}>{this.state.user}</Text>
      </View>
    );
  }
}

export default task11;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "red"
  }
});
