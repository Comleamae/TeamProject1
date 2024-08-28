import React from 'react'
import './PatientInfo.css';
import { useNavigate } from 'react-router-dom';

const PatientInfo = () => {

  const navigate = useNavigate();

  return (
      <div className="detail-info">
        <h1>환자 정보</h1>
        <div className='patient-info'>
          <div className='p-key-info'>
            <span>회원번호</span>
            <span>이름</span>
            <span>나이</span>
            <span>성별</span>
            <span>생년월일</span>
            <span>주민등록번호</span>
            <span>전화번호</span>
            <span>주소</span>
            <span>최종내원일</span>
            <span>내원경로</span>
            <span>내원이유</span>
          </div>

          <div className='p-value-info'>
            <span>1234-12</span>
            <span>김세훈</span>
            <span>33</span>
            <span>남</span>
            <span>2024-08-28</span>
            <span>999999-1******</span>
            <span>010-1111-2222</span>
            <span><input type='text' className='p-input-tag'/></span>
            <span><input type='date'/></span>
            <span>
              <select className='p-select-tag'>
                <option>지인 추천</option>
                <option>인터넷 검색</option>
                <option>광고</option>
              </select>
            </span>
            <span><input type='text' onChange={()=>{}} className='p-input-tag'/></span>
          </div>
        </div>
        <div className='p-insert-btn'>
          <button type='button' onClick={()=>{
            navigate('/admin/medicalHistory')
          }}>정보 등록</button></div>
      </div>        
  )
}

export default PatientInfo