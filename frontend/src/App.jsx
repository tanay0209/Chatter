import { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Home from "./Pages/Home"
import ChatScreen from './Pages/ChatScreen'
function App() {

  return (
    <div className='flex h-screen'>
      <Route path='/' component={Home} exact />
      <Route path='/chats' component={ChatScreen} />
    </div>
  )
}

export default App
