import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UserContextProvider from './context/UserContextProvider'
import Login from './assets/components/Login'
import Profile from './assets/components/profile'

function App() {
 

  return (
    <UserContextProvider>
      <h1>Context API Provider:</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
