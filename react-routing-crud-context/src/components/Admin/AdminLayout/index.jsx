import React from 'react'
import AdminHeader from '../../../layouts/Admin/AdminHeader'
import Outlet from

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  )
}

export default AdminLayout
