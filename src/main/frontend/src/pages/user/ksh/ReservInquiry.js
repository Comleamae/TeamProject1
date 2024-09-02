import React from 'react'
import './ReservInquiry.css';
import { useLocation } from 'react-router-dom';

const ReservInquiry = () => {

  return (
    <div className='inquiry-main-div'>
      <div>
        <h1>예약자 대기 현황 </h1>
        <table>
          <tr>
            <td>대기순번</td>
            <td>이름</td>
            <td>나이</td>
            <td>진료현황</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ReservInquiry