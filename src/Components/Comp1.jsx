import React, { useState } from "react";
import { store } from "../store";
import Comp2 from "./Comp2";

const Comp1 = () => {
    const [input,setInput] = useState("");
    const [data,setData] = useState("")
  return (
    <div >
      
    <store.Provider value={data}>
      <h1>PASSING DATA FROM PARENT TO CHILD</h1>
      <div>
        <input onChange={(e) => {
            setInput(e.target.value)
        }} type="text" />
        <button onClick={() => {
            setData(input)
        }}>send data to Child D</button>
        <Comp2 />
      </div>
    </store.Provider>
    </div>
  );
};

export default Comp1;
