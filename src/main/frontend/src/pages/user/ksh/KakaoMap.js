import React, { useEffect, useState } from 'react'
import './KakaoMap.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = () => {

  // 마커 클릭 시 로드뷰 페이지로 이동
  const newRoadViewPage = (lat, lng) => {
    const roadViewUrl = `https://map.kakao.com/link/roadview/${lat},${lng}`;
    window.open(roadViewUrl, '_blank'); // 새 탭에서 로드뷰 열기
  }

  // 길찾기 페이지로 이동하는 함수
  const openNavigationPage = (lat, lng) => {
    const navigateUrl = `https://map.kakao.com/link/to/울산그린대학,${lat},${lng}`;
    window.open(navigateUrl, '_blank'); // 새 탭에서 길찾기 페이지 열기
  }

  return (
    <div className='welcom'>
    
      <div className='welcom1'>
        <h1 className='joinh1'>오시는 길</h1>
        <p>울산그린대학교병원에 오시는 길을 쉽게 알려드립니다.</p>
      </div>
      <div className='map-div'>
        <button className="navigate-btn" onClick={() => openNavigationPage(35.5421094, 129.3382413)}> 빠른 길찾기 </button>
        <Map center={{ lat:35.5421094, lng: 129.3382413 }} style={{ width: '1300px', height: '600px' }} level={3}
            draggable={false}  // 드래그 비활성화
            zoomable={false} // 확대 축소 비활성화
        >
  
        {/* 마커 좌표 */}
          <MapMarker position={{ lat:35.5421094, lng: 129.3382413 }}
              onClick={() => newRoadViewPage(35.5421094, 129.3382413)} >
            <div style={{color:"#000"}}>울산그린대학</div>
          </MapMarker>
        </Map>
      </div>
      <div className='movement-path'>
        <div className='join-imgdiv way'>
          <img src='http://localhost:8080/images/bg_bar.gif' />
          <h5>찾아오시는 길</h5>
        </div>
        <div className="bus-routes">
          <div className="bus-route">
            <div className="station">
              <h3>울산역에서 버스 이용시</h3>
            </div>
            <ul>
              <li>울산역 → 급행 5001 버스탑승 → 보람병원입구 하차 → 도보 2분</li>
            </ul>
          </div>

          <div className="bus-route">
            <div className="station">
              <h3>태화강역에서 버스 이용시</h3>
            </div>
            <ul>
              <li>태화강역 5번 정류소 → 713번 버스탑승 → 보람병원입구 하차 → 도보 3분 </li>
              <li>태화강역 5번 정류소 → 733번 버스탑승 → 보람병원입구 하차 → 도보 3분 </li>
            </ul>
          </div>

          <div className="bus-route">
            <div className="station">
              <h3>울산시외버스터미널에서 버스 이용시</h3>
            </div>
            <ul>
              <li>고속버스터미널 앞 → 975번 버스탑승 → 대현중학교 하차 → 도보 5분 </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default KakaoMap