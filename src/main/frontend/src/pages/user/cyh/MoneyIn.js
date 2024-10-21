import React, { useEffect, useState } from 'react'
import './MoneyIn.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const MoneyIn = () => {

  const navigate = useNavigate();
      
  const [deskInfo, setDeskInfo] = useState([]);

  useEffect(()=>{
    axios.post('/doctor/payDesk', deskInfo)
    .then((res)=>{
      console.log(res.data)
      setDeskInfo(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  return (
    <div className='pay-main-box'>
      <div className='user-infor'>
        <table className='user-table'>
          <tr>
            <td>진료번호</td>
            <td>환자번호</td>
            <td></td>
          </tr>
          
            {
              deskInfo.map((desk, i)=>{
                return(
                <tr key={i}>
                  <td>{desk.deskNum}</td>
                  <td>
                    {desk.treNum}
                  </td>
                  <td></td>
                </tr>
                );
              })
            }
          
          </table>
      </div>

      <div className='money-content'>
        <div className='m-top-box'>
          <div className='m-checkbox'>
            [<input type='checkbox' /> 외래]
            [<input type='checkbox' /> 입원]
            ([<input type='checkbox' /> 퇴원]
            [<input type='checkbox' /> 중간])
          </div>
          <h5> 진료비 계산서 · 영수증</h5>
        </div>

        <div className='money-box'>
          <div className='left-right'>
            <table className='left-table'>
              <thead>
                <tr>환자번호
                  <td>1</td>
                </tr>
                <tr>이름
                  <td>ABC</td>
                </tr>
                <tr>나이
                  <td>25</td>
                </tr>
                <tr>성별
                  <td>남</td>
                </tr>
                <tr>주민번호
                  <td>990101-4747291</td>
                </tr>
                <tr>이메일
                  <td>abcd@gmail.com</td>
                </tr>
                <tr>진료과
                  <td>내과</td>
                </tr>
                <tr>담당의
                  <td>김세훈</td>
                </tr>
                <tr>병명
                  <td>감기</td>
                </tr>
                <tr>증상
                  <td>기침 많이함</td>
                </tr>
                <tr>진료일
                  <td>2024-10-07</td>
                </tr>
                <tr>결제여부
                  <td>N</td>
                </tr>
                  
              </thead>
            </table>
          </div>
  
          <div className='left-right'>
            <table className='right-table'>
              <colgroup>
                <col width='20%'/>
                <col width='*'/>
                <col width='20%'/>
                <col width='*'/>
              </colgroup>
              <thead>
                <tr>
                  <td rowSpan={2}>항목</td>
                  <td colSpan={2}>급여</td>
                  <td>비급여</td>
                </tr>
                <tr>
                  <td>본인부담금</td>
                  <td>공단부담금</td>
                  <td>진료료</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>진찰료</td>
                  <td>0000</td>
                  <td>10000</td>
                  <td></td>
                </tr>
                <tr>
                  <td>입원료</td>
                  <td>2,600</td>
                  <td>228,680</td>
                  <td>1,377</td>

                </tr>
                <tr>
                  <td>식  대</td>
                  <td>22,600</td>
                  <td>22,680</td>
                  <td></td>
                </tr>
                <tr>
                  <td>투약 및 조제료</td>
                  <td>00</td>
                  <td>0000</td>
                  <td></td>
                </tr>
                <tr>
                  <td>주사료</td>
                  <td>00</td>
                  <td>0000</td>
                  <td></td>
                </tr>
                <tr>
                  <td>마취료</td>
                  <td>00</td>
                  <td>0000</td>
                  <td></td>
                </tr>
                {
  
                }
              </tbody>
              <div className='money-memo'>
              <p>수납메모</p>
              <textarea placeholder='메모메모메모빔' />
              <button type='button'>
                진료 서비스<br/> 복사</button>
            </div>
            </table>
          </div>
        </div>
  
        <button className='pay-btn' type='button' onClick={()=>{navigate('/')}}>
          취소하기
        </button>
        <button className='pay-btn' type='button' onClick={()=>{navigate(`/payMoney`)}}>
          결제하기
        </button>

      </div>

    </div>
  )
}

export default MoneyIn