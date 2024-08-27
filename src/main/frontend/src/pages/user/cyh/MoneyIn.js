import React from 'react'
import '../../../reset.css';
import '../cyh/MoneyIn.css'
import { useNavigate } from 'react-router-dom'

const MoneyIn = () => {
  const navigate = useNavigate();
  
  return (
    <div className='money-content'>
      <div className='text-div'>진료비 수납</div>  
      <div className='money-box'>
        <div className='left-right'>
          <table className='left-table'>
            <thead>
              <tr>
                <td>진료서비스</td>
                <td>지정의</td>
                <td>견적금액</td>
                <td>수량</td>
                <td>회차</td>
                <td>진료금액(VAT)</td>
                <td>수납금액</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>진통제어쩌구</td>
                <td>오박사</td>
                <td>22500</td>
                <td>1</td>
                <td>3회차</td>
                <td>22500</td>
                <td>22500</td>
              </tr>
              <tr>
                <td>진통제어쩌구</td>
                <td>오박사</td>
                <td>22500</td>
                <td>1</td>
                <td>3회차</td>
                <td>22500</td>
                <td>22500</td>
              </tr>
              <tr>
                <td>진통제어쩌구</td>
                <td>오박사</td>
                <td>22500</td>
                <td>1</td>
                <td>3회차</td>
                <td>22500</td>
                <td>22500</td>
              </tr>
              <tr>
                <td>진통제어쩌구</td>
                <td>오박사</td>
                <td>22500</td>
                <td>1</td>
                <td>3회차</td>
                <td>22500</td>
                <td>22500</td>
              </tr>

              {

              }
            </tbody>
          </table>

          <div className='money-memo'>
            <p>수납메모</p>
            <textarea placeholder='메모메모메모빔' />
            <button type='button'>진료 서비스 복사</button>
          </div>
        </div>

        <div className='left-right'>
          <table className='right-table'>
            <tr>
              <td>견적금액</td>
              <td>0000000</td>
              <td>결제일자</td>
              <td><input type='date'/></td>
            </tr>
            <tr>
              <td>진료금액(VAT)</td>
              <td>0000000</td>
              <td>실수납금액</td>
              <td>00000</td>
            </tr>
            <tr>
              <td>매출금액</td>
              <td>0000000</td>
              <td>카드결제</td>
              <td>0000000</td>
            </tr>
            <tr>
              <td>미수금액</td>
              <td>0</td>
              <td>현금결제</td>
              <td>00000</td>
            </tr>
            <tr>
              <td>환불금액</td>
              <td>0000000</td>
              <td>추가할인</td>
              <td>0000000</td>
            </tr>
          </table>
        </div>
      </div>

      <button type='button' onClick={()=>{navigate('/')}}>취소하기</button>
      <button type='button' onClick={()=>{navigate('/user/payMoney')}}>결제하기</button>
    </div>
  )
}

export default MoneyIn