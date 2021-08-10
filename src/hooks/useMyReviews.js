import { useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../graphql/queries";

const useMyReviews = () => {
  const { data, loading, refetch } = useQuery(AUTHORIZED_USER, {
    variables: { includeReviews: true },
  });

  return {
    user: data?.authorizedUser,
    loading,
    refetch,
  };
};

export default useMyReviews;
