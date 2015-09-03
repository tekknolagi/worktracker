var ApplicationsController = React.createClass({
  getInitialState: function() {
    return {companyList: []};
  },
  componentDidMount: function() {
    var this_ = this;
    companyQuery.find({
      success: function(companies) {
        if (this_.isMounted()) {
          this_.setState({companyList: companies});
        }
      },
      error: function(object, error) {
        // freak out
        console.log('Could not load company list');
      }
    })
  },
  render: function() {
    return (
      <div className="company-list">
        <h2>Companies</h2>
        {this.state.companyList.map(function (company) {
          return <CompanyView objectId={company.id} />;
        })}
      </div>
    );
  }
});
