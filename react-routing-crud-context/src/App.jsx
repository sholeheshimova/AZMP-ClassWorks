
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './components/Client/ClientLayout'
import AdminLayout from './components/Admin/AdminLayout'
import Home from './pages/Client/Home'
import Contact from './pages/Client/Contact'
import Product from './pages/Client/Product'
import Favorites from './pages/Client/Favorites'
import Dashboard from './pages/Admin/Dashboard'
import Products from './pages/Admin/Products'
import AddProducts from './pages/Admin/AddProducts'
import Detail from './pages/Client/Detail'


function App() {


  return (
    <>
      <Routes>
        //client
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route  path='contact' element={<Contact />}/>
          <Route  path='product' element={<Product />}/>
          <Route  path='product/:id' element={<Detail />}/>
          <Route  path='favorites' element={<Favorites />}/>
        </Route>
        //admin
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route  path='products' element={<Products />}/>
          <Route path='addproducts' element={<AddProducts />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
