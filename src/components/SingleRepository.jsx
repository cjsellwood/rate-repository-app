import React from "react";
import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";

import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository(id);

  if (!repository) {
    return null;
  }

  const reviews = repository.reviews.edges.map((review) => review.node);

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} />}
    />
  );
};

export default SingleRepository;
