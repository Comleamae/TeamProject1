import React from 'react'
import './MedicalHistory.css';
import { useNavigate } from 'react-router-dom';

const MedicalHistory = () => {

  const navigate = useNavigate()

  return (
    <div className="medical-info">
        <h1>진료 내역</h1>
        <div className='medical-info-div'>
          <div className='m-key-info'>
            <span>회원번호</span>
            <span>이름</span>
            <span className='mt-size'>내원이유</span>
          </div>

          <div className='m-value-info'>
            <span>1234-12</span>
            <span>김세훈</span>
            <span className='mt-size'>
              <textarea onChange={()=>{}} rows={5} cols={40}></textarea>
              {/* <input type='text' className='m-input-tag'/> */}
              </span>
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