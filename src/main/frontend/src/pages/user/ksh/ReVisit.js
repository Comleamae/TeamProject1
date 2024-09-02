import React, { useState } from 'react'
import './ReVisit.css';

const ReVisit = () => {


  return (
    <div className='re-main-div'>
      <h1>예약 등록</h1>
      <div>
        <div>접수를 위한 정보를 입력해주세요.</div>
        <div>
          <table>
            <tr> 
              <td>이 름</td>
              <td><input className='newInput' placeholder='이름을 입력해주세요.' type='text'
              name='patName' onChange={()=>{}}/></td>
            </tr>
            <tr>
              <td>주민번호</td>
              <td><input className='newInput' placeholder='주민번호를 입력해주세요.' type='text'
              name='citizenNum' onChange={()=>{}}/></td>
            </tr>
          </table>
          <div><button type='button' onClick={()=>{}}>접수</button></div>
        </div>
      </div>
    </div>
  )
}

export default ReVisit