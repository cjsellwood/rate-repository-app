import React from "react";
import { useParams } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  
  if (!repository) {
    return null;
  }
  return <RepositoryItem item={repository} />;
};

export default SingleRepository;
