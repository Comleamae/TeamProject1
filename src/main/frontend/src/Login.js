import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {


  const navigate = useNavigate()


  return (
    <div className='login-container'>
      <div><h3>로그인</h3></div>
      <div className='login-form-div'>
        <div className='login-div'>
          <div><input placeholder='아이디'></input></div>
          <div><input placeholder='비밀번호'></input></div>
          <button type='button' className='btn-div' onClick={(e)=>{navigate('/join')}}>회원가입</button>
        </div>
        <button type='button' className='btn-div' onClick={(e)=>{navigate('/')}}> 로그인</button>
      </div>
    </div>
  )
}

export default Login