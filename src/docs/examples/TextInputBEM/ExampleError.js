import React from "react";
import TextInputBEM from "ps-react-guiportooo/TextInputBEM";

/** Required TextInput with error */
const ExampleError = () => (
  <TextInputBEM
    htmlId="example-error"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required."
  />
);

export default ExampleError;
