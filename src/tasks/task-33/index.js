import React, { Component } from "react";
import { View, Button, BackAndroid } from "react-native";

class task33 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Button
          title="Exist this App"
          onPress={() => {
            // alert("Ready To Exist");
            BackAndroid.exitApp();
          }}
        />
      </View>
    );
  }
}

export default task33;
