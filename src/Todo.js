import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export const Todo = ({ todo, onRemove }) => {
    const onPressAlert = () => {
        Alert.alert("to remove task you need to press a bit long...")
    }
    return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPressAlert}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 2,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
