import React from 'react'
import '../reset.css'
import './Main.css'
import { LuCalendarClock } from "react-icons/lu";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoCardOutline } from "react-icons/io5"; //카드 아이콘 
import { IoNewspaperOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import MedicalCenter from './MedicalCenter';
import SideList from './SideList';
import { GrMapLocation } from "react-icons/gr"; //찾아오시는길 아이콘

const Main = () => {

  const navigate = useNavigate();

  return (
    
    <div className='intro-div'>
      
      {/* 병원이미지 배너*/}
      <img className='banner-main-img' src='http://localhost:8080/images/병원병원.jpg'/>
      {/* <img className='banner-main-img' src='http://localhost:8080/images/병원.jpg'/> */}
      <div className='img-text'>
        <h3>안녕하세요 그린대학교병원입니다</h3>
        <p>우리가 국내 TOP</p>
      </div>

      <div className='main-list-div'>
        {/* 진료/수납결제/의료진 박스 */}
        <div className='self-box'>
          <div className='sub-idex-box' onClick={(e) => { navigate('/') }}>
            <div className='sub-inbox'>
              <FaHandHoldingMedical className='icon' />
              <p>첫 방문 상담</p>
              <span>그린대학교병원이<br />처음이신가요?</span>
            </div>
          </div>

          <div className='sub-idex-box' onClick={(e) => { navigate('/reservReg') }}>
          <div className='sub-inbox'>
            <LuCalendarClock className='icon' />
            <p>온라인 진료예약</p>
            <span>편하게 온라인으로<br />진료예약 하러가기</span>
            </div>
          </div>
  
          <div className='sub-idex-box' onClick={(e) => { navigate(`/`) }}>
          <div className='sub-inbox'>
            <FaUserDoctor className='icon' />
            <p>의료진/<br /> 의료과 찾기</p>
            <button type='button' className='btn'>찾기</button>
            </div>
          </div>

          <div className='sub-idex-box' onClick={(e) => { navigate('/moneyIn') }}>
          <div className='sub-inbox'>
            <IoCardOutline className='icon' />
            <p>진료비 결제</p>
            <span>
              기다림 NO!
              온라인으로 진료비 결제하세요!
            </span>
            </div>
          </div>
  
          <div className='sub-idex-box' onClick={(e) => { navigate('/clinicPrint') }}>
            <div className='sub-inbox'>
              <IoNewspaperOutline className='icon' />
              <p>증명서 발급</p>
              <span>증명서/제증명 발급</span>
            </div>
          </div>

          <div className='sub-idex-box' onClick={(e) => { navigate('/') }}>
            <div className='sub-inbox'>
              <GrMapLocation className='icon' />
              <p className='main-p'>찾아오시는 길</p>
              <span className='main-span'>그린대학교병원으로<br />오시는 길</span>
            </div>
          </div>

        </div>
        
        {/*  두번째 줄 */}
        {/* <div className='bottom-box'>
          
        </div> */}


      </div>
      <div className='background-div'></div>

      {/* 메디컬 센터 */}
      <MedicalCenter />

      {/* 사이드 */}
      <SideList />




    </div>
    
  )
}

export default Main