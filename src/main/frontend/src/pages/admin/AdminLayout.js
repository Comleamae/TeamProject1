import React from 'react'
import './AdminLayout.css'
import { Outlet, Route, useNavigate } from 'react-router-dom'
import { CgMenuLeftAlt } from "react-icons/cg"; //메뉴아이콘

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
