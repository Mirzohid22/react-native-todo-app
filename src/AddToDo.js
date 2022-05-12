import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

export const AddToDo = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
    } else {
      Alert.alert("Title of task must have at least 1 character");
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={"Enter title of task"}
        autoCorrect={false}
        autoCapitalize={"none"}
      />
      <Button title="Create" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
