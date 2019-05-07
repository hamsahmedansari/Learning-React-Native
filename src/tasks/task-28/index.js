import React, { Component } from "react";
import { View, VirtualizedList, Text, Image } from "react-native";

class task28 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.list = Array(100)
      .fill()
      .map((val, idx) => {
        return { key: idx, data: idx };
      });
  }
  render() {
    return (
      <View>
        <VirtualizedList
          initialNumberToRender={20}
          windowSize={21}
          data={this.list}
          getItemCount={data => 365}
          disableVirtualization={false}
          getItem={(data, index) => data[index]}
          keyExtractor={(item, index) => {
            return item.key;
          }}
          renderItem={({ item, index }) => {
            return (
              <View style={{ height: 50 }}>
                <Text>{item.key}</Text>
              </View>
            );
          }}
          ListFooterComponent={() => {
            return (
              <View style={{ height: 50, backgroundColor: "green" }}>
                <Text>Footer</Text>
              </View>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <View style={{ height: 50, backgroundColor: "red" }}>
                <Text>Header</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default task28;
