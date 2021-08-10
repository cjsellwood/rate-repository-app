import React from "react";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";
import useMyReviews from "../hooks/useMyReviews";

const MyReviews = () => {
  const { user, refetch } = useMyReviews();

  if (!user) {
    return null;
  }

  const reviews = user.reviews.edges.map((review) => review.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem review={item} myReviews={true} refetch={refetch} />
      )}
      keyExtractor={({ id }) => id}
    />
  );
};

export default MyReviews;
