import React from "react";
import Navigation from "./src/utils/navigation";
import { Platform } from "react-native";
import { SafeAreaView } from "react-navigation";
if (Platform.OS === "android") {
  SafeAreaView.setStatusBarHeight(0);
}
export default class App extends React.Component {
  render() {
    return <Navigation />;
  }
}
