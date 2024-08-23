import React from 'react'
import './Reserv.css';

const Reserv = () => {
  return (
    <div>
      <div className='main-medical-div'>
        <div>
          <span>
            <h1>환자 예약 정보 조회</h1>
          </span>
          <div>
            
            <span className='span-cursor'onClick={(e)=>{alert(1)}}>환자이름</span> 환자나이
            
          </div>
          <div><button type='button'>조회</button></div>
        </div>
      </div>
    </div>
  )
}

export default Reserv