import React, { Component } from "react";
import { ScrollView, Text } from "react-native";

class task14 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView
        keyboardDismissMode="on-drag"
        onMomentumScrollBegin={() => {
          alert("scroll begin");
        }}
        onMomentumScrollEnd={() => {
          alert("scroll begin end");
        }}
        showsHorizontalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <Text style={{ fontSize: 20, margin: 10, backgroundColor: "red" }}>
          i Am Header
        </Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
        <Text style={{ fontSize: 20, margin: 10 }}> Scroll me !!!</Text>
      </ScrollView>
    );
  }
}

export default task14;
