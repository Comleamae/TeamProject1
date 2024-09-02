import React from 'react'
import './ReservReg.css';
import { Outlet, useNavigate } from 'react-router-dom';

const ReservReg = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="reserv-main-div">
        <div className='sub-div'>
          <div onClick={() => { navigate('/user/newVisit') }}>신규방문</div>
          <div onClick={() => { navigate('/user/reVisit') }}>재방문</div>
        </div> 
      </div>
      <div className='sub2-div'>
        <div onClick={()=>{navigate('/user/reservInquiry')}}>예약조회</div>
      </div>
  </>
  )
}

export default ReservReg