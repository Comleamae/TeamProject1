import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminLayout = () => {

  const navigate = useNavigate();


  return (
    <div>
      관리자페이지 레이아웃
      <div>
        <div>
          <button type='button' onClick={(e)=>{navigate('/admin/ksh/chartWrite')}}>진료 기록 작성</button>
          <button type='button' onClick={(e)=>{navigate('/admin/ksh/chartCheck')}}>진료 이력 조회</button>
          <button type='button' onClick={(e)=>{navigate('/admin/ksh/chartEat')}}>처방전 작성</button>
        </div>  
      </div>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
