import React, { useState } from 'react'
import './NewVisit.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PatientInfo from '../../admin/ksh/PatientInfo';

const NewVisit = () => {

  const navigate = useNavigate();

  // 입력한 값을 관리하기 위한 state 변수
  const [info, setInfo] = useState({
    patName : '',
    age : '',
    gender : '',
    citizenNum : '',
    patEmail : '',
    address : ''
  });

  // 입력한거 바뀌면 실행될 내용
  function changeInfo(e){
    setInfo({
      ...info,
      [e.target.name] : e.target.value
    })
  }

  // 접수 누르면 실행
  function regInsert(){
    axios.post('/patient/regInsert', info)
    .then((res)=>{
      console.log(res.data)
      setInfo(res.data)
      navigate('/user/reservReg')
    })
    .catch((error)=>{
      console.log(error)
    })
  }  
 

  return (
    <div className='new-main-div'>
      <h1>예약 등록</h1>
      <div>
        <div>접수를 위한 정보를 입력해주세요.</div>
        <div>
          <table>
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
          </table>
          <div><button type='button' onClick={()=>{regInsert()}}>접수</button></div>
        </div>
      </div>
    </div>
  )
}

export default NewVisit