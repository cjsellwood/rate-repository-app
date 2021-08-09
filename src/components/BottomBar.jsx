import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const roundNumber = (number) => {
  let display = number;
  if (number > 1000) {
    display = Math.round(number) / 1000;
    display = `${display.toFixed(1)}k`;
  }
  return display;
};

const BottomBar = ({ item }) => {
  return (
    <View style={styles.container} testID="bottom-bar">
      <View style={styles.statContainer}>
        <Text fontWeight="bold">{roundNumber(item.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.statContainer}>
        <Text fontWeight="bold">{roundNumber(item.forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.statContainer}>
        <Text fontWeight="bold">{roundNumber(item.reviewCount)}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.statContainer}>
        <Text fontWeight="bold">{roundNumber(item.ratingAverage)}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  );
};

export default BottomBar;
