import React from 'react'
import './Reserv.css';
import { useNavigate } from 'react-router-dom';

const Reserv = () => {

  const navigate = useNavigate();

  return (
      <div className='reserv-main-div'>
          <h1>예약 대기자 명단</h1>
        <div>
          <span onClick={()=>{
            navigate('/admin/patientInfo')
          }}>환자이름/나이</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>
  )
}

export default Reserv