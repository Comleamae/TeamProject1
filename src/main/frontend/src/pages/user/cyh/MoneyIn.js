import React from 'react'
import '../../../reset.css';
import '../cyh/MoneyIn.css'
import { useNavigate } from 'react-router-dom'

const MoneyIn = () => {
  const navigate = useNavigate();
  return (
    <div className='money-content'>
      <h3>진료비 수납</h3>
      <div className='money-box'>
        <div className='left-box'>
          <div>
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
                  <td>진료서비스</td>
                  <td>지정의</td>
                  <td>견적금액</td>
                  <td>수량</td>
                  <td>회차</td>
                  <td>진료금액(VAT)</td>
                  <td>수납금액</td>
                </tr>
                {

                }
              </tbody>
            </table>
          </div>

          <div className='money-memo'>
            <div>수납메모</div>
            <div><textarea /></div>
            <div>진료 서비스 복사</div>
          </div>
          <div>
            <div>상담정보</div>
            <div>수납정보</div>
            <div>진료차트</div>
            <div>예약정보</div>
          </div>
        </div>

        <div className='right-box'>
          <div>
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
          <div>2</div>
          <div>3</div>
        </div>
      </div>

      <div onClick={()=>{navigate('/user/payMoney')}}>결제하기</div>
    </div>
  )
}

export default MoneyIn