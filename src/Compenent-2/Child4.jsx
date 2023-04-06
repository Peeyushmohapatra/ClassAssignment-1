import React, { useContext, useState } from 'react'
import { store2 } from '../store'

const Child4 = () => {
    const context = useContext(store2);
    const [inputData,setInputData] = useState("");
    // console.log(context);
  return (
    <div>
        <input onChange={(e) => {
            setInputData(e.target.value);
        }} type="text" />
        <button onClick={() => {
            context(inputData)
        }}>Send Data To Parent</button>
        
    </div>
  )
}

export default Child4