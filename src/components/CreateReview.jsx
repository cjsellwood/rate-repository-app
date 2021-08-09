import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from "yup";
import { useHistory } from "react-router-native";
import useCreateReview from "../hooks/useCreateReview";

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
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 16,
    borderRadius: 5,
    textAlign: "center",
  },
});

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Username is required"),
  repositoryName: yup.string().required("Password is required"),
  rating: yup
    .number()
    .integer()
    .min(0, "Must be greater than 0")
    .max(100, "Must be less than 100")
    .required("Rating is required"),
  text: yup.string(),
});

const Form = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository owner name"
        style={styles.input}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
        style={styles.input}
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        style={styles.input}
      />
      <FormikTextInput
        name="text"
        placeholder="Review"
        style={styles.input}
        multiline={true}
        numberOfLines={3}
      />
      <Pressable onPress={onSubmit}>
        <Text fontWeight="bold" color="textWhite" style={styles.button}>
          Create Review
        </Text>
      </Pressable>
    </View>
  );
};

export const CreateReviewContainer = ({ onSubmit }) => {
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

const CreateReview = () => {
  const history = useHistory();
  const [createReview] = useCreateReview();
  const onSubmit = async (values) => {
    const { ownerName, rating, text, repositoryName } = values;
    try {
      const { data } = await createReview({
        ownerName,
        rating: Number(rating),
        text,
        repositoryName,
      });
      history.push(`/repositories/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };
  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
