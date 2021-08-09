import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const [repository, setRepository] = useState();

  const result = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  
  useEffect(() => {
    if (result.data) {
      setRepository(result.data.repository);
    }
  }, [result]);

  return { repository, loading: result.loading };
};

export default useRepository;
