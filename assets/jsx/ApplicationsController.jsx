var ApplicationsController = React.createClass({
  getInitialState: function() {
    return {applicationList: []};
  },
  observe: function() {
    return {
      user: ParseReact.currentUser
    };
  },
  componentDidMount: function() {
    var this_ = this;
    var applicationQuery = new Parse.Query(Application);
    applicationQuery.include("user");
    applicationQuery.include("company");
    applicationQuery.equalTo("user", this.data.user);
    applicationQuery.find({
      success: function(applications) {
        if (this_.isMounted()) {
          this_.setState({applicationList: applications});
        }
      },
      error: function(object, error) {
        // freak out
        console.log('Could not load company list');
      }
    })
  },
  render: function() {
    if (this.state.applicationList.length > 0) {
      return (
        <div className="company-list">
          <h2>Companies</h2>
          {this.state.applicationList.map(function (application) {
            return <ApplicationView application={application} />;
          })}
        </div>
      );
    }
    else {
      return (
        <div className="company-list">
          <h2>Companies</h2>
          No applications.
        </div>
      );
    }
  }
});
