import logo from './logo.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Protected from './Protected'
import User from './pages/User'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/sign-in" element={ <SignIn/> } />
      <Route path="/dashboard" element={ <Protected/>}>
        <Route path='user' element={ <User /> } />
      </Route>
      <Route path="*" element={ <NotFound/> } />
    </Routes>
  )
}

export default App
