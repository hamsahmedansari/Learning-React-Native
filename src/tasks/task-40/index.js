import React, { Component } from "react";
import { Keyboard, TextInput } from "react-native";

class task40 extends Component {
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    alert("Keyboard Shown");
  }

  _keyboardDidHide() {
    alert("Keyboard Hidden");
  }

  render() {
    return (
      <TextInput placeholder="edit me" onSubmitEditing={Keyboard.dismiss} />
    );
  }
}

export default task40;
