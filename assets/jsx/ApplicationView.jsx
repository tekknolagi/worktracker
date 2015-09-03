var ApplicationView = React.createClass({
  render: function() {
    var application = this.props.application;
    var company = application.attributes.company;
    return (
      <div className="application-view">
        <CompanyView company={company} />
        <StatusView status={application.attributes.status} />
      </div>
    );
  }
});
