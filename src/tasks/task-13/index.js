import React, { Component } from "react";
import { StyleSheet, View, ListView, RefreshControl, Text } from "react-native";
class task13 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      cars: [
        { name: "Datsun", color: "White" },
        { name: "Camry", color: "Green" }
      ]
    };
  }
  componentWillMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.cars)
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          refreshControl={this._refreshControl()}
          dataSource={this.state.dataSource}
          renderRow={car => this._renderListView(car)}
        />
      </View>
    );
  }

  _renderListView(car) {
    return (
      <View style={styles.listView}>
        <Text>{car.name}</Text>
        <Text>{car.color}</Text>
      </View>
    );
  }

  _refreshControl() {
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={() => this._refreshListView()}
      />
    );
  }

  _refreshListView() {
    //Start Rendering Spinner
    this.setState({ refreshing: true });
    const cars = [...this.state.cars];
    cars.push({ name: "Fusion", color: "Black" });
    //Updating the dataSource with new data
    const dataSource = this.state.dataSource.cloneWithRows(cars);
    this.setState({
      dataSource,
      cars
    });
    this.setState({ refreshing: false }); //Stop Rendering Spinner
  }
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#dddddd",
    height: 70
  }
});

export default task13;
