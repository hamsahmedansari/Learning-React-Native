import React, { Component } from "react";
import { View, StatusBar, Text } from "react-native";

class task17 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // For Extra Spacing
      // import { Platform } from "react-native";
      // import { SafeAreaView } from "react-navigation";
      // if (Platform.OS === "android") {
      //   SafeAreaView.setStatusBarHeight(0);
      // }
      // app.json
      // "androidStatusBar": {
      //   "barStyle": "light-content",
      //   "backgroundColor": "#F44336"
      // }

      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text>Status bar Color Change</Text>
      </View>
    );
  }
}

export default task17;
