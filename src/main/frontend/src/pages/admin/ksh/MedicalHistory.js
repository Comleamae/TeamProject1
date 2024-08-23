import React from 'react'
import './MedicalHistory.css';

const MedicalHistory = () => {
  return (
    <div>
      <div className='main-medical-div'>
        <div className='div-span'>
          <span>
            <h1>진료 내역</h1>
          </span>
          <span>00 환자 내원일 <input type='date'/></span>
          <span>진단명 : <input type='text'/></span>
          <span>진단소견 : 
          <textarea rows={5} cols={30}></textarea>
          </span>
          <span>내원일자 : <input type='date'/></span>
          <div><button type='button'>등록</button></div>
        </div>
      </div>
    </div>
  )
}

export default MedicalHistory