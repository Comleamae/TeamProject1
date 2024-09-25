import React, { useEffect } from 'react'
import './LocationPage.css';

const { locationMap } = window;

const LocationPage = () => {

    useEffect(() => {
       // 지도를 담기 위한 영역 설정
        const locationMap = document.getElementById('map');
       // 지도 중심 좌표 및 지도 레벨 설정
        const options = {
          center: new window.kakao.maps.LatLng(35.54193226167337, 129.3382617559247), level: 3
        };
       // 지도 생성 및 객체값 리턴
        const map = new window.kakao.maps.Map(locationMap, options);
       // 지도에 마커 표시할 위치 ( 위도, 경도는 내가 설정한 곳 )
        var markerPosition = new window.kakao.maps.LatLng(35.54193226167337, 129.3382617559247);
       // 지도에 표시할 마커 생성
        var marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
       // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
       // 마커가 드래그 가능하게 설정하는 기능
        marker.setDraggable(true); 
       // 마우스 줌인, 아웃 기능
        map.setZoomable(true);   
       // 로드뷰 표시할 div
        var roadviewContainer = document.getElementById('roadview');
       // 로드뷰 객체
        var roadview = new window.kakao.maps.Roadview(roadviewContainer);
       // 맵에서 지정한 좌표에 따른 파노라마ID 가져올 로드뷰 객체
        var roadviewClient = new window.kakao.maps.RoadviewClient(); 
       // 로드뷰 나올 위치 지정
        var position = new window.kakao.maps.LatLng(35.54193226167337, 129.3382617559247);
       // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
        roadviewClient.getNearestPanoId(position, 50, function(panoId) {
          roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
        });

        // 드래그 되었을 때 기준으로 이벤트 리스너 추가
        window.kakao.maps.event.addListener(marker, 'dragend', function() {
        // 마커가 드래그된 후의 새로운 위치 가져오기
        const newPosition = marker.getPosition();
        // 새로운 위치에서 가장 가까운 로드뷰의 panoId를 가져와 로드뷰 갱신
          roadviewClient.getNearestPanoId(newPosition, 50, function(panoId) {
            if (panoId) {
              roadview.setPanoId(panoId, newPosition); // 새로운 panoId와 위치로 로드뷰 갱신
            } else {
              alert('해당 위치에는 로드뷰가 없습니다.');
            }
          });
        });

      window.kakao.maps.event.addListener(roadview, 'position_changed', function() {
        // 로드뷰의 현재 위치 가져오기
        const rvPosition = roadview.getPosition();
        // 마커의 위치를 로드뷰의 위치로 업데이트
        marker.setPosition(rvPosition);
        // 로드뷰 위치에 맞춰 지도 중심도 이동
        map.setCenter(rvPosition);
      });


      // 지도 중심 변경 시 마커를 지도 중심으로 이동
      window.kakao.maps.event.addListener(map, 'center_changed', function() {
        // 지도의 새로운 중심 좌표 가져오기
        const newCenter = map.getCenter();
        // 마커의 위치를 새로운 중심 좌표로 이동
        marker.setPosition(newCenter);

        // 새로운 위치에서 가장 가까운 로드뷰의 panoId 가져와서 로드뷰 갱신
          roadviewClient.getNearestPanoId(newCenter, 50, function(panoId){
          if(panoId){
            roadview.setPanoId(panoId, newCenter); // 새로운 panoId와 위치로 로드뷰 갱신
          }
        });
      });

    }, []);

    return (
      <>
        <div className='navigation-div'>
          <div id="map"></div>
          <div><button type='button' className='road-find-btn'>길찾기버튼</button></div>
          <div id="roadview"></div>
        </div>
      </>
    )
}


export default LocationPage