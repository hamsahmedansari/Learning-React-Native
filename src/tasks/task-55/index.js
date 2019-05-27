import React, { Component } from "react";
import { View, Text, Button, AsyncStorage, Alert } from "react-native";
import { Updates } from "expo";

class task55 extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "please wait" };
  }
  _setLastStatus = async () => {
    try {
      await AsyncStorage.setItem("@LastUpdateCheck", new Date());
    } catch (error) {
      Alert.alert("Error");
      console.log(error);
    }
  };
  _getStatus = async () => {
    try {
      const temp = await AsyncStorage.getItem("@LastUpdateCheck");
      return temp;
    } catch (error) {
      Alert.alert("Error");
      console.log(error);
    }
  };
  _handelCheckUpdate = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        Alert.alert(
          "Update is Available",
          "Want to update your App",
          [
            {
              text: "Yess !!!",
              onPress: async () => {
                await Updates.fetchUpdateAsync();
                // ... notify user of update ...
                Updates.reloadFromCache();
                await this._setLastStatus();
              }
            },
            {
              text: "Nope",
              onPress: () => Alert.alert("You are an Idiot"),
              style: "cancel"
            }
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Nothing new is Available",
          "its mean developer is lazy or you can just contribute to this project"
        );
      }
    } catch (e) {
      Alert.alert("Error");
      console.log(e);
    }
  };
  componentDidMount = async () => {
    const temp = await this._getStatus();
    const status =
      temp === null
        ? `You Didn't check for update`
        : `Last Check on ${this._getDate(temp)}`;
    this.setState({ status });
  };
  _getDate = date => {
    let date1 = new Date();
    date1.setTime(date);
    let date2 = new Date();
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let result;
    if (Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) > 1) {
      result = String(Math.ceil(timeDiff / (1000 * 60 * 60 * 24))).concat(
        " days"
      );
    } else {
      if (Math.ceil(timeDiff / (1000 * 60 * 60)) > 1) {
        result = String(Math.ceil(timeDiff / (1000 * 60 * 60))).concat(
          " hours"
        );
      } else {
        if (Math.ceil(timeDiff / (1000 * 60) > 1)) {
          result = String(Math.ceil(timeDiff / (1000 * 60))).concat(" mins");
        } else {
          result = String(Math.ceil(timeDiff / 1000)).concat(" sec");
        }
      }
    }
    return result;
  };
  render() {
    return (
      <View>
        <Button title="Check for update" onPress={this._handelCheckUpdate} />

        <Text>{this.state.status}</Text>
      </View>
    );
  }
}

export default task55;
