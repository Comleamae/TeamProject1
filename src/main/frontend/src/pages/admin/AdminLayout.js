import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  
  return (
    <div>
      관리자페이지 레이아웃
      <Outlet/>
    </div>
  )
}

export default AdminLayout
