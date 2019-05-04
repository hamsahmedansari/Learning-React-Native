import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
const ListItem = props => {
  const { todo, delete: deleteTodo ,index } = props;
  const { title, bg, id } = todo;
  return (
    <TouchableOpacity onPress={()=>deleteTodo(id)}>
      <View
        style={{
          width: "100%",
          padding: 10,
          marginTop: 5,
          backgroundColor: bg
        }}
      >
        <Text>{`${index+1} : ${title}`}</Text>
      </View>
    </TouchableOpacity>
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
