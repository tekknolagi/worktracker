var StatusView = React.createClass({
  render: function() {
    return (
      <div className="status-view">
        {this.props.status}
      </div>
    );
  }
});
