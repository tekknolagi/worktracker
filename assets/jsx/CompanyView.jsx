var CompanyView = React.createClass({
  render: function() {
    var company = this.props.company;
    var attributes = company.attributes;
    return (
      <div className="company-view" key={company.id}>
        <a className="application-url" href={attributes.application_url}>
          <p className="company-name">{attributes.name}</p>
        </a>
      </div>
    );
  }
});
