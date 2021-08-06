import React from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";

const styles = StyleSheet.create({
  error: {
    borderColor: "#aa0000"
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error ? styles.error : false];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
