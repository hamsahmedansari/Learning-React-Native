import React, { Component } from "react";
import { View, ListView, Text } from "react-native";

class index extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        "row 1",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2",
        "row 2"
      ])
    };
  }
  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

export default index;
