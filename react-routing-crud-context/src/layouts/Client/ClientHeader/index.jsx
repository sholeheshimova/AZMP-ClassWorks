import React from 'react'
import { NavLink } from 'react-router-dom'
import { Routes } from "react-router-dom"

const ClientHeader = () => {
  return (
    <div>
      <header>
        <div className="header">
            <h2 className='clientlogo'>Admin Logo</h2>
            <nav>
                <ul>
                    <li>
                       <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                       <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                    <li>
                       <NavLink to={"/product"}>Products</NavLink>
                    </li>
                    <li>
                       <NavLink to={"/favorites"}>Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default ClientHeader
