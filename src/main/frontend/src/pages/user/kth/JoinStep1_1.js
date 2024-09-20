import React from 'react'
import { FaChildren, FaPeopleGroup } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const JoinStep1_1 = () => {

  const navigate = useNavigate();


  function changeJoinAgree(e){
    
  }

  return (
    <div className='join-div'>
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
          <div className='join-checklist-div'><p>약관동의 및 본인인증</p> <span>01</span></div>
          <div><p>회원정보입력</p> <span>02</span></div>
          <div><p>회원가입완료</p> <span>03</span></div>
        </div>
        <div className='join-imgdiv'>
          <img src='http://localhost:8080/images/bg_bar.gif' />
          <h5>통합회원기본 정보</h5>
        </div>
        <h1>회원 가입</h1>
        <div className='join-agree'>
          <div onClick={(e) => { navigate('/joinStep2') }}>
            <h3>의사등록</h3>
            <FaPeopleGroup className='icon'/>
          </div>
          <div onClick={(e) => { navigate('/joinStep2') }}>
            <h3>간호사 등록</h3>
            <FaChildren className='icon'/>
          </div>
          <div onClick={(e) => { navigate('/admin/join') }}>
            <h3>직원 등록</h3>
            {/* < className='icon'/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinStep1_1