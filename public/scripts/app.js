"use strict";

console.log("App.js is running.");

// JSX - Javascript XML
var appRoot = document.getElementById("app");
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info."
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Ryan Gibson"
  ),
  React.createElement(
    "p",
    null,
    "Age: 32"
  ),
  React.createElement(
    "p",
    null,
    "Location: Indianapolis"
  )
);

ReactDOM.render(templateTwo, appRoot);
