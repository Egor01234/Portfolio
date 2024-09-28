import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import NavigationBar from './NavigationBar'

const App = () =>{
  return (
    <Router>
    <NavigationBar/>
    </Router>
    
  )
}

export default App