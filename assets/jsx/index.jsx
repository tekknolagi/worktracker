var Company = Parse.Object.extend("Company");
var Application = Parse.Object.extend("Application");

var UserChangeEvent = new Event("user_change", {
  "bubbles": false,
  "cancelable": true,
});

React.render(
  <ApplicationsController />,
  document.getElementById("content")
);

React.render(
  <SignInController />,
  document.getElementById("sign-in")
);
