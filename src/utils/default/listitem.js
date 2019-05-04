import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
const ListItem = props => {
  const { title, index, page } = props;
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate(String(page))}>
      <View
        style={{
          width: "100%",
          padding: 10,
          marginTop: 5,
          backgroundColor: "#D4D4D4"
        }}
      >
        <Text>{`Task ${index + 1}:  ${title}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
