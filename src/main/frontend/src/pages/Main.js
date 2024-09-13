import React from 'react'
import './Main.css'
import { useNavigate } from 'react-router-dom';
import { LuCalendarClock } from "react-icons/lu";
import { IoCardOutline } from "react-icons/io5"; //카드 아이콘 
import { IoNewspaperOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr"; //찾아오시는길 아이콘
import MedicalCenter from './MedicalCenter';
import SideList from './SideList';



const Main = () => {

  const navigate = useNavigate();

  return (
    
    <div className='intro-div'> 
      {/* 병원이미지 배너*/}
      {/* <img className='banner-main-img' src='http://localhost:8080/images/병원병원.jpg'/> */}
      {/* <img className='banner-main-img' src='http://localhost:8080/images/병원.jpg'/> */}
      <div className='video'>
        <video className='main-video' autoPlay loop muted src='http://localhost:8080/images/병원.mp4' />
      </div>

      <div className='img-text'>
        <h3>Lead the Standard Build the Trust</h3>
        <p>세계 의료의 표준을 선도하는 국민의 병원, 그린대학교병원</p>
      </div>

      <div className='main-list-div'>
        {/* 진료/수납결제/의료진 박스 */}
        <div className='self-box'>
          <div className='sub-idex-box' onClick={(e) => { navigate('/') }}>
            <div className='sub-inbox'>
              <FaHandHoldingMedical className='icon' />
              <p className='main-p'>첫 방문 상담</p>
              <span className='main-span'>처음 방문하셨나요?</span>
              <button type='button' className='btn'>신청</button>
            </div>
          </div>

          <div className='sub-idex-box' onClick={(e) => { navigate('/reservReg') }}>
            <div className='sub-inbox'>
              <LuCalendarClock className='icon' />
              <p className='main-p'>진료예약</p>
              <span className='main-span'>진료예약 하러가기</span>
            </div>
          </div>
  
          <div className='sub-idex-box' onClick={(e) => { navigate(`searchStaff`) }}>
          <div className='sub-inbox'>
            <FaUserDoctor className='icon' />
            <p className='main-p'>의료진/<br /> 의료과 찾기</p>
            <button style={{marginTop:'-50px'}} type='button' className='btn'>찾기</button>
            </div>
          </div>

          <div className='sub-idex-box' onClick={(e) => { navigate('/moneyIn') }}>
          <div className='sub-inbox'>
            <IoCardOutline className='icon' />
            <p className='main-p'>진료비 결제</p>
            <span className='main-span'>
              기다리지말고, <br/>
              진료비 결제하세요!
            </span>
            </div>
          </div>
  
          <div className='sub-idex-box' onClick={(e) => { navigate('/clinicPrint') }}>
            <div className='sub-inbox'>
              <IoNewspaperOutline className='icon' />
              <p className='main-p'> 증명서 발급</p>
              <span className='main-span'>증명서/제증명 발급</span>
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

      {/* 사이드 */}
      <SideList />

      {/* 메디컬 센터 */}
      <MedicalCenter />





    </div>
    
  )
}

export default Main