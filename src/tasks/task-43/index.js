import React, { Component } from "react";
import { Text, View, PixelRatio } from "react-native";

class task43 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const pixelDensity = PixelRatio.get().toFixed(1);
    const device =
      pixelDensity <= 1
        ? "mdpi Android devices"
        : pixelDensity <= 1.5
        ? "hdpi Android devices"
        : pixelDensity <= 2
        ? "xhdpi Android devices"
        : pixelDensity <= 3
        ? "xxhdpi Android devices"
        : pixelDensity <= 3.5
        ? "xxxhdpi Android devices"
        : "not found";

    const fontScale = PixelRatio.getFontScale();
    return (
      <View>
        <Text>
          Pixel Density is
          <Text style={{ fontWeight: "bold" }}>{pixelDensity}</Text>
        </Text>
        <Text>
          Device is
          <Text style={{ fontWeight: "bold", textTransform: "capitalize" }}>
            {" " + device}
          </Text>
        </Text>

        <Text>
          Device Font Size is
          <Text style={{ fontWeight: "bold", textTransform: "capitalize" }}>
            {" " + fontScale}
          </Text>
        </Text>
      </View>
    );
  }
}

export default task43;
