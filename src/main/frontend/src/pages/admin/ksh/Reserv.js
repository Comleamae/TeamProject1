import React, { useEffect, useState } from 'react'
import './Reserv.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Reserv = () => {

  const navigate = useNavigate();

  // 예약 대기 환자 목록
  const [patientList, setPatientList] = useState([]);

  useEffect(()=>{
    axios.get('/patient/waitList')
    .then((res)=>{
      console.log(res.data)
      setPatientList(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  return (
    <div className='reserv-main-div'>
      <h1>예약 대기자 명단</h1>
      <div className='reserv-list-name-div'>
        <div>순번</div>
        <div>이름</div>
        <div>나이</div>
      </div>
      <div className='real-reserv-list-div'>
        {patientList.map((patient, i) => (
          <div key={i} className='reserv-item-div'>
            <div className='number-div'>
              <span>{patient.patNum}</span>
            </div>
            <div className='name-div'>
              <span onClick={()=>{navigate('/admin/patientInfo', {state: {patient}})}}>
                {patient.patName}
              </span> 
            </div>
            <div className='age-div'>
              <span>{patient.age}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reserv