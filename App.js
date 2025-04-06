// <!-- create element takes 3 elements, tag, object, and what value needs to be added in tag --
// <!-- creating react program -->

// const heading = React.createElement("h1", {}, "Hello from React");
// // {} is place where we give attributes
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// nested child

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am h1 tag")
  )
);

// if we want to give more than one child we can convert the third argument into an array

const parent2 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
    )
  );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);