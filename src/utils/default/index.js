import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import ListItem from "./listitem";
import { Components, Api } from "../taskList";

class defaultPage extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            margin: 10,
            textAlign: "center",
            height: 50
          }}
        >
          Complete React Native
        </Text>
        <ScrollView
          style={{
            width: "100%",
            height: Dimensions.get("window").height - 100
          }}
        >
          {/* Components */}
          <Text style={styles.SectionHeaderStyle}>React Components</Text>

          {Object.keys(Components).map((e, i) => (
            <ListItem
              navigation={this.props.navigation}
              key={i}
              title={Components[e].title}
              index={i + 1}
              page={e}
            />
          ))}
          {/* Api */}
          <Text style={styles.SectionHeaderStyle}>React Api</Text>

          {Object.keys(Api).map((e, i) => (
            <ListItem
              navigation={this.props.navigation}
              key={i}
              title={Api[e].title}
              index={i + 1}
              page={e}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SectionHeaderStyle: {
    backgroundColor: "#9c27b0",
    fontSize: 16,
    padding: 5,
    margin: 5,
    color: "#fff"
  }
});
export default defaultPage;
