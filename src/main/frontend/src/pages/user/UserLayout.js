import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      유저페이지 레이아웃
      <Outlet/>
    </div>
  )
}

export default UserLayout
