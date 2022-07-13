
import React from "react";
import Heading from "./Component/Heading";
import Para from "./Component/Para";
import List from "./Component/List";
import * as que from "./Component/Data";
import Icon from "./Component/Icons";
import { MuiCard } from "./Component/Muicard/MuiCard";




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
    <MuiCard/>
    </>
  );
}

export default App;