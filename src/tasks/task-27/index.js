import React, { Component } from "react";
import { View, Text, ViewPagerAndroid, StyleSheet } from "react-native";

class task27 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      //   <View>
      <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
        <View style={styles.pageStyle} key="1">
          <Text>First page</Text>
        </View>
        <View style={styles.pageStyle} key="2">
          <Text>Second page</Text>
        </View>
      </ViewPagerAndroid>
      //   </View>
    );
  }
}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: "center",
    padding: 20
  }
});
export default task27;
