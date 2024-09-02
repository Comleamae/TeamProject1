import React, { useRef, useState, useEffect } from 'react'
import Slider from 'react-slick';
import './MedicalCenter.css'
import { Link } from 'react-router-dom'


const MedicalCenter = () => {

  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);

  // Slick 설정
  const settings = {
    rows: 2,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: true,
    appendDots: dots => (
      <div>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  // 슬라이드 제어 함수
  const handlePlay = () => {
    setIsPlaying(true);
    sliderRef.current.slickPlay();
  };

  const handlePause = () => {
    setIsPlaying(false);
    sliderRef.current.slickPause();
  };




  return (
    <div className="cntr">

      <h4>
        <strong>특성화센터</strong>
        <span>그린대학교병원에서 제공하는 특성화센터 진료로 건강한 삶을 누리세요.</span>
      </h4>

      <div className="slick_wrapper">
        <Slider ref={sliderRef} {...settings} className="slick-slider">
          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">암센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_01.png" alt="암센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">뇌신경센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_02.png" alt="뇌신경센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">노인의료센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_03.png" alt="노인의료센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">심장혈관센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_04.png" alt="심장혈관센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <a href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">폐센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_05.png" alt="폐센터" />
            </a>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">관절센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_06.png" alt="관절센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">척추센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_07.png" alt="척추센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">소화기센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_08.png" alt="소화기센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">통증센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_10.png" alt="통증센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">어지럼증센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_11.png" alt="어지럼증센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">소아수술센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_12.png" alt="소아수술센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">산모·신생아<br/>통합치료센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_689.png" alt="산모 신생아 통찹치료 센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">희귀질환센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_700.png" alt="희귀질환센터" />
            </Link>
          </div>

          <div className="slide-item f1_bd">
            <Link href="#" title="새창으로 열기" className="btn_link">
              <span className="cntr_ttl">어린이공공전문<br/>진료센터</span>
              <span className="cntr_link">바로가기</span>
              <img src="http://localhost:8080/images/ico_d_701.png" alt="어린이센터" />
            </Link>
          </div>

        </Slider>
      </div>

      <div className="controller_form">
        {/* <button className={`stop ${!isPlaying ? 'active' : ''}`} onClick={handlePause}>
          <img src="https://www.snubh.org/front/images/main/btn_stop.png" alt="센터 배너 정지" />
        </button>
        <button className={`play ${isPlaying ? 'active' : ''}`} onClick={handlePlay}>
          <img src="https://www.snubh.org/front/images/main/btn_play.png" alt="센터 배너 시작" />
        </button> */}
      </div>


    </div>
  )
}

export default MedicalCenter