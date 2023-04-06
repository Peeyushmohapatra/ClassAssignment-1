import React, { useState } from "react";
import { store2 } from "../store";
import Child2 from "./Child2";

const Child1 = () => {
    const [data,setData] = useState("");
  return (
    <store2.Provider value={setData}>
      <div style={{marginTop:"30px"}}>
        <h1>PASSING DATA FROM CHILD TO PARENT</h1>
        <p>Data From Child Comp: {data}</p>
      </div>
      <Child2/>
    </store2.Provider>
  );
};

export default Child1;
