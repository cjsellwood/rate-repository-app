import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
  },
  rating: {},
  ratingCircle: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    width: 40,
    height: 40,
    borderRadius: 40,
    borderColor: theme.colors.primary,
    margin: 3,
    marginRight: 6,
  },
  infoContainer: {
    flexShrink: 1,
  },
  text: {
    marginTop: 5,
  },
  date: {
    marginTop: 3,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.ratingCircle}>
          <Text color="textPrimary" fontWeight="bold" style={styles.rating}>
            {review.rating}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text style={styles.date} color="textSecondary">
          {new Date(review.createdAt).toLocaleDateString()}
        </Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
