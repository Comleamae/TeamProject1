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
    <div>
    
      <div>
        <h1>울산그린대학병원</h1>
        <p>울산그린대학병원에 오시는 길을 쉽게 알려드립니다.</p>
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
        <h2>버스 노선도</h2>
        <div className="bus-routes">
          <div className="bus-route">
            <div className="station"><h3>태화강역에서 버스 이용시</h3></div>
            <ul>
              <li>태화강역 4번 출구 → 401번 탑승 → 시외버스터미널 하차</li>
              <li>태화강역 4번 출구 → 401번 탑승 → 시외버스터미널 하차</li>
              <li>태화강역 4번 출구 → 401번 탑승 → 시외버스터미널 하차</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default KakaoMap