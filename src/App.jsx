import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
