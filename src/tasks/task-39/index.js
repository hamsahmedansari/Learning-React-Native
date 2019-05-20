import React, { Component } from "react";
import { ScrollView, Image } from "react-native";

class task39 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <Image
          source={{
            uri: "https://lovethynerd.com/wp-content/uploads/2019/04/Stark0.jpg"
          }}
          style={{ margin: 5, width: 300, height: 200 }}
        />
        <Image
          source={{
            uri: "https://lovethynerd.com/wp-content/uploads/2019/04/Stark0.jpg"
          }}
          style={{ margin: 5, width: 300, height: 200 }}
          borderTopRightRadius={30}
          borderTopLeftRadius={30}
          borderBottomLeftRadius={30}
          borderBottomRightRadius={30}
        />

        <Image
          source={{
            uri: "https://lovethynerd.com/wp-content/uploads/2019/04/Stark0.jpg"
          }}
          style={{ margin: 5, width: 300, height: 200 }}
          borderRadius={50}
        />
        <Image
          source={{
            uri: "https://lovethynerd.com/wp-content/uploads/2019/04/Stark0.jpg"
          }}
          style={{ margin: 5, width: 300, height: 200 }}
          borderWidth={5}
          borderColor="red"
        />
        <Image
          source={{
            uri: "https://lovethynerd.com/wp-content/uploads/2019/04/Stark0.jpg"
          }}
          style={{ margin: 5, width: 300, height: 200 }}
          opacity={0.5}
        />
      </ScrollView>
    );
  }
}

export default task39;
