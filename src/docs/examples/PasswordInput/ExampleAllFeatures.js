import React from "react";
import PasswordInput from "ps-react-guiportooo/PasswordInput";

class ExampleAllFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ""
    };
  }

  getQuality() {
    const length = this.state.password.length;
    return length > 10 ? 100 : length * 10;
  }

  handleChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { password } = this.state;

    return (
      <div>
        <PasswordInput
          htmlId="example-all-features"
          name="password"
          placeholder="Enter password"
          minLength={8}
          value={password}
          showVisibilityToggle
          onChange={this.handleChange}
          quality={this.getQuality()}
          {...this.props}
        />
      </div>
    );
  }
}

export default ExampleAllFeatures;
