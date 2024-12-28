
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './components/Client/ClientLayout'
import Home from '../../react.project1/src/pages/Client/Home'
import Contact from '../../react.project1/src/pages/Client/Contact'
import Product from '../../react.project1/src/pages/Client/Product'
import Favorites from '../../react.project1/src/pages/Client/Favorites'
import Dashboard from '../../react.project1/src/pages/Admin/Dashboard'
import Products from '../../react.project1/src/pages/Admin/Products'
import AddProducts from '../../react.project1/src/pages/Admin/AddProducts'
// import AdminLAyout from '../../react.project1/src/components/Admin/AdminLayout'
import AdminLayout from './components/Admin/AdminLayout'


function App() {


  return (
    <>
      <Routes>
        //client
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route  path='/contact' element={<Contact />}/>
          <Route  path='/product' element={<Product />}/>
          <Route  path='/facorites' element={<Favorites />}/>
        </Route>
        //admin
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route  path='/products' element={<Products />}/>
          <Route path='/addproducts' element={<AddProducts />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
