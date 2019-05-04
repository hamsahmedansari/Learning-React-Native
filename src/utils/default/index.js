import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import ListItem from "./listitem";
import taskList from "../taskList";

class defaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={{ width: "100%" }}>
        {Object.keys(taskList).map((e, i) =>
          e !== "defaultScreen" ? (
            <ListItem
              navigation={this.props.navigation}
              key={i}
              title={taskList[e].title}
              index={i}
              page={e}
            />
          ) : (
            false
          )
        )}
      </ScrollView>
    );
  }
}

export default defaultPage;
