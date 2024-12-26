import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Client/Home'
import ClientLayout from './components/Client/ClientLayout'
import Contact from './pages/Client/Contact'
import Detail from './pages/Client/Detail'
import About from './pages/Client/About'
import AdminLAyout from './components/Admin/AdminLayout'
import Dashboard from './pages/Admin/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        //client
        <Route path='/' element={<ClientLayout />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/:id' element={<Detail />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/admin' element={<AdminLAyout />}>
          <Route index element={<Dashboard />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
