import React from "react";
import renderer from "react-test-renderer";
import PasswordInput from "./PasswordInput";

describe("PasswordInput", () => {
  test("hides password quality by default", () => {
    const tree = renderer
      .create(
        <PasswordInput
          htmlId="test"
          name="test"
          onChange={() => {}}
          value="Uisi38#8iad"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("shows password quality when enabled and a password is entered", () => {
    const tree = renderer
      .create(
        <PasswordInput
          htmlId="test"
          name="test"
          onChange={() => {}}
          showQuality
          value="Uisi38#8iad"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("hides password quality when enabled but no password is entered", () => {
    const tree = renderer
      .create(
        <PasswordInput
          htmlId="test"
          name="test"
          onChange={() => {}}
          showQuality
          value=""
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
