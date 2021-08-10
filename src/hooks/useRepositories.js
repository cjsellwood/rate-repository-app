import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (order) => {
  const [repositories, setRepositories] = useState();

  let variables = {};
  switch (order) {
    case "Latest repositories":
      variables.orderBy = "CREATED_AT";
      variables.orderDirection = "DESC";
      break;
    case "Highest rated repositories":
      variables.orderBy = "RATING_AVERAGE";
      variables.orderDirection = "DESC";
      break;
    case "Lowest rated repositories":
      variables.orderBy = "RATING_AVERAGE";
      variables.orderDirection = "ASC";
      break;
    default:
      break;
  }

  const result = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (result.data) {
      setRepositories(result.data.repositories);
    }
  }, [result]);

  return { repositories, loading: result.loading };
};

export default useRepositories;
