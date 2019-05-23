import React, { Component } from "react";
import { View, Text, Button, TimePickerAndroid } from "react-native";

class task47 extends Component {
  constructor(props) {
    super(props);
    this.state = { time: "" };
  }
  _handelTime = async (mode = "default") => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM',
        mode
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        this.setState({
          time: `${minute}min and ${hour} hours is selected`
        });
      } else {
        alert("You Dismissed Dialog");
      }
    } catch (error) {
      alert("Got Some Error");
      console.log(error);
    }
  };
  render() {
    return (
      <View>
        <Button
          title="Get Time Default"
          onPress={() => this._handelTime("default")}
          style={{ margin: 50 }}
        />
        <Button
          title="Get Time Spinner"
          onPress={() => this._handelTime("spinner")}
          style={{ margin: 50 }}
        />
        <Button
          title="Get Time Clock"
          onPress={() => this._handelTime("clock")}
          style={{ margin: 50 }}
        />
        <Text>{this.state.time}</Text>
      </View>
    );
  }
}

export default task47;
