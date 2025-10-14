import { useState } from 'react'

import './App.css'
import Sample from './sample'
import Timer from './Timer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Timer />
{/*       <Sample />
 */}    </>
  )
}

export default App
