import * as React from "react";
let Logo ="./img/download.jpeg";
export default class FirstComponent extends React.Component <{}> {
  render() {
    return (
      <div>
        <h3>A Simple React Component Example with Typescript</h3>
        <div>
          <img height="200" alt="Logo" src={Logo} /> 
        </div>
        <p>This component shows the first component of mine with beautiful image</p>
      </div>
    );
  }
}