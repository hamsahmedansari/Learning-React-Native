import React, { Component } from "react";
import { View, BackHandler, Button } from "react-native";

class task34 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  _handleBackButtonClick = () => {
    this.props.navigation.goBack(null);
    return true;
  };
  render() {
    return (
      <View>
        <Button title="Go Back" onPress={this._handleBackButtonClick} />
      </View>
    );
  }
}

export default task34;
