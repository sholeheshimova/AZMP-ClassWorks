import React from 'react'
import { Routes } from "react-router-dom"
import { NavLink } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <div>
      <header>
        <div className="header">
            <h2 className='adminlogo'>Admin Logo</h2>
            <nav>
                <ul>
                    <li>
                       <NavLink to={"/admin"}>DashBoard</NavLink>
                    </li>
                    <li>
                       <NavLink to={"/products"}>Products</NavLink>
                    </li>
                    <li>
                       <NavLink to={"/addproducts"}>Add Products</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
      </header>



    </div>
  )
}

export default AdminHeader
