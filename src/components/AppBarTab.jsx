import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    padding: 15,
  },
});

const AppBarTab = ({ label, link }) => {
  return (
    <Pressable onPress={() => {}}>
      <Link to={link}>
        <Text color="textWhite" fontWeight="bold" style={styles.button}>
          {label}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
