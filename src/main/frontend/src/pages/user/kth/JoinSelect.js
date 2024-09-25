import React from 'react'
import './JoinStep2.css'
import { useNavigate } from 'react-router-dom'
import { BsFillPeopleFill } from "react-icons/bs";
import { GoPeople } from "react-icons/go"; //라인 사람
import { FaPeopleGroup } from "react-icons/fa6"; //사람아이콘
import { FaChildren } from "react-icons/fa6"; //어린이 아이콘
import { FaUserDoctor } from "react-icons/fa6"; //의사아ㅏ이콘

const JoinSelect = () => {

  const navigate = useNavigate();
  return (
<div className='join-div13'>
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
        <div className='join-agree'>
          <div onClick={(e) => { navigate('/joinStep1') }}>
            <h3>일반인 회원가입</h3>
            <p>만 14세 이상 내국인</p>
            <GoPeople className='icon1' style={{color:'#2B58B3'}}/>
          </div>
          <div onClick={(e) => { navigate('/joinStep1') }}>
            <h3>어린이 회원가입</h3>
            <p>만 14세 미만 내국인</p>
            <FaChildren className='icon1'style={{color:'#FFCF00'}} />
          </div>
          <div onClick={(e) => { navigate('/joinStep1') }}>
            <h3>외국인 회원가입</h3>
            <p>외국인 국내 거주자</p>
            <GoPeople className='icon1' style={{color:'#A6C21F'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinSelect