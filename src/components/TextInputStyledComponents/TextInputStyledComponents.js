import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import styled from "styled-components";

const Fieldset = styled.div`
  margin-bottom: 16px;
`;

const Input = styled.input`
  display: block;
  border: ${props => props.error && "solid 1px red"};
`;

const Error = styled.div`
  color: red;
`;

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
const TextInputStyledComponents = ({
  htmlId,
  label,
  required = false,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
  children,
  ...props
}) => (
  <Fieldset>
    <Label htmlFor={htmlId} label={label} required={required} />
    <Input
      id={htmlId}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      {...props}
    />
    {children}
    {error && <Error>{error}</Error>}
  </Fieldset>
);

TextInputStyledComponents.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,
  /** Input label */
  label: PropTypes.string.isRequired,
  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,
  /** Input type */
  type: PropTypes.oneOf(["text", "number", "password"]),
  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,
  /** Placeholder to display when empty */
  placeholder: PropTypes.string,
  /** Value */
  value: PropTypes.any,
  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,
  /** String to display when error occurs */
  error: PropTypes.string,
  /** Child component to display next to the input */
  children: PropTypes.node
};

export default TextInputStyledComponents;
