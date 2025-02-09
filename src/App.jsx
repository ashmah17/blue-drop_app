import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'
import Landing from './Component/Landing'
import Dashboard from './Component/Dashboard'
import Sidebar from './Component/Sidebar'


function App() {

  return (
    <>    
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
        <Route path='/Sidebar' element={<Sidebar/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
