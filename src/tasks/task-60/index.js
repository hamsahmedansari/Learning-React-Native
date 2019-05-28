import React, { Component } from "react";
import { ScrollView, Text, Image } from "react-native";
import { Asset, AppLoading } from "expo";

class task60 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  _cacheResourcesAsync = async () => {
    const images = [
      require("../../../assets/1.png"),
      require("../../../assets/2.png"),
      require("../../../assets/3.png")
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => {
            //   setTimeout(() => {
            this.setState({ isReady: true });
            //   }, 3000);
          }}
          onError={console.warn}
        />
      );
    }

    return (
      <ScrollView style={{ flex: 1 }}>
        <Image source={require("../../../assets/1.png")} />
        <Image source={require("../../../assets/2.png")} />
        <Image source={require("../../../assets/3.png")} />
      </ScrollView>
    );
  }
}

export default task60;
