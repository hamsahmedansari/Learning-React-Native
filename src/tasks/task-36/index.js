import React, { Component } from "react";
import { View, Button, Text, Alert, DatePickerAndroid } from "react-native";

class task36 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }
  _getDate = async (mode = "default") => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
        mode
      });
      if (action === DatePickerAndroid.dismissedAction) {
        Alert.alert("You have Cancel ", "Please do again");
        return;
      }
      this.setState({
        date: `${day} - ${month} - ${year}`
      });
    } catch ({ code, message }) {
      Alert.alert("Error");

      console.warn("Cannot open date picker", message);
    }
  };
  render() {
    return (
      <View>
        <Button onPress={() => this._getDate()} title="Open Date Dialog" />
        <Button
          onPress={() => this._getDate("calendar")}
          title="Open Date Dialog calendar"
        />
        <Button
          onPress={() => this._getDate("spinner")}
          title="Open Date Dialog spinner"
        />
        <Text>{this.state.date}</Text>
      </View>
    );
  }
}

export default task36;
