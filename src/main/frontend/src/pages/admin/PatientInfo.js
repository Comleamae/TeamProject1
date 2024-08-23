import React from 'react'
import './PatientInfo.css';
import { useNavigate } from 'react-router-dom';

const PatientInfo = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='main-medical-div'>
        <div>
          <span>
            <h1>환자 정보 관리</h1>
          </span>
            <h4>신규/기존 환자입니다.</h4>
          <div>
            <div className='div-span'>
              <span>이름 : <input type='text'/></span>
              <span>나이 : <input type='text'/></span>
              <span>성별 : <input type='text'/></span>
              <span>주소 : <input type='text'/></span>
              <span>번호 : <input type='text'/></span>
            </div>
          </div>
          <div>
            <button type='button' onClick={()=>{alert(1)}}>등록</button>
            <button type='button' onClick={()=>{alert(1)}}>수정</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientInfo