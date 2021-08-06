import { View, StyleSheet } from "react-native";
import React from "react";
import RepositoryList from "./RepositoryList";
import Text from "./Text";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Simple text</Text>
      <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
      <Text fontWeight="bold" fontSize="subheading">
        Bold Subheading
      </Text>
      <Text color="textSecondary">Text with secondary color</Text>

      <Text>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
