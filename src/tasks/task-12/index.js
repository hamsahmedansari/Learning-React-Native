import React, { Component } from "react";
import { ScrollView, ProgressBarAndroid, StyleSheet } from "react-native";

class task12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }
  componentDidMount() {
    let progress = 0;
    const timer = setInterval(() => {
      if (progress === 1) {
        return clearInterval(timer);
      } else {
        progress += 0.1;
        this.setState({
          progress
        });
      }
    }, 100);
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={this.state.progress}
        />
        <ProgressBarAndroid styleAttr="Small" />
        <ProgressBarAndroid styleAttr="Large" />
        <ProgressBarAndroid styleAttr="Inverse" />
        <ProgressBarAndroid styleAttr="SmallInverse" />
        <ProgressBarAndroid styleAttr="LargeInverse" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 10
  }
});

export default task12;
