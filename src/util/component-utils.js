import React, { Component } from "react";

class ActiveList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: props.initialActive || null
    };
  }

  handleActiveChange = active => this.setState({ active });

  render() {
    return this.props.children({
      ...this.state,
      onActiveChange: this.handleActiveChange
    });
  }
}

class Toggle extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { toggled: props.initialToggled || false };
  }

  handleToggle = () => this.setState({ toggled: !this.state.toggled });

  render() {
    return this.props.children({
      ...this.state,
      onToggle: this.handleToggle
    });
  }
}

// HOC version of the <Toggle> component
const withToggle = ({ initialToggle }) => WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <Toggle initialToggle={initialToggle}>
          {toggleProps => <WrappedComponent {...toggleProps} {...this.props} />}
        </Toggle>
      );
    }
  };
};

export { Toggle, withToggle, ActiveList };
