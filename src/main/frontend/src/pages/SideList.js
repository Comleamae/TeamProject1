import React from 'react'
import '../reset.css'
import './SideList.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// Swiper 모듈 사용
// SwiperCore.use([Autoplay, Pagination, Navigation]);


const SideList = () => {

  return (
    <div>
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className='slider-div'>
              <div className='side-left'>
                <strong className='side-tit'>
                  의료질 평가 최상위 등급<br />"1-가" 획득..<br />비수도권 병원에선 유일
                </strong>
                <p className='side-txt'>
                  - 6년 연속 전 부문 1등급으로 부산·울산·경남에선 최초
                  <br /> - 병원 비전인 'Top Brand PNUH' 실현
                </p>
              </div>
              <div className='side-right'>
                <img src='http://localhost:8080/images/banner-1.png' alt='Banner 1' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-div'>
              <div className='side-left'>
                <strong className='side-tit'>
                  의료질 평가 최상위 등급<br />"1-가" 획득..<br />비수도권 병원에선 유일
                </strong>
                <p className='side-txt'>
                  - 6년 연속 전 부문 1등급으로 부산·울산·경남에선 최초
                  <br /> - 병원 비전인 'Top Brand PNUH' 실현
                </p>
              </div>
              <div className='side-right'>
                <img src='http://localhost:8080/images/banner-2.png' alt='Banner 2' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-div'>
              <div className='side-left'>
                <strong className='side-tit'>
                  의료질 평가 최상위 등급<br />"1-가" 획득..<br />비수도권 병원에선 유일
                </strong>
                <p className='side-txt'>
                  - 6년 연속 전 부문 1등급으로 부산·울산·경남에선 최초
                  <br /> - 병원 비전인 'Top Brand PNUH' 실현
                </p>
              </div>
              <div className='side-right'>
                <img src='http://localhost:8080/images/banner-3.png' alt='Banner 3' />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      {/* 병원소식 뉴스 */}
      <div className='mNews'>
        <h2 className='mtit'>병원소식</h2>
        <ul>
          <li>
            <Link>
              <strong className='tit'>‘글로벌 협력의 첫걸음’...국립대만사범대학 Lohas EMBA 과정생 방문</strong>
              <p className='txt'>국립대만사범대학 Lohas EMBA 과정생 일행이 지난 13일 본원을 방문했다. 이번 방문은 재활의학과 신명준 교수, 의생명연구원 박종환 교수가 수행중인 의생명연구원 ‘국제공동연구‘ 및 글로컬 임상실증센터 내 의료리빙랩 디지털 웨어러블 장비 견학의 일환으로 진행됐다. 의생명연구원 원내 과제인 국제공동연구는 병원 연구 기반 글로벌 네트워크 구축을 위해 올해 처음 시작한 사업이다.</p>
              <span class="date">2024.08<em>19</em></span>
            </Link>
          </li>
          <li>
            <Link>
              <strong className='tit'>‘글로벌 협력의 첫걸음’...국립대만사범대학 Lohas EMBA 과정생 방문</strong>
              <p className='txt'>
                국립대만사범대학 Lohas EMBA 과정생 일행이 지난 13일 본원을 방문했다. 이번 방문은 재활의학과 신명준 교수, 의생명연구원 박종환 교수가 수행중인 의생명연구원 ‘국제공동연구‘ 및 글로컬 임상실증센터 내 의료리빙랩 디지털 웨어러블 장비 견학의 일환으로 진행됐다. 의생명연구원 원내 과제인 국제공동연구는 병원 연구 기반 글로벌 네트워크 구축을 위해 올해 처음 시작한 사업이다.
              </p>
              <span class="date">2024.08<em>21</em></span>
            </Link>
          </li>
          <li>
            <Link>
              <strong className='tit'>‘글로벌 협력의 첫걸음’...국립대만사범대학 Lohas EMBA 과정생 방문
              </strong>
              <p className='txt'>
                국립대만사범대학 Lohas EMBA 과정생 일행이 지난 13일 본원을 방문했다. 이번 방문은 재활의학과 신명준 교수, 의생명연구원 박종환 교수가 수행중인 의생명연구원 ‘국제공동연구‘ 및 글로컬 임상실증센터 내 의료리빙랩 디지털 웨어러블 장비 견학의 일환으로 진행됐다. 의생명연구원 원내 과제인 국제공동연구는 병원 연구 기반 글로벌 네트워크 구축을 위해 올해 처음 시작한 사업이다.
              </p>
              <span class="date">2024.08<em>25</em></span>
            </Link>
          </li>
        </ul>
      </div>
    
    </div>
  )
}

export default SideList