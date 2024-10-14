import React, { useEffect, useState } from 'react';
import './RegistSupply.css';
import axios from 'axios';

const RegistSupply = () => {

  const [supplyInfo, setSupplyInfo] = useState({
    supplyName: '',
    supplyPrice: 0,
    supplyStandard: '',
    supplier: '',
    supplyCaution: '',
    supplyMinAmount: 0,
    supplyImage: null //첨부파일
  });



    function changeSupplyInfo(e) {
      const newInfo = {
        ...supplyInfo,
        [e.target.name]: e.target.value,
      };
      setSupplyInfo(newInfo);
    }

    // 이미지 파일 선택 처리
    function handleImageChange(e) {
      setSupplyInfo({
        ...supplyInfo,
        supplyImage: e.target.files[0], // 선택한 파일 저장
      });
    }


    console.log(supplyInfo);


    function registSupply() {
      //물품 이름을 통해 물품의 중복 검사 실행
      axios.post('/api_order/checkSupply',
        { supplyName: supplyInfo.supplyName }
      )
        .then((res) => {
          // 중복 없다면 (=> 등록 가능 하다면)
          if (res.data) {
            const fileConfig = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
            // axios.post('/api_order/registSupply', formData, fileConfig)
            // form 객체 생성
            const supplyForm = new FormData();

            // form 객체에 데이터 추가
            supplyForm.append('supplyName', supplyInfo.supplyName)
            supplyForm.append('supplyPrice', supplyInfo.supplyPrice)
            supplyForm.append('supplyStandard', supplyInfo.supplyStandard)
            supplyForm.append('supplier', supplyInfo.supplier)
            supplyForm.append('supplyCaution', supplyInfo.supplyCaution)
            supplyForm.append('supplyMinAmount', supplyInfo.supplyMinAmount)
            supplyForm.append('supplyImage1', supplyInfo.supplyImage)

            // 데이터 가진 form 객체 axios 통신
            axios.post('/api_order/registSupply', supplyForm, fileConfig)
              .then((res) => {
                console.log(supplyInfo);
                alert('물품 등록 완료');
              })
              .catch((error) => {
                console.log(error);
              });
          }
          // 물품 중복이라면 중복 알림창 띄우기
          else {
            alert('물품 중복')
          }
        })
        .catch((error) => {
          console.log(error)
        })

    }

    return (
      <div>
        <h1>신규 물품 등록 페이지</h1>
        <table className='regist-table-div'>
          <tr>
            <td>물품명</td>
            <td><input type='text' name='supplyName' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>가격</td>
            <td><input type='text' name='supplyPrice' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>규격</td>
            <td><input type='text' name='supplyStandard' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>제조사</td>
            <td><input type='text' name='supplier' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>주의사항</td>
            <td><input type='text' name='supplyCaution' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>최소수량</td>
            <td><input type='text' name='supplyMinAmount' onChange={changeSupplyInfo} /></td>
          </tr>
          <tr>
            <td>이미지</td>
            <td><input type='file' name='supplyImage' accept='image/*' onChange={handleImageChange} /></td>
          </tr>
        </table>
        <button type='button' onClick={registSupply}>등록</button>
      </div>
    );
  }

    export default RegistSupply;