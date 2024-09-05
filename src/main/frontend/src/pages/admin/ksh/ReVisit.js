import React from 'react'
import './ReVisit.css';

const ReVisit = () => {
  return (

    <div className='re-main-div'>
      <h1>접수 등록</h1>
      <div>
        <div>접수를 위한 정보를 입력해주세요.</div>
        <table>
            <thead></thead>
            <tbody>
            <tr> 
              <td>이 름</td>
              <td>
                <input className='ip-tag' placeholder='이름을 입력해주세요.' type='text'/>
              </td>
            </tr>
            <tr> 
              <td>주민번호</td>
              <td>
                <input className='ip-tag' placeholder='주민번호 입력해주세요.' type='text'/>
              </td>
            </tr>
            <tr> 
              <td>진료과</td>
              <td>
                <select></select>
              </td>
            </tr>
            <tr> 
              <td>담당의ㅣ</td>
              <td>
              <select></select>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ReVisit