import React from "react";
import { View, StyleSheet, Pressable, Alert } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useHistory } from "react-router-native";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import { AUTHORIZED_USER } from "../graphql/queries";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
  },
  container: {
    backgroundColor: "white",
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
  buttonContainer: {
    flexDirection: "row",
    padding: 8,
  },
  linkButton: {
    padding: 12,
    backgroundColor: theme.colors.primary,
    color: theme.colors.textWhite,
    textAlign: "center",
    borderRadius: 5,
    margin: 5,
  },
  deleteButton: {
    padding: 12,
    backgroundColor: "#dd0044",
    color: theme.colors.textWhite,
    textAlign: "center",
    borderRadius: 5,
    margin: 5,
  },
});

const ReviewItem = ({ review, myReviews, refetch }) => {
  const history = useHistory();

  const repositoryLink = () => {
    history.push(`/repositories/${review.repositoryId}`);
  };

  const createAlert = () => {
    Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review",
      [
        { text: "Cancel", onPress: () => {} },
        {
          text: "Delete",
          onPress: () => {
            deleteReview(review.id);
          },
        },
      ]
    );
  };

  const [mutate] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    await mutate({ variables: { id } });
    refetch();
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <View style={styles.ratingCircle}>
            <Text color="textPrimary" fontWeight="bold" style={styles.rating}>
              {review.rating}
            </Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          {myReviews ? (
            <Text fontWeight="bold">{review.repositoryId}</Text>
          ) : (
            <Text fontWeight="bold">{review.user.username}</Text>
          )}
          <Text style={styles.date} color="textSecondary">
            {new Date(review.createdAt).toLocaleDateString()}
          </Text>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>
      {myReviews ? (
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => repositoryLink()} style={{ flex: 1 }}>
            <Text fontWeight="bold" color="textWhite" style={styles.linkButton}>
              View Repository
            </Text>
          </Pressable>
          <Pressable onPress={createAlert} style={{ flex: 1 }}>
            <Text
              fontWeight="bold"
              color="textWhite"
              style={styles.deleteButton}
            >
              Delete Review
            </Text>
          </Pressable>
        </View>
      ) : (
        false
      )}
    </View>
  );
};

export default ReviewItem;
