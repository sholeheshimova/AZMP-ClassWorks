import React from 'react'
import { Routes } from "react-router-dom"
import { NavLink } from 'react-router-dom'
import styled from "../AdminHeader/index.module.scss"

const AdminHeader = () => {
  return (
    <div>
      <header>
        <div className={styled.header}>
            <h2 className={styled.adminlogo}>Admin Logo</h2>
            <nav>
                <ul>
                    <li>
                       <NavLink to={"/admin"}>DashBoard</NavLink>
                    </li>
                    <li>
                       <NavLink to={"products"}>Products</NavLink>
                    </li>
                    <li>
                       <NavLink to={"addproducts"}>Add Products</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
      </header>



    </div>
  )
}

export default AdminHeader
