var ApplicationView = React.createClass({
  render: function() {
    var company = this.props.application.attributes.company;
    return (
      <CompanyView company={company} />
    );
  }
});
