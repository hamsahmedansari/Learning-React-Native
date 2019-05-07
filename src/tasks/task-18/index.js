import React, { Component } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

class task18 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    };
  }
  _handleChangeSwitch = pram => {
    this.setState({
      value: pram
    });
  };
  render() {
    return (
      <View style={style.container}>
        <Switch
          onValueChange={this._handleChangeSwitch}
          value={this.state.value}
        />
        <Switch
          disabled={true}
          onValueChange={this._handleChangeSwitch}
          value={this.state.value}
        />
        <Switch
          thumbColor="pink"
          onValueChange={this._handleChangeSwitch}
          value={this.state.value}
        />
        <Switch
          tintColor="pink"
          onValueChange={this._handleChangeSwitch}
          value={this.state.value}
        />
        <Switch
          trackColor={{ false: "red", true: "green" }}
          onValueChange={this._handleChangeSwitch}
          value={this.state.value}
        />
        <Text>{String(this.state.value)}</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100
  }
});

export default task18;
