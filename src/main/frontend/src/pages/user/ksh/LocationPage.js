import React, { useEffect } from 'react'

const { locationMap } = window;

const LocationPage = () => {

    useEffect(() => {
      const locationMap = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
      const options = {
          center: new window.kakao.maps.LatLng(35.54193226167337, 129.3382617559247 ), // 지도 중심 좌표
          level: 3 // 지도의 확대 레벨
      };
      const map = new window.kakao.maps.Map(locationMap, options); // 지도 생성 및 객체 리턴

      // 마커가 표시될 위치입니다 
      var markerPosition  = new window.kakao.maps.LatLng(35.54193226167337, 129.3382617559247); 

      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
        position: markerPosition
      });

      // 지도에 로드뷰 기능 추가 (로드뷰 가능한 길 표시 기능)
      // map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.ROADVIEW);

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 마커가 드래그 가능하게 설정
      marker.setDraggable(true); 

      // 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
  		map.setZoomable(true);   

      var roadviewContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
      var roadview = new window.kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
      var roadviewClient = new window.kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

      var position = new window.kakao.maps.LatLng(35.54193226167337, 129.3382617559247);

        // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
        roadviewClient.getNearestPanoId(position, 50, function(panoId) {
            roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
        });
    }, []);

    return (
      <>
        <div id="map" style={{width: 700, height: 700}}></div>


        <div id="roadview" style={{width: 700, height: 700}}></div>
      </>
    )
}


export default LocationPage