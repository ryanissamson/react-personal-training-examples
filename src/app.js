console.log("App.js is running.");

// JSX - Javascript XML
var appRoot = document.getElementById("app");
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info.</p>
  </div>
);

var templateTwo = (
  <div>
    <h1>Ryan Gibson</h1>
    <p>Age: 32</p>
    <p>Location: Indianapolis</p>
  </div>
);

ReactDOM.render(templateTwo, appRoot);
