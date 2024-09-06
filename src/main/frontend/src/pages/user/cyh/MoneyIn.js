import React from 'react'
import '../../../reset.css';
import '../cyh/MoneyIn.css'
import { Outlet, useNavigate } from 'react-router-dom'

const MoneyIn = () => {

  const navigate = useNavigate();

  return (
    <div className='pay-main-box'>
      <div className='money-content'>
        <div className='m-top-box'>
          <div className='m-checkbox'>
            [<input type='checkbox' /> 외래]
            [<input type='checkbox' /> 입원]
            ([<input type='checkbox' /> 퇴원]
            [<input type='checkbox' /> 중간])
          </div>
          <h4>진료비 계산서 · 영수증</h4>
        </div>

        <div className='user-infor'>

          <table className='user-table'>
            <tr>
              <td>등록번호</td>
              <td>환자성명</td>
              <td colSpan={2}>진료기간</td>
              <td>야간(공휴일)진료</td>
            </tr>
            <tr>
              <td>1354-52</td>
              <td>이야호</td>
              <td colSpan={2}>
                2024-05-21 부터 2024-08-26 까지
              </td>
              <td>
                <input type='checkbox' /> 야간
                <input type='checkbox' /> 공휴일
              </td>
            </tr>
            <tr>
              <td>진료과목</td>
              <td>질병군</td>
              <td>병실</td>
              <td>환자구분</td>
              <td>영수증번호</td>
            </tr>
            <tr>
              <td>일반내과</td>
              <td>식곤증</td>
              <td>1320호</td>
              <td>건강보험</td>
              <td>12516-0000-0000-01</td>
            </tr>
            </table>
        </div>  
        <div className='money-box'>
          <div className='left-right'>
            <table className='left-table'>
              <thead>
                <tr>
                  <td rowSpan={3}>항목</td>
                  <td colSpan={3}>급여</td>
                  <td colSpan={2}>비급여</td>
                </tr>
                <tr>
                  <td colSpan={2}>일부 본인부담</td>
                  <td>전액</td>
                  <td>선택</td>
                  <td>선택진료료</td>
                </tr>
                <tr>
                  <td>본인부담금</td>
                  <td>공단부담금</td>
                  <td>본인부담</td>
                  <td>진료료</td>
                  <td>이  외</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>진찰료</td>
                  <td>0000</td>
                  <td>10000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>입원료</td>
                  <td>2,600</td>
                  <td>228,680</td>
                  <td>1,377</td>
                  <td></td>
                  <td>480,000</td>
                </tr>
                <tr>
                  <td>식  대</td>
                  <td>22,600</td>
                  <td>22,680</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>투약 및 조제료</td>
                  <td>00</td>
                  <td>0000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>주사료</td>
                  <td>00</td>
                  <td>0000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>마취료</td>
                  <td>00</td>
                  <td>0000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {
  
                }
              </tbody>
            </table>
  
            <div className='money-memo'>
              <p>수납메모</p>
              <textarea placeholder='메모메모메모빔' />
              <button type='button'>
                진료 서비스<br/> 복사</button>
            </div>
          </div>
  
          <div className='left-right'>
            <table className='right-table'>
              <colgroup>
                <col width='20%'/>
                <col width='*'/>
                <col width='20%'/>
                <col width='*'/>
              </colgroup>
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
  
        <button className='pay-btn' type='button' onClick={()=>{navigate('/')}}>취소하기</button>
        <button className='pay-btn' type='button' onClick={()=>{navigate(`/payMoney`)}}>결제하기</button>
      </div>
      <Outlet />
    </div>
  )
}

export default MoneyIn