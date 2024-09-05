import React, { useState } from 'react'
import '../../../reset.css';
import '../cyh/PayMoney.css'
import { useNavigate } from 'react-router-dom';

const PayMoney = () => {
  const navigate = useNavigate();



  function isShow(id){
    if (document.getElementById(id).style.display=="none") document.getElementById(id).style.display="block"; //표시하게 하기

    else document.getElementById(id).style.display="none"; //안보이게 하기
  }

  return ( 
  <div className='pay-content'>
    <div className='pay'>
      <div className='pay-text'>
        <h3>그린대학병원 진료비 결제</h3>
        <div className='pay-money'>
          <h4>총 진료비</h4>
          <span>￦ 348,510원</span>
        </div>
      </div>
      
      <div className='pay-box' >
        <h3>결제방법</h3>
        <div className='card-div'>
          카드결제
        </div>
        <div id='bank-box' onClick={()=>{isShow()}}>
          {/* 은행카드박스 들어가야함 */}
          <div className='bank-list'>
            <div className='bank'>농협은행</div>
            <div className='bank'>KB국민은행</div>
            <div className='bank'>우리은행</div>
            <div className='bank'>하나은행</div>
            <div className='bank'>신한은행</div>
            <div className='bank'>카카오뱅크</div>
            <div className='bank'>토스뱅크</div>
            <div className='bank'>IBK기업</div>
            <div className='bank'>카카오뱅크</div>
          </div>
        </div>
      </div>

      <div className='pay-box-div'>
        <div className='pay-box1'>
          <p>
            <img className='bank-img' src='http://localhost:8080/images/카카오.png' />
          </p>
        </div>
        <div className='pay-box1'>
          <p><img className='bank-img' src='http://localhost:8080/images/토스.png' /></p>
        </div>
        <div className='pay-box1'>
          <p><img className='bank-img' src='http://localhost:8080/images/네이버.png' /></p>
        </div>
      </div>

      <div>
        <button className='pay-btn' type='button' onClick={()=>{
          navigate('/moneyln')
        }} >결제취소</button>
        <button className='pay-btn' type='button' onClick={()=>{}} >결제하기</button>
      </div>
    </div>
  </div>
  )
}

export default PayMoney