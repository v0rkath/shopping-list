import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './pages/Create'
import Home from './pages/Home'
import List from './pages/List'

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/list/:id" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
