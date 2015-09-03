var StatusView = React.createClass({
  handleChange: function(event) {
    this.props.onChange("status", event.target.value);
  },
  render: function() {
    return (
      <EditableInputView
        content={this.props.status}
        onChange={this.handleChange} />
    );
  }
});
