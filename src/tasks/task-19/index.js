import React, { Component } from "react";
import { ScrollView, Text } from "react-native";

class task19 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView
        contentContainerStyle={{ flex: 1, padding: 20, alignItems: "center" }}
      >
        <Text>I am Text</Text>
        <Text style={{ fontWeight: "bold" }}>
          I am bold
          <Text style={{ color: "red" }}>and red</Text>
        </Text>
        <Text selectable={true}>Select me</Text>
        <Text accessibilityHint="i an iron man">Hint</Text>
        <Text numberOfLines={2}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
        <Text numberOfLines={1} ellipsizeMode={"head"}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
        <Text
          onLongPress={() => alert("Long Press")}
          onPress={() => alert("Short Press")}
        >
          Press me Long / Short
        </Text>
      </ScrollView>
    );
  }
}

export default task19;
