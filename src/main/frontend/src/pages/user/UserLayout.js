import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './UserLayout.css'

const UserLayout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Outlet />
    </div>    
  )
}

export default UserLayout
