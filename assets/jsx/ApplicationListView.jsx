var ApplicationListView = React.createClass({
  headers: [
    "Company",
    "Status",
  ],
  render: function() {
    var applicationList = this.props.applications;
    if (applicationList.length > 0) {
      return (
        <div className="application-list">
          <table>
            <tr>
              {this.headers.map(function(header) {
                return <th key={header}>{header}</th>;
              })}
            </tr>
            {applicationList.map(function (application) {
              return <ApplicationView
                        key={application.id}
                        application={application} />;
            })}
          </table>
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
