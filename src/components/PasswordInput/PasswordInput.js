import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import EyeIcon from "../EyeIcon";
import ProgressBar from "../ProgressBar";

/** Password input with integrated label, quality tips, and show password toggle. */
class PasswordInput extends React.Component {
  static propTypes = {
    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
    htmlId: PropTypes.string.isRequired,
    /** Input label */
    label: PropTypes.string,
    /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/
    name: PropTypes.string.isRequired,
    /** Placeholder displayed when no password is entered */
    placeholder: PropTypes.string,
    /** Password value */
    value: PropTypes.any,
    /** Max password length accepted */
    maxLength: PropTypes.number,
    /** Function called when password input value changes */
    onChange: PropTypes.func.isRequired,
    /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */
    quality: PropTypes.number,
    /** Validation error to display */
    error: PropTypes.string,
    /** Set to true to show the toggle for displaying the currently entered password */
    showVisibilityToggle: PropTypes.bool
  };

  static defaultProps = {
    maxLength: 50,
    showVisibilityToggle: false,
    label: "Password"
  };

  constructor(props) {
    super(props);

    this.state = {
      showPassword: false
    };
  }

  toggleShowPassword = event => {
    if (event) event.preventDefault();

    this.setState(prevState => {
      return { showPassword: !prevState.showPassword };
    });
  };

  render() {
    const {
      htmlId,
      label,
      name,
      placeholder,
      value,
      error,
      onChange,
      maxLength,
      showVisibilityToggle,
      quality,
      ...props
    } = this.props;

    const { showPassword } = this.state;

    return (
      <TextInput
        htmlId={htmlId}
        label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        error={error}
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        required
        {...props}
      >
        {showVisibilityToggle && (
          <a
            href="#"
            onClick={this.toggleShowPassword}
            style={{ marginLeft: 5 }}
          >
            <EyeIcon />
          </a>
        )}
        {value.length > 0 && quality && (
          <ProgressBar percent={quality} width={130} />
        )}
      </TextInput>
    );
  }
}

export default PasswordInput;
