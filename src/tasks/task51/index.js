import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { AppLoading } from "expo";
import { cacheFonts, cacheImages } from "./helper";

class task51 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      require("../../../assets/hams.jpg")
    ]);

    const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <View>
        <Text>Hello world, this is my app.</Text>
        <Image
          source={{
            uri:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }}
        />
      </View>
    );
  }
}

export default task51;
