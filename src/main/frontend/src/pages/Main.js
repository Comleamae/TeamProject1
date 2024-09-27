import React, { useEffect, useState } from 'react'
import './Main.css'
import { useNavigate } from 'react-router-dom';
import { LuCalendarClock } from "react-icons/lu";
import { IoCardOutline } from "react-icons/io5"; //카드 아이콘 
import { IoNewspaperOutline } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr"; //찾아오시는길 아이콘
import MedicalCenter from './MedicalCenter';
import SideList from './SideList';
import { FaUserDoctor } from 'react-icons/fa6';



const bannerImages = [
  'http://localhost:8080/images/병원병원.jpg',
  'http://localhost:8080/images/병원.jpg'
];

const bannerVideos = [
  'http://localhost:8080/images/병원.mp4'
];

const Main = () => {

  const navigate = useNavigate();

  const [media, setMedia] = useState('');

  useEffect(() => {
    const isVideo = Math.random() < 0.5;

    if (isVideo) {
      // 배너 동영상 배열이 유효한지 확인
      if (bannerVideos.length > 0) {
        const randomIndex = Math.floor(Math.random() * bannerVideos.length);
        setMedia({ type: 'video', src: bannerVideos[randomIndex] });
      } else {
        console.error('배너 동영상 안나옴');
      }
    } else {
      // 배너 이미지 배열이 유효한지 확인
      if (bannerImages.length > 0) {
        const randomIndex = Math.floor(Math.random() * bannerImages.length);
        setMedia({ type: 'image', src: bannerImages[randomIndex] });
      } else {
        console.error('배너 이미지 안나옴.');
      }
    }
  }, []);

  return (
    
    <div className='intro-div'>
      {/* 병원이미지 배너*/}
      {media ? (
        media.type === 'video' ? (
          <video className='video' 
            src={media.src} 
            autoPlay 
            loop 
            muted 
            playsInline 
          >
          </video>
        ) : (
          <img className='banner-main-img' 
            src={media.src} 
            alt="Main Banner" 
          />
        )
      ) : (
        <p>배너를 불러오는 중입니다...</p>
      )}

      <div className='img-text'>
        <h3>Lead the Standard Build the Trust</h3>
        <p>세계 의료의 표준을 선도하는 국민의 병원, 그린대학교병원</p>
      </div>

      <div className='main-list-div'>
        {/* 진료/수납결제/의료진 박스 */}
        <div className='self-box'>

          <div className='sub-idex-box' onClick={(e) => { navigate('/') }}>
            <div className='sub-inbox'>
              <p className='main-p'>첫 방문 상담</p>
              <span className='main-span'>처음 방문하셨나요?</span>
              <FaHandHoldingMedical className='icon' />
            </div>
          </div>

          <div className='sub-idex-box' onClick={(e) => { navigate('/visitant') }} style={{backgroundColor:'#42D3D8'}}>
            <div className='sub-inbox' style={{color:'#fff'}}>
              <p className='main-p'  style={{color:'#fff'}}>진료접수</p>
              <span className='main-span' style={{color:'#fff'}}>진료접수 하러가기</span>
              <LuCalendarClock className='icon' style={{color:'#fff'}}/>
            </div>
          </div>

          <div className='sub-idex-box' onClick={(e) => { navigate('/moneyIn') }} style={{backgroundColor:'#FFC2A0'}}>
            <div className='sub-inbox'>
              <p className='main-p' style={{color:'#fff'}}>진료비 결제</p>
              <span className='main-span' style={{color:'#fff'}}>
                이제는 온라인으로<br/>
                진료비 결제!
              </span>
              <IoCardOutline className='icon'  style={{color:'#fff'}}/>
            </div>
          </div>
  
          <div className='sub-idex-box' onClick={(e) => { navigate('/clinicPrint') }} style={{backgroundColor:'#825EF6'}}>
            <div className='sub-inbox'>
              <p className='main-p' style={{color:'#fff'}}> 증명서 발급</p>
              <span className='main-span' style={{color:'#fff'}}>증명서/제증명 발급</span>
              <IoNewspaperOutline className='icon' style={{color:'#fff'}} />
            </div>
          </div>
          
          {/* <div className='sub-idex-box' onClick={(e) => { navigate(`/`) }}>
            <div className='sub-inbox'>
              <p className='main-p' style={{fontSize:'28px'}}>의료진/<br /> 의료과 찾기</p>
              <button type='button' className='btn'>찾기</button>
            </div>
          </div> */}

          <div className='sub-idex-box' onClick={(e) => { navigate('/locationPage') }}>
            <div className='sub-inbox'>
                <p className='main-p'>찾아오시는 길</p>
                <GrMapLocation className='icon'/>
            </div>
          </div>
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