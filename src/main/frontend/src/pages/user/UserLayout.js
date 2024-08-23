import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const UserLayout = () => {
  const navigate = useNavigate();

  return (
    <div>
      유저페이지 레이아웃
      <Outlet />
      
    </div>
  )
}

export default UserLayout
