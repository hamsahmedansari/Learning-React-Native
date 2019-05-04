import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import ListItem from "./listitem";

class defaultPage extends Component {
  static navigationOptions = {
    title: "Home"
  };
  constructor(props) {
    super(props);
    this.state = {
      screens: [
        {
          title: "Todo",
          page: "task1"
        }
      ]
    };
  }
  render() {
    const { screens } = this.state;
    return (
      <ScrollView style={{ width: "100%" }}>
        {screens.map((screen, i) => (
          <ListItem
            navigation={this.props.navigation}
            key={i}
            title={screen.title}
            index={i}
            page={screen.page}
          />
        ))}
      </ScrollView>
    );
  }
}

export default defaultPage;
