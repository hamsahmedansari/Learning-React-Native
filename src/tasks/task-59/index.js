import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import { signInAsync, signOutAsync, getCachedAuthAsync } from "./helper";

class task59 extends Component {
  constructor(props) {
    super(props);
    this.state = { status: false };
  }
  componentDidMount = async () => {
    const auth = await getCachedAuthAsync();
    if (auth) {
      this.setState({
        status: true
      });
    } else {
      this.setState({
        status: false
      });
    }
  };
  _handelLogin = async () => {
    try {
      const auth = await signInAsync();
      console.log(auth);
      this.setState({ status: true });
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };
  _handelLogout = async () => {
    try {
      const auth = await signOutAsync(await getCachedAuthAsync());
      console.log(auth);
      this.setState({ status: false });
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };
  render() {
    return (
      <View>
        <Text>Status: {this.state.status ? "Login" : "Not Login"}</Text>
        {this.state.status ? (
          <Button title="Logout" color="red" onPress={this._handelLogout} />
        ) : (
          <Button title="Login with Google" onPress={this._handelLogin} />
        )}
      </View>
    );
  }
}

export default task59;
