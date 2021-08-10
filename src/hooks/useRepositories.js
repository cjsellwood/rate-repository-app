import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (order, filter) => {
  let variables = {
    searchKeyword: filter,
    first: 7,
  };
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

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
