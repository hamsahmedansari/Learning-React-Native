import React, { Component } from "react";
import { View, Button, Share } from "react-native";

class task44 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _handelShare = async () => {
    try {
      const share = await Share.share(
        {
          message: "i am test body",
          title: "i am test head",
          url: "https://github.com/hamsahmedansari"
        },
        {
          dialogTitle: "react native learning demo"
        }
      );
      console.log("====================================");
      console.log(share);
      console.log("====================================");
      if (share.action === Share.sharedAction) {
        if (share.activityType) {
          // shared with activity type of result.activityType
          alert("you have share with activityType");
        } else {
          // shared
          alert("you have share");
        }
      } else if (share.action === Share.dismissedAction) {
        alert("you have dismiss");
      } else {
        alert("not found any thing");
      }
    } catch (error) {
      alert("Got Error");
    }
  };
  render() {
    return (
      <View>
        <Button title="share" color="red" onPress={this._handelShare} />
      </View>
    );
  }
}

export default task44;
