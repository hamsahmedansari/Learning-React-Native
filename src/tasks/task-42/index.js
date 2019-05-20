import React, { Component } from "react";
import { View, Text, NetInfo } from "react-native";

class task42 extends Component {
  constructor(props) {
    super(props);
    this.state = { status: false, type: "" };
  }
  async componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this._handleConnectivityChange
    );
    const status = await NetInfo.isConnected.fetch();
    const { type } = await NetInfo.getConnectionInfo();
    this.setState({
      status,
      type
    });
  }

  _handleConnectivityChange = async status => {
    const { type } = await NetInfo.getConnectionInfo();
    this.setState({
      status,
      type
    });
  };
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this._handleConnectivityChange
    );
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 20 }}>
          You are {this.state.status ? "Online" : "Offline"} {"\n"}
          You are using {this.state.type}
        </Text>
      </View>
    );
  }
}

export default task42;
