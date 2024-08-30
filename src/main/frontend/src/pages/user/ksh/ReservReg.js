import React from 'react'
import './ReservReg.css';
import { useNavigate } from 'react-router-dom';

const ReservReg = () => {

  const navigate = useNavigate();

  return (
    <div className="reserv-main-div">
      <div className='sub-div'>
        <div onClick={()=>{navigate('/reservReg/newVisit')}}>신규방문</div>
        <div onClick={()=>{navigate('/reVisit')}}>재방문</div>
      </div>
    </div>
  )
}

export default ReservReg