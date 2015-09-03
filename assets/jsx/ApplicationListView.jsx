var ApplicationListView = React.createClass({
  render: function() {
    var applicationList = this.props.applications;
    if (applicationList.length > 0) {
      return (
        <div className="application-list">
          {applicationList.map(function (application) {
            return <ApplicationView key={application.id}
              application={application} />;
          })}
        </div>
      );
    }
    else {
      return (
        <div className="application-list">
          No applicaitons.
        </div>
      );
    }
  }
});
