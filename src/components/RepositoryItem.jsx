import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
import BottomBar from "./BottomBar";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.listItem,
    paddingBottom: 10,
  },
  languageTag: {
    padding: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    marginTop: 5,
    alignSelf: "flex-start",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  textContainer: {
    padding: 10,
  },
  description: {
    paddingTop: 5,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <View style={styles.textContainer}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text style={styles.description} color="textSecondary">
            {item.description}
          </Text>
          <Text color="textWhite" style={styles.languageTag}>
            {item.language}
          </Text>
        </View>
      </View>
      <BottomBar item={item} />
    </View>
  );
};

export default RepositoryItem;
