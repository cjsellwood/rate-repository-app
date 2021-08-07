import { useEffect } from "react";
import { useHistory } from "react-router-native";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const SignOut = () => {
  let history = useHistory();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  useEffect(() => {
    const removeToken = async () => {
      await authStorage.removeAccessToken();
      apolloClient.resetStore();
      history.push("/");
    };
    removeToken();
  }, []);
  return null;
};

export default SignOut;
