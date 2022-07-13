import React from "react";
import {add, sub, mul, div} from './Calc';
function App() {
  return (
    <>
  <ul>
    <li>Sum of two number is {add(45,5)}</li>
    <li>Sub of two number is {sub(45,5)}</li>
    <li>Mul of two number is {mul(45,5)}</li>
    <li>div of two number is {div(47,3)}</li>
    <li>div of two number is {div(50,3)}</li>
  </ul>
  </>
  );
}

export default App;
