import React, { Component } from "react";
import {
  View,
  DrawerLayoutAndroid,
  Text,
  Button,
  StyleSheet,
  ScrollView
} from "react-native";

class task4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
  }
  navigationView = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: "left" }}>
          I'm in the Drawer!
        </Text>
        <Button
          style={styles.horizontal}
          onPress={this.closeDrawer}
          title="Close Drawer "
          color="#03A9F4"
        />
        <ScrollView>
          {this.state.activities.length > 0 && (
            <Text style={{ margin: 10, fontSize: 14, textAlign: "center" }}>
              Recent Activity
            </Text>
          )}
          {this.state.activities.map((activity, i) => (
            <View key={i} Style={{ padding: 5, margin: 2 }}>
              <Text style={{ margin: 10, fontSize: 12, textAlign: "left" }}>
                {activity}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };
  showDrawer = () => {
    this.refs["myDrawer"].openDrawer();
  };
  closeDrawer = () => {
    this.refs["myDrawer"].closeDrawer();
  };

  onDrawerClose = () => {
    this.setState(state => ({
      ...state,
      activities: [...state.activities, "Drawer Close"]
    }));
  };
  onDrawerOpen = () => {
    this.setState(state => ({
      ...state,
      activities: [...state.activities, "Drawer Open"]
    }));
  };
  onDrawerSlide = () => {
    this.setState(state => ({
      ...state,
      activities: [...state.activities, "Drawer Slide"]
    }));
  };
  render() {
    const { activities } = this.state;
    return (
      <DrawerLayoutAndroid
        ref="myDrawer"
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this.navigationView}
        onDrawerOpen={this.onDrawerOpen}
        onDrawerClose={this.onDrawerClose}
        onDrawerSlide={this.onDrawerSlide}
        statusBarBackgroundColor="#F44336"
      >
        <View style={styles.container}>
          <Text style={{ margin: 10, fontSize: 15, textAlign: "center" }}>
            Open Drawer Of Android by Swiping from Left or Clicking blew Button
          </Text>
          <Button
            style={styles.horizontal}
            onPress={this.showDrawer}
            title="Show Drawer"
            color="#FFC107"
          />
          <ScrollView>
            {activities.length > 0 && (
              <Text style={{ margin: 10, fontSize: 14, textAlign: "center" }}>
                Recent Activity
              </Text>
            )}
            {activities.map((activity, i) => (
              <View key={i} Style={{ padding: 5, margin: 2 }}>
                <Text style={{ margin: 10, fontSize: 12, textAlign: "left" }}>
                  {activity}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    margin: 5
  }
});

export default task4;
