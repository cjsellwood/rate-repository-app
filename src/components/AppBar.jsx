import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../graphql/queries";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
  },
});

const AppBar = () => {
  const [authorized, setAuthorized] = useState(false);
  const result = useQuery(AUTHORIZED_USER);

  useEffect(() => {
    if (result.data && result.data.authorizedUser) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, [result.data]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <AppBarTab label="Repositories" link="/" />
        {authorized ? (
          <React.Fragment>
            <AppBarTab label="Create Review" link="/CreateReview" />
            <AppBarTab label="Sign Out" link="/SignOut" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <AppBarTab label="Sign In" link="/SignIn" />
            <AppBarTab label="Sign Up" link="/SignUp" />
          </React.Fragment>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
