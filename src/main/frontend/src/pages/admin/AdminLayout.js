import React from 'react
import { Outlet, Route, useNavigate } from 'react-router-dom'

const AdminLayout = () => {

  const navigate = useNavigate();

  // navigate('/admin/ksh/chartWrite'
  return (
    <>
    <div className='admin-div'>
      관리자페이지 레이아웃
      <Outlet/>
    </div>

    <div className='admin-btn'>
        <button type='button' onClick={()=>{navigate('reserv')}}>예약조회</button>
        <button type='button' onClick={()=>{navigate('patientInfo')}}>환자정보</button>
        <button type='button' onClick={()=>{navigate('MedicalHistory')}}>진료이력</button>
        <button type='button' onClick={()=>{navigate('Presc')}}>처 방 전</button>
        </div>
    </>
  )
}

export default AdminLayout
