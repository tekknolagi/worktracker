var SignInController = React.createClass({
  handleSignIn: function() {
    var this_ = this;
    Parse.FacebookUtils.logIn("email", {
      success: function(user) {
        FB.api('/me?fields=name,email', function(me) {
          user.set("displayName", me.name);
          user.set("email", me.email);
          user.save();
          this_.dispatchEvent(UserChangeEvent);
        });
      },
      error: function(user, error) {
        alert("Something went wrong and we couldn't log you in.")
      }
    });
  },
  componentDidMount: function() {
    window.addEventListener("user_change", this.render);
  },
  componentWillUnmount: function() {
    window.removeEventListener("user_change", this.render);
  },
  handleLogOut: function() {
    Parse.User.logOut();
    window.dispatchEvent(UserChangeEvent)
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
