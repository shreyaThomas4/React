/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Hello from React");
// // {} is place where we give attributes
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// nested child

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1 for parcel"
);

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//   },
//   "Heading 2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     hello: "world",
//   },
//   [heading]
// );

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/011/883/296/non_2x/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(<AppLayout/>);
