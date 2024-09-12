import React from 'react'
import axios from 'axios'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FindPw = () => {
  const navigate = useNavigate();

  //비밀번호 찾기를 위해 입력한 아이디 주민번호 저장할 state변수
  const [findPwInfo, setFindPwInfo] = useState({
    memName: '',
    memId: '',
    citizenNum: ''
  })

  const citizenNum1 = useRef();
  const citizenNum2 = useRef();

  function changeFindPwInfo(e) {
    setFindPwInfo({
      ...findPwInfo,
      [e.target.name]: e.target.name == 'citizenNum' ?
        citizenNum1.current.value + '-' + citizenNum2.current.value :
        e.target.value
    })
  }

  //비밀번호 찾기 버튼 누르면 비밀번호 찾기
  function findPw() {
    axios.post('/api_member/findPw', findPwInfo)
      .then((res) => {
        if (res.data != '') {
          alert(`${findPwInfo.memName}님의 비밀번호는 ${res.data}입니다.`)
          navigate('/login')
        }
        else {
          alert('이름 혹은 아이디 혹은 주민번호를 확인해주세요')
        }
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <div>
      <h1>비밀번호 찾기</h1>
      <table>
        <tr>
          <td>이름</td>
          <td><input type='text' name='memName' placeholder='이름' onChange={(e) => { changeFindPwInfo(e) }} /></td>
        </tr>
        <tr>
          <td>아이디</td>
          <td><input type='text' name='memId' placeholder='아이디' onChange={(e) => { changeFindPwInfo(e) }} /></td>
        </tr>
        <tr>
          <td>주민번호</td>
          <td><input type='text' name='citizenNum' placeholder='주민번호 앞자리' onChange={(e) => { changeFindPwInfo(e) }} ref={citizenNum1} /> -
            <input type='password' name='citizenNum' placeholder='주민번호 뒷자리' onChange={(e) => { changeFindPwInfo(e) }} ref={citizenNum2} />
          </td>
        </tr>
      </table >
      <button type='button' onClick={(e) => { findPw() }}>비밀번호 찾기</button>
    </div>
  )
}

export default FindPw