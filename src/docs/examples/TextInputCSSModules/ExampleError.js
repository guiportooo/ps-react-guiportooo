import React from "react";
import TextInputCSSModules from "ps-react-guiportooo/TextInputCSSModules";

/** Required TextInput with error */
const ExampleError = () => (
  <TextInputCSSModules
    htmlId="example-error"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required."
  />
);

export default ExampleError;
