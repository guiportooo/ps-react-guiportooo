import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import PasswordInput from "../PasswordInput";

/** Registration form with built-in validation. */
class RegistrationForm extends React.Component {
  static propTypes = {
    /** Message displayed upon successful submission */
    confirmationMessage: PropTypes.string,
    /** Called when form is submitted */
    onSubmit: PropTypes.func.isRequired,
    /** Minimum password length */
    minPasswordLength: PropTypes.number
  };

  static defaultProps = {
    confirmationMessage: "Thanks for registering!",
    minPasswordLength: 8
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: ""
      },
      errors: {},
      submitted: false
    };
  }

  onChange = event => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  // Returns a number from 0 to 100 that represents password quality.
  // For simplicity, just returning % of min length entered.
  // Could enhance with checks for number, special char, unique characters, etc.
  passwordQuality(password) {
    if (!password) return null;
    const { minPasswordLength } = this.props;

    if (password.length >= minPasswordLength) return 100;

    const percentageOfMinLength = parseInt(
      (password.length / minPasswordLength) * 100,
      10
    );
    return percentageOfMinLength;
  }

  validate({ email, password }) {
    const errors = {};
    const { minPasswordLength } = this.props;

    if (!email) errors.email = "Email required";
    if (password.length < minPasswordLength)
      errors.password = `Password must be at least ${minPasswordLength} characters.`;

    this.setState({ errors });

    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit = () => {
    const { user } = this.state;
    const formIsValid = this.validate(user);

    if (formIsValid) {
      this.props.onSubmit(user);
      this.setState({ submitted: true });
    }
  };

  render() {
    const { confirmationMessage } = this.props;
    const { errors, submitted } = this.state;
    const { email, password } = this.state.user;

    return submitted ? (
      <h2>{confirmationMessage}</h2>
    ) : (
      <form>
        <TextInput
          htmlId="registration-form-email"
          name="email"
          label="Email"
          value={email}
          error={errors.email}
          onChange={this.onChange}
          required
        />
        <PasswordInput
          htmlId="registration-form-password"
          name="password"
          value={password}
          maxLength={50}
          quality={this.passwordQuality(password)}
          error={errors.password}
          onChange={this.onChange}
          showVisibilityToggle
        />
        <input type="submit" value="Register" onClick={this.onSubmit} />
      </form>
    );
  }
}

export default RegistrationForm;
