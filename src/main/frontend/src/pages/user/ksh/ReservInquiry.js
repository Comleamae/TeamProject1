import React, { useEffect, useState } from 'react'
import './ReservInquiry.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ReservInquiry = () => {

  const navigate = useNavigate();
  const [checkList, setCheckList] = useState([]);
  
  useEffect(()=>{
    axios.get('/patient/checkList')
    .then((res)=>{
      console.log(res.data)
      setCheckList(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  return (
    <div className='inquiry-main-div'>
      <div>
        <h1>예약자 대기 현황 </h1>
        <table>
          <thead>
            <tr>
              <td>대기순번</td>
              <td>이름</td>
              <td>나이</td>
              <td>진료현황</td>
            </tr>
          </thead>
          <tbody>
          {
            checkList.map((check, i)=>{
              return(
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{check.patName}</td>
                  <td>{check.age}</td>
                  <td>{check.recepVO.recepStatus}</td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReservInquiry