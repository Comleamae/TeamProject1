import React from 'react'
import { Outlet, Route, useNavigate } from 'react-router-dom'

const AdminLayout = () => {

  const navigate = useNavigate();

  // navigate('/admin/ksh/chartWrite'
  return (
    
    <div className='admin-div'>
      관리자페이지 레이아웃
      <Outlet/>
    </div>
  )
}

export default AdminLayout
