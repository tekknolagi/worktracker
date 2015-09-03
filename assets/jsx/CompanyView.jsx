var CompanyView = React.createClass({
  getInitialState: function() {
    return {fetched: false, parseObject: null};
  },
  componentDidMount: function() {
    var this_ = this;
    companyQuery.get(this.props.objectId, {
      success: function(company) {
        if (this_.isMounted()) {
          this_.setState(company.attributes);
        }
      },
      error: function(object, error) {
        // freak out
        console.log('no such company:', this_.props.objectId)
      }
    });
  },
  render: function() {
    return (
      <div className="company-view" key={this.props.objectId}>
        <a className="application-url" href={this.state.application_url}>
          <p className="company-name">{this.state.name}</p>
        </a>
      </div>
    );
  }
});
