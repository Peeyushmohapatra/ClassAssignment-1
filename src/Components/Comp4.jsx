import React, { useContext } from 'react'
import { store } from '../store'

const Comp4 = () => {
    const data = useContext(store);

  return (
    <div>
       Comp 4
        {data}
        <hr />
    </div>
  )
}

export default Comp4