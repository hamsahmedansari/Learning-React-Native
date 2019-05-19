// i can handel this.data locally which enhance speed but i am doing this for learning

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  AsyncStorage,
  Button,
  TextInput,
  Text
} from "react-native";

class task32 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: ""
    };
  }
  componentDidMount = async () => {
    const data = await this._getAllItems();
    this.setState({
      data
    });
  };
  _stateUpdate = async () => {
    console.log("updating");

    const data = await this._getAllItems();
    this.setState({
      data
    });
  };
  handleChangeTextFiled = text => {
    this.setState({
      text
    });
  };
  _getAllItems = async () => {
    try {
      const temp = await AsyncStorage.getAllKeys();
      return await AsyncStorage.multiGet(temp);
    } catch (error) {
      console.log(error);

      alert("Error");
    }
  };
  _setItem = async item => {
    const { data } = this.state;
    try {
      await AsyncStorage.setItem(String(data.length), item);
    } catch (error) {
      // Error saving data
      alert("Error");
    }
  };
  _removeItem = async item => {
    try {
      await AsyncStorage.removeItem(item);
    } catch (error) {
      alert("Error");
    }
  };
  _clearAllItems = async item => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      alert("Error");
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.textFiled}
            placeholder="Add To List"
            value={this.state.text}
            onChangeText={this.handleChangeTextFiled}
          />
          <Button
            title="Add"
            onPress={() => {
              this._setItem(this.state.text).then(() => {
                this.setState(pre => ({
                  text: ""
                }));
                this._stateUpdate();
              });
            }}
          />
        </View>
        <Button
          title="Clear"
          onPress={() => {
            this._clearAllItems().then(() => {
              this._stateUpdate();
            });
          }}
        />
        <FlatList
          data={this.state.data}
          keyExtractor={(item, i) => item + i}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                this._removeItem(item[0]).then(() => {
                  this._stateUpdate();
                });
              }}
            >
              <View
                style={{
                  width: "100%",
                  padding: 10,
                  marginTop: 5
                }}
              >
                <Text>{item[1]}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

export default task32;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    paddingTop: 30
  },
  heading: { fontWeight: "bold", fontSize: 20, margin: 10 },
  textFiled: {
    width: 300,
    borderColor: "black",
    borderWidth: 1
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
