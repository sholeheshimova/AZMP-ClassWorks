import React from 'react'
import { NavLink } from 'react-router-dom'
import  styles from './index2.module.scss'

const ClientHeader = () => {
  return (
    <div>
      <header>
        <div className="container">
            <div className={styles.header}>
                <h2 className={styles.clientlogo}>
                    Client Logo
                </h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/detail"}>Detail</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    </div>
  )
}

export default ClientHeader
