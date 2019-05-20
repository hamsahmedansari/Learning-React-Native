import React, { Component } from "react";
import { Text, Clipboard, View, Button } from "react-native";

class task35 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: ""
    };
  }
  render() {
    return (
      <View>
        <Button
          title="Copy 'I am Iron Man....'"
          onPress={async () => {
            await Clipboard.setString("I am Iron Man....");
          }}
        />
        <Button
          title="Paste"
          color="#FFC107"
          onPress={async () => {
            const txt = await Clipboard.getString();
            this.setState({ txt });
          }}
        />
        <Button
          title="Clear ClipBoard"
          color="red"
          onPress={async () => {
            await Clipboard.setString("");
            this.setState({ txt: "" });
          }}
        />

        <Text>You Have Copy "{this.state.txt}"</Text>
      </View>
    );
  }
}

export default task35;
