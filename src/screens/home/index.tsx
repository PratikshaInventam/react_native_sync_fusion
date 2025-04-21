import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = () => {
  const [message, setMessage] = useState("Hello, World!");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Click Me" onPress={handleClick} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
