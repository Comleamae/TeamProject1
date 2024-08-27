import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom'


const AdminLayout = () => {

  const navigate = useNavigate();

  return (
    <div>
      관리자페이지 레이아웃
      <div>
        <button type='button' onClick={(e)=>(
          navigate('chartWrite'))
          }>차트작성</button>
        <button type='button'>진료이력</button>
        <button type='button'>처방전</button>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout
