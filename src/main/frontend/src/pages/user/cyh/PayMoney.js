import React, { useState } from 'react'
import '../../../reset.css';
import '../cyh/PayMoney.css'
import { useNavigate } from 'react-router-dom';

const PayMoney = () => {
  const navigate = useNavigate();

  return ( 
  <div className='pay-content'>
    <div className='pay'>
      <div className='pay-text'>
        <h3>📌그린대학병원 진료비 결제</h3>
        <div className='pay-money'>
          <h4>💰 총 진료비</h4>
          <span>￦ 348,510원</span>
        </div>
      </div>
      
      <div className='pay-box' >
        <h3>결제방법</h3>
        <div className='card-div'>
          카드결제
        </div>
        <div>
          {/* 은행카드박스 들어가야함 */}
          <div className='bank'>
            {/* <div>농협은행</div>
            <div>국민은행</div> */}
          </div>
        </div>
      </div>

      <div className='pay-box-div'>
        <div className='pay-box1'>
          <p>카카오페이</p>
        </div>
        <div className='pay-box1'>
          <p>토스페이</p>
        </div>
        <div className='pay-box1'>
          <p>네이버페이</p>
        </div>
      </div>

      <div>
        <button className='pay-btn' type='button' onClick={()=>{
          navigate('/user/moneyln')
        }} >결제취소</button>
        <button className='pay-btn' type='button' onClick={()=>{}} >결제하기</button>
      </div>
    </div>
  </div>
  )
}

export default PayMoney