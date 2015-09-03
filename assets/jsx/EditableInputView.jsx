var EditableInputView = React.createClass({
  getInitialState: function() {
    return {editable: false, content: this.props.content};
  },
  handleClick: function(event) {
    var this_ = this;
    this.setState({editable: true}, function() {
      var element = this_.refs.element.getDOMNode();
      element.focus();
      element.setSelectionRange(0, element.value.length);
    });
  },
  handleBlur: function(event) {
    this.setState({editable: false});
    this.props.onChange(event);
  },
  onChange: function(event) {
    this.setState({content: event.target.value});
  },
  render: function() {
    if (this.state.editable) {
      return (
        <div className="editable-input-view">
          <input
            ref="element"
            value={this.state.content}
            onChange={this.onChange}
            onBlur={this.handleBlur} />
        </div>
      );
    }
    return (
      <div className="editable-input-view" onClick={this.handleClick}>
        {this.state.content}
      </div>
    );
  }
});
