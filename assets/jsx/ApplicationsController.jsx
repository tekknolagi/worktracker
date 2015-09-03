var ApplicationsController = React.createClass({
  getInitialState: function() {
    return {applicationList: []};
  },
  loadApplicationList: function() {
    var this_ = this;
    var applicationQuery = new Parse.Query(Application);
    applicationQuery.include("user");
    applicationQuery.include("company");
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
    });
  },
  componentDidMount: function() {
    this.loadApplicationList();
    // there is a race condition here because of stupid Parse.User.logOut
    // Parse.User.current() might not update and dfjsdfksjdfskdjf
    window.addEventListener("user_change", this.loadApplicationList);
  },
  componentWillUnmount: function() {
    window.removeEventListener("user_change", this.loadApplicationList);
  },
  render: function() {
    if (this.state.applicationList.length > 0) {
      return (
        <div className="company-list">
          <h2>Companies</h2>
          {this.state.applicationList.map(function (application) {
            return <ApplicationView key={application.id}
                                    application={application} />;
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
