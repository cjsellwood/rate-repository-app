import React from "react";
import { StyleSheet, Pressable } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    padding: 20,
  },
});

const AppBarTab = ({ label }) => {
  return (
    <Pressable onPress={() => {}}>
      <Text color="textWhite" fontWeight="bold" style={styles.button}>
        {label}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
