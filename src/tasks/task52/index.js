import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  Ionicons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial
} from "@expo/vector-icons";

class task52 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>
          Ionicons -> {"\n"}
          <Ionicons name="md-checkmark-circle" size={32} color="green" />
          <Ionicons name="md-mail-open" size={32} color="pink" />
        </Text>
        <Text>
          AntDesign -> {"\n"}
          <AntDesign name="stepforward" size={32} color="green" />
          <AntDesign name="wifi" size={32} color="pink" />
        </Text>
        <Text>
          Entypo -> {"\n"}
          <Entypo name="adjust" size={32} color="green" />
          <Entypo name="aircraft-take-off" size={32} color="pink" />
        </Text>
        <Text>
          EvilIcons -> {"\n"}
          <EvilIcons name="calendar" size={32} color="green" />
          <EvilIcons name="calendar" size={32} color="pink" />
        </Text>
        <Text>
          Feather -> {"\n"}
          <Feather name="activity" size={32} color="green" />
          <Feather name="alert-triangle" size={32} color="pink" />
        </Text>
        <Text>
          FontAwesome -> {"\n"}
          <FontAwesome name="glass" size={32} color="green" />
          <FontAwesome name="star-o" size={32} color="pink" />
        </Text>
        <Text>
          Foundation -> {"\n"}
          <Foundation name="web" size={32} color="green" />
          <Foundation name="widget" size={32} color="pink" />
        </Text>
        <Text>
          MaterialCommunityIcons -> {"\n"}
          <MaterialCommunityIcons
            name="MaterialCommunityIcons"
            size={32}
            color="green"
          />
          <MaterialCommunityIcons
            name="account-box-outline"
            size={32}
            color="pink"
          />
        </Text>
        <Text>
          MaterialIcons -> {"\n"}
          <MaterialIcons name="ac-unit" size={32} color="green" />
          <MaterialIcons name="access-alarm" size={32} color="pink" />
        </Text>
        <Text>
          Octicons -> {"\n"}
          <Octicons name="archive" size={32} color="green" />
          <Octicons name="arrow-right" size={32} color="pink" />
        </Text>
        <Text>
          SimpleLineIcons -> {"\n"}
          <SimpleLineIcons name="people" size={32} color="green" />
          <SimpleLineIcons name="user-following" size={32} color="pink" />
        </Text>
        <Text>
          Zocial -> {"\n"}
          <Zocial name="angellist" size={32} color="green" />
          <Zocial name="bitbucket" size={32} color="pink" />
        </Text>
      </View>
    );
  }
}

export default task52;
