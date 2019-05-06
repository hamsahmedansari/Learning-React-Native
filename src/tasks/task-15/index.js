import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SectionList,
  Text,
  Platform,
  Alert
} from "react-native";
class task15 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      A: ["Apple", "Apricot", "Avocado"],
      B: ["Banana", "Blackberry", "Blackcurrant", "Blueberry", "Boysenberry"],
      C: ["Cherry", "Coconut"]
    };
  }
  _getSectionListItem = item => {
    Alert.alert(item);
  };
  render() {
    return (
      <View>
        <SectionList
          sections={[
            { title: "Fruits Name From A", data: this.state.A },

            { title: "Fruits Name From B", data: this.state.B },

            { title: "Fruits Name From C", data: this.state.C }
          ]}
          renderSectionHeader={({ section }) => (
            <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
          )}
          renderItem={({ item }) => (
            <Text
              style={styles.SectionListItemStyle}
              onPress={() => this._getSectionListItem(item)}
            >
              {item}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SectionHeaderStyle: {
    backgroundColor: "#CDDC39",
    fontSize: 20,
    padding: 5,
    color: "#fff"
  },

  SectionListItemStyle: {
    fontSize: 15,
    padding: 5,
    color: "#000",
    backgroundColor: "#F5F5F5"
  }
});
export default task15;
