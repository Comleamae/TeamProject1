import React, { useEffect, useState } from 'react'
import './PatientInfo.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PatientInfo = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const patient = location.state?.patient;

  // 직접 입력한 환자 정보 관리하기
  const [phoneNum, setPhoneNum] = useState('');
  const [addr, setAddr] = useState('');
  const [visitRoute, setVisitRoute] = useState('지인 추천');
  const [visitReason, setVisitReason] = useState('');

  return (
      <div className="detail-info">
        <h1>환자 정보</h1>
        <div className='patient-info'>
          <div className='p-key-info'>
            <span>회원번호</span>
            <span>이름</span>
            <span>나이</span>
            <span>성별</span>
            <span>주민등록번호</span>
            <span>전화번호</span>
            <span>주소</span>
            <span>내원경로</span>
            <span>내원이유</span>
          </div>

          <div className='p-value-info'>
            <span>{patient?.patNum}</span>
            <span>{patient?.patName}</span>
            <span>{patient?.age}</span>
            <span>{patient?.gender}</span>
            <span>{patient?.citizenNum}</span>
            <span>
              <input type='text' className='p-input-tag' placeholder='전화번호'
                value={phoneNum} onChange={(e)=>{setPhoneNum(e.target.value)}}
              /></span>
            <span>
              <input type='text' className='p-input-tag' placeholder='주소'
                value={addr} onChange={(e)=>{setAddr(e.target.value)}}
              /></span>
            <span>
              <select className='p-select-tag'
                value={visitRoute} onChange={(e)=>{setVisitRoute(e.target.value)}}
              >
                <option value={'지인 추천'}>지인 추천</option>
                <option value={'인터넷 검색'}>인터넷 검색</option>
                <option value={'광고'}>광고</option>
              </select>
            </span>
            <span>
              <input type='text' className='p-input-tag' placeholder='내원이유'
                value={visitReason} onChange={(e)=>{setVisitReason(e.target.value)}}/></span>
          </div>
        </div>
        <div className='p-insert-btn'>
          <button type='button' onClick={()=>{
            navigate('/admin/medicalHistory',
                {state: {
                  patient,
                  phoneNum,
                  addr,
                  visitRoute,
                  visitReason
                }}
            )
          }}>정보 등록</button></div>
      </div>        
  )
}

export default PatientInfo