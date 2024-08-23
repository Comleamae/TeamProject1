import React from 'react'
import { Outlet } from 'react-router-dom'
import './UserLayout.css'

const UserLayout = () => {
  
  return (
    <div>
      유저페이지메뉴
      <Outlet/>
    </div>
  )
}

export default UserLayout
