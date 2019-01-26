import React from "react";
import RegistrationForm from "ps-react-guiportooo/RegistrationForm";

const Example = () => {
  const onSubmit = user => console.log(user);

  return <RegistrationForm onSubmit={onSubmit} />;
};

export default Example;
