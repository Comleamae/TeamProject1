import React, { useEffect } from 'react'
import { Outlet, Route, useNavigate } from 'react-router-dom'
import '../admin/AdminLayout.css'

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
