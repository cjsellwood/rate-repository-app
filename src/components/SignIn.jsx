import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from "yup";

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
    marginBottom: 4,
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
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
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
      <Pressable onPress={onSubmit}>
        <Text fontWeight="bold" color="textWhite" style={styles.button}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
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

export default SignIn;
