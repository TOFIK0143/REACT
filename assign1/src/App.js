import React from "react";
import Heading from "./Components/Heading";
import Para from "./Components/Para";
import List from "./Components/List";
import * as que from "./Components/Data";
import Icon from "./Components/Icon";
import Appbar from "./Components/Appbar";




function App(){
  return (
    <>
    <Heading/>
    <Para/>
    <List/>
    <h2>{que.default}</h2>
    <h3>{que.yo}</h3>
    <h4>{que.trainName()}</h4>
    <Icon/>
    </>
  );
}

export default App;