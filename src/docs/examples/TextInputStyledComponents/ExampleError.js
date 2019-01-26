import React from "react";
import TextInputStyledComponents from "ps-react-guiportooo/TextInputStyledComponents";

/** Required TextInput with error */
const ExampleError = () => (
  <TextInputStyledComponents
    htmlId="example-error"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required."
  />
);

export default ExampleError;
