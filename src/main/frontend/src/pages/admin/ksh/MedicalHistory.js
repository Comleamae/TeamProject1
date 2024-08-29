import React, { useEffect } from 'react'
import './MedicalHistory.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MedicalHistory = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {patient, phoneNum, addr, visitRoute, visitReason} = location.state || {};

  console.log("데이터:", patient, phoneNum, addr, visitRoute, visitReason )

  return (
    <div className="medical-info">
        <h1>진료 내역</h1>
        <div className='medical-info-div'>
          <div className='m-key-info'>
            <span>회원번호</span>
            <span>이름</span>
            <span>내원이유</span>
            <span>진단내역</span>
          </div>

          <div className='m-value-info'>
            <span>{patient?.patNum}</span>
            <span>{patient?.patName}</span>
            <span>{visitReason?.visitReason}</span>
            <span><input type='text' placeholder='진단내역'/></span>
          </div>
        </div>
        <div className='m-insert-btn'>
          <button type='button' onClick={()=>{
            navigate('/admin/Presc')
          }}>처방전 발급</button></div>
      </div>        
  )
}

export default MedicalHistory