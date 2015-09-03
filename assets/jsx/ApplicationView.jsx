var ApplicationView = React.createClass({
  handleChange: function(key, value) {
    this.props.application.set(key, value);
    this.props.application.save();
  },
  render: function() {
    var application = this.props.application;
    var company = application.attributes.company;
    return (
      <tr>
        <td><CompanyView company={company} /></td>
        <td>
          <StatusView
            status={application.attributes.status}
            onChange={this.handleChange} />
        </td>
      </tr>
    );
  }
});
