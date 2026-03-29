import React from 'react'
import { Routes , Route } from 'react-router'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/signup' element ={<Signup/>}/>
    </Routes>
      

    </div>
  )
}

export default App