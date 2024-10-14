import React from 'react'
import './JoinStep2.css'
import { useNavigate } from 'react-router-dom'
import { BsCheck2Square } from "react-icons/bs";

const JoinStep3 = () => {

  const navigate = useNavigate();

  return (
    <div className='join-div11'>
      <div className='user-div'>
        <h1 className='joinh1'>통합회원가입</h1>
        <p>그린대학교병원 통합회원가입을 환영합니다</p>
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
          <div><p>회원정보입력</p> <span>02</span></div>
          <div className='join-checklist-div'><p>회원가입완료</p> <span>03</span></div>
        </div>
        <div className='join-imgdiv'>
          <img src='http://localhost:8080/images/bg_bar.gif' />
          <h5>회원가입완료</h5>
        </div>
        <div className='join-box-text'>
          <div>
            <BsCheck2Square className='iicon' />
            <p style={{fontSize:'25px', fontWeight:'bold'}}>
            그린대학교병원 회원으로<br/> 가입해 주셔서 감사합니다!
            </p>
          </div>
        </div>
      </div>
      <div className='bb11'>
        <button className='btn111' type='button' onClick={(e)=>{navigate('/login')}}>로그인 하기</button>
        <button  className='btn111' type='button' onClick={(e)=>{navigate('/')}}>메인화면으로</button>
      </div>
    </div>
  )
}

export default JoinStep3