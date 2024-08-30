import React from 'react'
import '../reset.css'
import './Main.css'
import { LuCalendarClock } from "react-icons/lu";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsCreditCard } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import MedicalCenter from './MedicalCenter';
import SideList from './SideList';
import { GrMapLocation } from "react-icons/gr"; //찾아오시는길 아이콘

const Main = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const hideMainRoutes = ['/user','/admin']; // 이동할때 숨김

  //목록있는지 확인
  const shouldHideMain = hideMainRoutes.includes(location.pathname);
  if(shouldHideMain){
    return null; //main 숨기기 
  }

  console.log(location.pathname);


  return (
    
    <div className='intro-div'>
      
      {/* 병원이미지 배너*/}
      <img className='banner-main-img' src='http://localhost:8080/images/병원병원.jpg'/>
      {/* <img className='banner-main-img' src='http://localhost:8080/images/병원.jpg'/> */}
      <div className='img-text'>
        <h3>안녕하세요 그린대학교병원입니다</h3>
        <p>우리가 국내 TOP</p>
      </div>

      {/* 진료/수납결제/의료진 박스 */}
      <div className='self-box'>
        <div className='sub-idex-box' onClick={(e) => { navigate('/user/clinicPrint') }}>
          <FaHandHoldingMedical className='icon' />
          <p>진료</p>
          <span>진료볼수있는곳</span>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate('/user/clinicPrint') }}>
          <LuCalendarClock className='icon' />
          <p>온라인<br />진료예약</p>
          <span>편하게 온라인으로 진료예약 하러가기</span>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate(`/admin/moneyln`) }}>
          <FaUserDoctor className='icon' />
          <p>의료진/<br /> 의료과 찾기</p>
          <button type='button' className='btn'>찾기</button>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate('/user/clinicPrint') }}>
        <GrMapLocation className='icon' />
          <p>찾아오시는 길</p>
          <span>제증명 발급에 대한 안내</span>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate(`/admin/moneyln`) }}>
          <BsCreditCard className='icon' />
          <p>진료비 결제</p>
          <span>기다리지말고 온라인으로 진료비 결제하세요!</span>
        </div>
      </div>
      <div className='bottom-box'>
        <div className='sub-idex-box' onClick={(e) => { navigate('/user/clinicPrint') }}>
          <LuCalendarClock className='icon' />
          <p>온라인<br />진료예약</p>
          <span>편하게 온라인으로 진료예약 하러가기</span>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate(`/admin/moneyln`) }}>
          <BsCreditCard className='icon' />
          <p>진료비 결제</p>
          <span>기다리지말고 온라인으로 진료비 결제하세요!</span>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate('/user/clinicPrint') }}>
          <IoNewspaperOutline className='icon' />
          <p>증명서 발급</p>
          <span>제증명 발급에 대한 안내</span>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate('/user/clinicPrint') }}>
          <LuCalendarClock className='icon' />
          <p>온라인<br />진료예약</p>
          <span>편하게 온라인으로 진료예약 하러가기</span>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate(`/admin/moneyln`) }}>
          <BsCreditCard className='icon' />
          <p>진료비 결제</p>
          <span>기다리지말고 온라인으로 진료비 결제하세요!</span>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate('/user/clinicPrint') }}>
          <IoNewspaperOutline className='icon' />
          <p>증명서 발급</p>
          <span>제증명 발급에 대한 안내</span>
        </div>
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