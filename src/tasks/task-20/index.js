import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";

class task20 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "",
      text2:
        "It is a long established fact that a \n reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    };
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
        <Text>Simple Text</Text>
        <TextInput
          value={this.state.text1}
          style={{
            width: "100%",
            height: 40,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={text1 => this.setState({ text1 })}
        />
        <Text>Multiline</Text>
        <View
          style={{
            width: "100%",
            borderBottomColor: "#000000",
            borderBottomWidth: 1,
            borderColor: "gray",
            borderWidth: 1
          }}
        >
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={text2 => this.setState({ text2 })}
            value={this.state.text2}
            editable={true}
            maxLength={40}
          />
        </View>
        <Text>allow Font Scaling Text</Text>
        <TextInput
          value={this.state.text3}
          allowFontScaling={false}
          style={{
            width: "100%",
            height: 40,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={text3 => this.setState({ text3 })}
        />
      </View>
    );
  }
}

export default task20;
