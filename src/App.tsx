import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './pages/Create'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
