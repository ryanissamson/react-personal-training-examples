console.log("App.js is running.");

// JSX - Javascript XML
var appRoot = document.getElementById("app");
var template = React.createElement("p", null, "This is some text.");

ReactDOM.render(template, appRoot);
