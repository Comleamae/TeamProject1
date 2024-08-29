import React, { useState } from 'react'
import './Reserv.css';
import { useNavigate } from 'react-router-dom';

const Reserv = () => {

  const navigate = useNavigate();

  // 예약 대기 환자 목록
  const [patientList, setPatientList] = useState([]);


  return (
    <div className='reserv-main-div'>
      <h1>예약 대기자 명단</h1>
      <div>
          <div className='reserv-list-name-div'>
            <span>대기순번</span>
            <span>이름</span>
            <span>나이</span>
          </div>
          <span onClick={()=>{navigate('/admin/patientInfo')}}></span>
          <span>2</span>
          <span>3</span>
  </div>
    </div>
  )
}

export default Reserv