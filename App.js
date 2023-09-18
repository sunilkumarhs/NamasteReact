import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "head", xyz: "abcd" }, [
  "Hello World from React!",
  "Hello World from React!",
]);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "p1" }, [
    React.createElement("h1", { key: "c1.1" }, "This is Namaste React"),
    React.createElement("h2", { key: "c1.2" }, "This is h3 tag!"),
  ]),
  React.createElement("div", { id: "child2", key: "p2" }, [
    React.createElement("h1", { key: "c2.1" }, "This is Namaste React"),
    React.createElement("h2", { key: "c2.2" }, "This is Sunil Kumar H S"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
