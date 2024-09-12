import React from 'react'
import { useNavigate } from 'react-router-dom'

const JoinStep3 = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='user-div'>
        <h1>통합회원가입</h1>
        <p>그린대학교병원 통합회원가입을 환영합니다🎉🎉</p>
      </div>
      <div className='user-login-txt'>
        <h2>
          <strong>그린대학교병원 통합회원가입을 환영합니다.</strong><br />
          한 번의 통합회원 가입으로 모든 사이트 이용이 가능합니다.
        </h2>
      </div>

      <div className='join-box'>
        <div className='join-checklist'>
          <div><p>약관동의 및 본인인증</p> <span>01</span></div>
          <div className='join-checklist-div'><p>회원정보입력</p> <span>02</span></div>
          <div><p>회원가입완료</p> <span>03</span></div>
        </div>
        <div className='join-imgdiv'>
          <img src='http://localhost:8080/images/bg_bar.gif' />
          <h5>통합회원기본 정보</h5>
        </div>
        <h3>회원가입을 축하드립니다</h3>
      </div>
      <button type='button' onClick={(e)=>{navigate('/login')}}>로그인 하기</button>
      <button type='button' onClick={(e)=>{navigate('/')}}>메인화면으로</button>
    </div>
  )
}

export default JoinStep3