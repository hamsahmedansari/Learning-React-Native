import React, { Component } from "react";
import { View, ToolbarAndroid, StyleSheet } from "react-native";

class task21 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onActionSelected = position => {
    if (position === 0) {
      alert("setting");
    }
    if (position === 1) {
      alert("second option");
    }
    if (position === 2) alert("Visible is clicked");
  };
  render() {
    return (
      <View>
        <ToolbarAndroid
          style={styles.toolbar}
          title="Test Me"
          subtitle="i am sub"
          subtitleColor="red"
          //   navIcon={{
          //     uri:
          //       "https://99designs-blog.imgix.net/wp-content/uploads/2017/04/attachment_82290822-e1492536097660.png?auto=format&q=60&fit=max&w=930"
          //   }}
          onActionSelected={this.onActionSelected}
          titleColor="pink"
          actions={[
            { title: "more Details", show: "never" },
            { title: "Second Option", show: "never" },
            { title: "Visible", show: "always" }
          ]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "#2196F3",
    height: 56,
    alignSelf: "stretch"
  }
});

export default task21;
