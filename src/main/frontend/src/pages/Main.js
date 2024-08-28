import React from 'react'
import '../reset.css'
import './Main.css'
import { LuCalendarClock } from "react-icons/lu";
import { useLocation, useNavigate } from 'react-router-dom';

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
      {/* 병원이미지 + 레이아웃 */}
      <img className='banner-main-img' src='http://localhost:8080/images/병원건물.jpg'/>
      <div className='img-text'>
        <h3>안녕하세요 그린대학교병원입니다</h3>
        <p>우리가 국내 TOP</p>
      </div>
      <div className='self-box'>
        <div className='sub-idex-box' onClick={(e) => { navigate('/user/clinicPrint') }}>
          <LuCalendarClock className='icon' />
          <p>진료</p>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate('/user/clinicPrint') }}>
          <LuCalendarClock className='icon' />
          <p>진료예약</p>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate(`/admin/moneyln`) }}>
          <LuCalendarClock className='icon' />
          <p>진료비결제</p>
        </div>
        <div className='sub-idex-box' onClick={(e) => { navigate('/user/clinicPrint') }}>
          <LuCalendarClock className='icon' />
          <p>증명서발급</p>
        </div>
      </div>
    </div>
  )
}

export default Main