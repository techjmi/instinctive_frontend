
import './App.css'
import { BrowserRouter, Route,  Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Addstudents from './components/Addstudents'
import EditStudent from './pages/EditStuent'
import Signup from './pages/Sinup'
import Login from './pages/Login'
import Profile from './components/Profile'
import ProfileUpdate from './pages/ProfileUpdate'
function App() {


  return (
    <BrowserRouter>
     {/* <Navbar /> */}
    <Routes>
    <Route path='/'element={<Dashboard />} />
    <Route path='/add'element={<Addstudents />} />
    <Route path='/edit/:id'element={<EditStudent />} />
    <Route path='/signup'element={<Signup />} />
    <Route path='/login'element={<Login />} />
    <Route path='/profile'element={<Profile />} />
    <Route path='/update'element={<ProfileUpdate />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
