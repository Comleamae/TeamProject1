import React from 'react'
import './SideList.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const SideList = () => {

  return (
    <div>
    <div className="slider-container">
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          modules={[Autoplay, Navigation, Pagination]} // 최신 모듈 설정 방법
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='slider-div'>
              <div className='side-left'>
                <strong className='side-tit'>
                  국내 최초<br/>영상기반 림프조영술 상용화
                </strong>
                <p className='side-txt'>
                  - 유방암 수술 후 팔 퉁퉁 붓는 림프부종 새로운 치료법 제시<br/>
                  - 림프부종학회, 13일 부산대병원서 워크숍 개최해 치료 시연
                </p>
              </div>
              <div className='side-right'>
                <img src='http://localhost:8080/images/b2.jpg' alt='Banner 1' />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slider-div'>
              <div className='side-left'>
                <strong className='side-tit'>
                  경상권 지역최초<br />다빈치 로봇 3대 운영
                </strong>
                <p className='side-txt'>
                  - 6년 연속 전 부문 1등급으로 부산·울산·경남에선 최초<br />
                  - 병원 비전인 'Top Brand PNUH' 실현
                </p>
              </div>
              <div className='side-right'>
                <img src='http://localhost:8080/images/병원병원.jpg' alt='Banner 2' />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slider-div'>
              <div className='side-left'>
                <strong className='side-tit'>
                  전국 암센터 종합평가서<br />
                  최우수기관 선정
                </strong>
                <p className='side-txt'>
                  <br/><br/>
                  - 공간 재배치와 리모델링 통해 동남권 최고 역량 갖춘 암병원으로 개편<br/>
                  - 암생존율 향상과 지역 주민의 건강지표 향상 목표<br/>
                  - 중증·고난도 질환 중심의 진료역량 갖춰 지역 완결형 의료체계 완성할 것
                </p>
              </div>
              <div className='side-right'>
                <img src='http://localhost:8080/images/b1.jpg' alt='Banner 3' />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      {/* 병원소식 뉴스 */}
      <div className='mNews'>
        <div  className='mtit'>
          <h2>병원소식</h2>
          <button className='new-btn' type='button'>더보기</button>
        </div>
        <ul>
          <li>
            <Link>
              <strong className='tit'>융합의학기술원, 의료·교육 AI 컨퍼런스「AI BUS 2024」개최</strong>
              <p className='txt'>융합의학기술원이 부산대학교 AI대학원, 부산 AEIDAP 경남권역 사업지원단, 부산시교육청, THE AI와 공동으로 오는 9월 12일 벡스코 제2전시장에서 「AI BUS 2024」 컨퍼런스를 개최한다. 이번 행사는 부산 지역에서 AI 기반 의료 및 교육 기술의 발전 방향을 모색하고, 관련 산업과의 협력체계를 구축하기 위한 자리로 마련됐다. 컨퍼런스는 의료 AI와 교육 AI 두 분야로 나눠 진행된다. 첫 번째 의료 AI 세션에서는 우리 병원이 주최하여, 산·학·병·연 및 공공기관, 민간기업의 국내 의료 AI 전문가들이 연사로 참여해 최신 트렌드와 사례를 공유하고 부산을 AI 중심 도시로 성장시키기 위한 도전과 기회를 논의한다. 두 번째 교육 AI 세션에서는 교육 현장에서의 AI 활용 가능성과 발전 방향에 대한 강연과 토론이 진행될 예정이다. 정성운 병원장은 “AI BUS 2024는 부산대학교병원이 첨단 의료 기술을 선도하는 병원으로서의 입지를 더욱 강화하고, 부산 지역의 AI 의료 및 교육 발전에 기여할 수 있는 중요한 행사”라며, “많은 관심과 참여를 부탁드린다”고 말했다. 한편, 행사 당일 참여자들에게는 AI 기술 관련 다양한 자료와 네트워킹 기회가 제공되며, 이를 통해 부산대병원의 지속 가능한 의료 AI 발전과 지역 사회에 기여할 수 있는 기반이 마련될 예정이다.</p>
              <span class="date">2024.09<em>09</em></span>
            </Link>
          </li>
          <li>
            <Link>
              <strong className='tit'>고객지원팀, 9월 친절직원에 이비인후과 공수근 교수 등 5명 선정</strong>
              <p className='txt'>
              고객지원팀은 9월 '이달의 친절직원' 5명을 선정하여 5일 포상했다. 9월 친절직원에는 ▲ 이비인후과 공수근 교수, ▲ 07병동(남) 조은지 간호사, ▲ 정보전산팀 최지안 직원, ▲ 진단검사의학1팀 이승형 직원, ▲ 재활의학과 최부영 직원이 선정돼 병원장 표창과 부상으로 온누리상품권을 받았다. 매월 선정하는 이달의 친절직원은 '친절직원 선정위원회'에서 고객의 소리함과 홈페이지, 우편, 원내 게시판 등을 통해 접수된 고객추천과 직원추천을 종합해 선정하고 있다.
              </p>
              <span class="date">2024.09<em>06</em></span>
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