import React from "react";
import { StyleSheet, Text, View } from "react-native";
const ListItem = props => {
  const { title, bg } = props.todo;
  return (
    <View
      style={{
        width: "100%",
        padding: 10,
        marginTop: 5,
        backgroundColor: bg
      }}
    >
      <Text>{title}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   ListItem: {
//     width: "100%",
//     padding: 10,
//     marginTop: 5,
//     backgroundColor: "#eee"
//   }
// });

export default ListItem;
