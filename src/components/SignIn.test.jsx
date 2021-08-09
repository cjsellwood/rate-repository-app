import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { SignInContainer } from "./SignIn";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByTestId } = render(
        <SignInContainer onSubmit={onSubmit} />
      );

      fireEvent.changeText(getByPlaceholderText("Username"), "kalle");
      fireEvent.changeText(getByPlaceholderText("Password"), "password");
      fireEvent.press(getByTestId("submit-button"));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalled();
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
