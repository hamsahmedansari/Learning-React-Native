import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";
import localImage from "../../../assets/hams.jpg";
const task6 = () => {
  return (
    <ScrollView
      style={{ width: "100%" }}
      contentContainerStyle={{
        // flex: 1,
        // flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Image source={localImage} borderRadius={10} style={style.image} />
      <Image source={localImage} style={style.image} />
      <Image source={localImage} blurRadius={5} style={style.image} />
      <Image
        loadingIndicatorSource={localImage}
        source={{
          uri: `https://picsum.photos/200/300?random=${Math.floor(
            Math.random() * (100 - 0) + 1 + 1
          )}`
        }}
        style={style.image}
      />
    </ScrollView>
  );
};
const style = StyleSheet.create({
  image: {
    margin: 5,
    width: 200,
    height: 200
  }
});
export default task6;
