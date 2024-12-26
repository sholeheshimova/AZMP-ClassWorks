import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index1.module.scss'

const AdminHeader = () => {
  return (
    <div>
      <header>
        <div className="container">
            <div className={styles.header}>
                <h2 className={styles.adminlogo}>
                    Admin Logo
                </h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/admin"}>
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    </div>
  )
}

export default AdminHeader
