import { useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../graphql/queries";

const useMyReviews = () => {
  const { data, loading } = useQuery(AUTHORIZED_USER, {
    variables: { includeReviews: true },
  });

  return {
    user: data?.authorizedUser,
    loading,
  };
};

export default useMyReviews;
