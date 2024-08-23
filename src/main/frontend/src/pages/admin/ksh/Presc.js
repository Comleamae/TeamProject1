import React from 'react'
import './Presc.css';

const Presc = () => {
  return (
    <div>
      <div className='main-medical-div'>
      <div className='div-span'>
          <span>
            <h1>처방 내역</h1>
          </span>
          <span>00 환자</span>
          <span>진단명 : <input type='text'/></span>
          <span>내복약 : </span>

          <div><button type='button'>약 추가</button></div>
          <div><button type='button'>발급</button></div>
        </div>
      </div>
    </div>
  )
}

export default Presc