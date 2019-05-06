import React, { Component } from "react";
import { View, Slider } from "react-native";

class task16 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 60
    };
  }
  _changeSlider = val => {
    this.setState({
      value: val
    });
  };
  render() {
    return (
      <View>
        <Slider
          maximumValue={100}
          minimumValue={0}
          thumbTintColor="red"
          onSlidingComplete={() => alert(this.state.value)}
          onValueChange={this._changeSlider}
          value={this.state.value}
        />
      </View>
    );
  }
}

export default task16;
