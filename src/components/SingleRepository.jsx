import React from "react";
import { useParams } from "react-router-native";
import { FlatList, View, StyleSheet } from "react-native";
import Text from "./Text";

import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
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

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) {
    return null;
  }

  const reviews = repository.reviews.edges.map((review) => review.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} />}
    />
  );
};

export default SingleRepository;
