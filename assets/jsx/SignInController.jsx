var SignInController = React.createClass({
  handleClick: function() {
    Parse.FacebookUtils.logIn(null, {
      success: function(user) {
        if (!user.existed()) {
          alert("User signed up and logged in through Facebook!");
        } else {
          alert("User logged in through Facebook!");
        }
      },
      error: function(user, error) {
        alert("User cancelled the Facebook login or did not fully authorize.");
      }
    });
  },
  render: function() {
    return (
      <a href="#" onClick={this.handleClick}>Sign in with Facebook</a>
    );
  }
});
