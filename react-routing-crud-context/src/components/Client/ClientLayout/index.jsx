import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from '../../../layouts/Client/ClientHeader'

const ClientLayout = () => {
  return (
    <div>
      <ClientHeader />
      <Outlet />
    </div>
  )
}

export default ClientLayout
