import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import useSignUp from "../hooks/useSignUp";
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#fff",
    padding: 16,
  },
  input: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#999999",
    marginBottom: 8,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 16,
    borderRadius: 5,
    textAlign: "center",
  },
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().max(30).required("Username is required"),
  password: yup.string().min(5).max(30).required("Password is required"),
  passwordConfirmation: yup
    .string()
    .min(5)
    .max(30)
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm your password"),
});

const Form = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.input}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <Pressable onPress={onSubmit}>
        <Text fontWeight="bold" color="textWhite" style={styles.button}>
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const history = useHistory();
  const [signIn] = useSignIn();
  const [signUp] = useSignUp();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
