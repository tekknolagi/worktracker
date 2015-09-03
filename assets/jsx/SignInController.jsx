var SignInController = React.createClass({
  handleSignIn: function() {
    var this_ = this;
    Parse.FacebookUtils.logIn("email", {
      success: function(user) {
        FB.api('/me?fields=name,email', function(me) {
          user.set("displayName", me.name);
          user.set("email", me.email);
          user.save();
          this_.setState({loggedIn: true});
        });
      },
      error: function(user, error) {
        this_.setState({loggedIn: false});
      }
    });
  },
  handleLogOut: function() {
    Parse.User.logOut();
    this.setState({loggedIn: false});
  },
  getInitialState: function() {
    return {loggedIn: Parse.User.current() != null};
  },
  render: function() {
    if (Parse.User.current()) {
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
