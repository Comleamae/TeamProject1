import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewVisit = () => {

  // 입력 받은 모든 정보
  const [info, setInfo] = useState({
    patNum : '',
    age : '',
    gender : '',
    citizenNum : '',
    patEmail : '',
    address : ''
  });

  // DB에서 그냥 받아와서 출력할 진료과 정보
  const [mediDept, setMediDept] = useState([]);

  // 진료과 정보 보이게 하기
  useEffect(()=>{
    axios.get('/doctor/getMediDept')
    .then((res)=>{
      console.log(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  function changeInfo() {

  }
  
  function regInsert() {
    
  }

  return (
    <div className='new-main-div'>
      <h1>예약 등록</h1>
      <div>
        <div>접수를 위한 정보를 입력해주세요.</div>
        <div>
          <table>
            <thead></thead>
            <tbody>
            <tr> 
              <td>이 름</td>
              <td><input className='newInput' placeholder='이름을 입력해주세요.' type='text'
              name='patName' value={info.patName} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>나 이</td>
              <td><input className='newInput' placeholder='나이를 입력해주세요.' type='text'
              name='age' value={info.age} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>성 별</td>
              <td>
                <input type='radio' name='gender' value={'남'} checked={info.gender=='남'} 
                onChange={(e)=>{changeInfo(e)}}/>남
                <input type='radio' name='gender' value={'여'} checked={info.gender=='여'}
                onChange={(e)=>{changeInfo(e)}}/>여
              </td>
            </tr>
            <tr>
              <td>주민번호</td>
              <td><input className='newInput' placeholder='주민번호를 입력해주세요.' type='text'
              name='citizenNum' value={info.citizenNum} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td><input className='newInput' placeholder='이메일을 입력해주세요.' type='text'
              name='patEmail' value={info.patEmail} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>주소</td>
              <td><input className='newInput' placeholder='주소를 입력해주세요.' type='text'
              name='address' value={info.address} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>

              <td>진료과</td>
              <td>
                <select>
                  <option></option>
                  <option>내과</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>담당의</td>
              <td>
                <select>
                  <option>외과의사</option>
                  <option>내과의사</option>
                </select>
              </td>


            </tr>
            </tbody>
          </table>
          <div><button type='button' onClick={()=>{regInsert()}}>접수</button></div>
        </div> 
      </div>
    </div>
  )
}

export default NewVisit