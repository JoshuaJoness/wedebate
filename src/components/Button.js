import React from "react";

import {Button} from "react-rainbow-components";

class Button_ extends React.Component {
  render() {
    return <Button label={this.props.name} variant="brand" />;
  }
}

export default Button_;
