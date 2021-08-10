import { View, StyleSheet } from "react-native";
import { Switch, Route, Redirect } from "react-router-native";
import React from "react";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import SingleRepository from "./SingleRepository";
import CreateReview from "./CreateReview";
import SignUp from "./SignUp";
import MyReviews from "./MyReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/SignOut">
          <SignOut />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/repositories/:id">
          <SingleRepository />
        </Route>
        <Route path="/CreateReview">
          <CreateReview />
        </Route>
        <Route path="/MyReviews">
          <MyReviews />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
