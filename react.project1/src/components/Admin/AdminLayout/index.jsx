import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../../layouts/Admin/Header'

const AdminLAyout = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  )
}

export default AdminLAyout

