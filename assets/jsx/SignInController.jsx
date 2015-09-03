var SignInController = React.createClass({
  getInitialState: function() {
    return {loggedIn: false};
  },
  handleSignIn: function() {
    var this_ = this;
    Parse.FacebookUtils.logIn("email", {
      success: function(user) {
        FB.api('/me?fields=name,email', function(me) {
          user.set("displayName", me.name);
          user.set("email", me.email);
          user.save();
          this.setState({loggedIn: true});
          window.dispatchEvent(UserChangeEvent);
        });
      },
      error: function(user, error) {
        alert("Something went wrong and we couldn't log you in.")
      }
    });
  },
  handleLogOut: function() {
    Parse.User.logOut();
    this.setState({loggedIn: false});
    window.dispatchEvent(UserChangeEvent);
  },
  render: function() {
    if (this.state.loggedIn) {
      return (
        <a href="#" onClick={this.handleLogOut}>Log Out</a>
      );
    }
    else {
      return (
        <a href="#" onClick={this.handleSignIn}>Sign in with Facebook</a>
      );
    }
  }
});
