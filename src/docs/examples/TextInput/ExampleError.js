import React from "react";
import TextInput from "ps-react-guiportooo/TextInput";

/** Required TextInput with error */
const ExampleError = () => (
  <TextInput
    htmlId="example-error"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required."
  />
);

export default ExampleError;
