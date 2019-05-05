import React from "react";
import { View, ImageBackground, Text } from "react-native";
const task7 = () => {
  return (
    <View>
      <ImageBackground
        blurRadius={1}
        resizeMode="center"
        source={{
          uri: `https://picsum.photos/200/300?random=${Math.floor(
            Math.random() * (100 - 0) + 1 + 1
          )}`
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Text>Inside</Text>
      </ImageBackground>
    </View>
  );
};

export default task7;
