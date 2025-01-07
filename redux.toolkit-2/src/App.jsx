import React from 'react';
import { Provider } from 'react-redux'
// import store from './redux/app/store'
// import ProductsTable from './productsTable'
import MainLayout from './mainLayout';
import Categories from './pages/Categories';
import CategoryDetails from './pages/CategoryDetails';
import AddCatogires from './pages/AddCatogires';
import { Route, Routes } from 'react-router-dom';


  const BASE_URL = "http://localhost:3000/products"



function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Categories />} />
          <Route path='/:id' element={<CategoryDetails />} />
          <Route path='/add-edit' element={<AddCatogires />} />
          {/* <Route path='/add-edit/:id' element={<EditCategory />} /> */}
          {/* <Route path='/wishlist' element={<Wishlist />} /> */}
          {/* <Route path='/basket' element={<Basket />} /> */}
        </Route>

      </Routes>
    </>
  )
}

export default App
