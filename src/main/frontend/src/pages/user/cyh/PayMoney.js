import React, { useState } from 'react'
import '../../../reset.css';
import '../cyh/PayMoney.css'

const PayMoney = () => {

  function payClick(){
    const bankdiv = document.getElementById('card-div');

    if(bankdiv.style.display === 'none'){
      bankdiv.style.display = 'block';
    }else{
      bankdiv.style.display = 'none';
    }
  }


  return (
    <div className='pay-content'>

      <h3>그린대학병원 진료비 결제</h3>
      
      <div className='pay-box' >
        <p id='card-div'> 카드결제 </p>
        <div>
          <ul className='bank'>
            <li>ㅇㅇ은행</li>
            <li>ㅇㅇ은행</li>
            <li>ㅇㅇ은행</li>
            <li>ㅇㅇ은행</li>
            <li>ㅇㅇ은행</li>
          </ul>
        </div>
      </div>

      <div className='pay-box-div'>
        <div className='pay-box1'> 카카오페이 </div>
        <div className='pay-box1'> 토스페이 </div>
        <div className='pay-box1'> 네이버페이 </div>
      </div>

      <div></div>
    </div>
  )
}

export default PayMoney