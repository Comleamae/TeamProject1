import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({setLoginInfo}) => {

  const navigate = useNavigate()

  //로그인 시 입력한 정보
  const [loginData, setLoginData] = useState({
    memId: '',
    memPw: ''
  });

  //입력한 정보로 바꾸기
  function changeLoginData(e) {
    const newData = {
      ...loginData,
      [e.target.name]: e.target.value
    }
    setLoginData(newData)
  }
  
  //로그인 버튼 클릭시 실행
  function login() {
    axios.post('/api_member/login', loginData)
      .then((res) => {
        // 로그인 가능 시
        if (res.data != '') { 
          alert('환영합니다.')
          const loginInfo = {
            memId: res.data.memId,
            memPw: res.data.memPw
          }
          window.sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
        }
        else {
          alert('ID 혹은 PW를 확인하세요.')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='login-container'>
      <div><h3>로그인</h3></div>
      <div className='login-form-div'>
        <div className='login-div'>
          <div><input type='text' name='memId' placeholder='아이디' onChange={(e) => { changeLoginData(e) }}></input></div>
          <div><input type='password' name='memPw' placeholder='비밀번호' onChange={(e) => { changeLoginData(e) }}></input></div>
          <button type='button' className='btn-div' onClick={(e) => { navigate('/join') }}>회원가입</button>
        </div>
        <button type='button' className='btn-div' onClick={(e) => { login() }}> 로그인</button>
      </div>
    </div>
  )
}

export default Login