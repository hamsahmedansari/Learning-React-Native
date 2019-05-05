import React, { Component } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from "react-native";
// not working on android
class task8 extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <Text style={styles.header}>Header</Text>
              <TextInput placeholder="Username" style={styles.input} />
              <TextInput placeholder="Password" style={styles.input} />
              <TextInput placeholder="Password" style={styles.input} />
              <TextInput placeholder="Password" style={styles.input} />
              <TextInput placeholder="Confrim Password" style={styles.input} />
              <View style={styles.btnContainer}>
                <Button title="Submit" onPress={() => null} />
              </View>
              <View style={{ flex: 1 }} />
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  input: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default task8;
