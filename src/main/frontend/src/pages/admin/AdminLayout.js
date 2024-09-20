import React from 'react'
import { Outlet, Route, useNavigate } from 'react-router-dom'

const AdminLayout = () => {

  const navigate = useNavigate();

  // navigate('/admin/ksh/chartWrite'
  return (
    
    <div className='admin-div'>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
