import React from 'react'
import './SideList.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'


const SliderItem = ({ imageSrc, title, description, link }) => (
  <div className="unit slick-slide">
    <Link to={link} title="바로가기" target="_self">
      <span className="img">
        <img src={imageSrc} alt={title} />
      </span>
      <strong className="tit">
        <span style={{ fontSize: '0.9em' }}>{title}</span>
      </strong>
      <p className="txt">
        {description}
      </p>
    </Link>
  </div>
);


const SideList = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // 기본 화살표를 숨기고, 사용자 정의 버튼을 사용
  };
  
  return (
    <div>
      <div className="mVisual">
        <Slider {...settings}>
          <SliderItem
            imageSrc="http://localhost:8080/images/banner-1.png"
            title="국내 최초 영상기반 림프조영술 상용화"
            description={`- 유방암 수술 후 팔 퉁퉁 붓는 림프부종 새로운 치료법 제시\n- 림프부종학회, 13일 부산대병원서 워크숍 개최해 치료 시연`}
            link="/pnuh/hospital/forum/hospital-news.do?mode=view&amp;articleNo=69870"
          />
          <SliderItem
            imageSrc="http://localhost:8080/images/banner-1.png"
            title='의료질 평가 최상위 등급 "1-가" 획득.. 비수도권 병원에선 유일'
            description={`- 6년 연속 전 부문 1등급으로 부산·울산·경남에선 최초\n- 병원 비전인 'Top Brand PNUH' 실현`}
            link="/"
          />
          <SliderItem
            imageSrc="http://localhost:8080/images/banner-1.png"
            title='의료질 평가 최상위 등급 "1-가" 획득.. 비수도권 병원에선 유일'
            description={`- 6년 연속 전 부문 1등급으로 부산·울산·경남에선 최초\n- 병원 비전인 'Top Brand PNUH' 실현`}
            link="/"
          />
          <SliderItem
            imageSrc="http://localhost:8080/images/banner-1.png"
            title='의료질 평가 최상위 등급 "1-가" 획득.. 비수도권 병원에선 유일'
            description={`- 6년 연속 전 부문 1등급으로 부산·울산·경남에선 최초\n- 병원 비전인 'Top Brand PNUH' 실현`}
            link="/"
          />
          {/* 다른 슬라이드 항목도 추가 가능합니다 */}
        </Slider>
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