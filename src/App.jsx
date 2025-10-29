import { useState } from 'react'

import './App.css'
import Sample from './sample'
import Timer from './Timer'
import NumberDashboard from './components/NumberDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NumberDashboard />
   {/*  <Timer /> */}
{/*       <Sample />
 */}    </>
  )
}

export default App
