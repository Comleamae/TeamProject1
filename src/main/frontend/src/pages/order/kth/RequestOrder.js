import React, { useEffect, useState } from 'react'
import './RequestOrder.css'
import axios from 'axios';

// 발주 화면
const RequestOrder = () => {

  const [supplyList, setSupplyList] = useState([]);

  // 재고 목록 불러와서 화면에 띄우기
  useEffect(() => {
    axios.get('/api_order/selectAllSupply')
      .then((res) => {
        // 데이터를 역순으로 정렬
        setSupplyList(res.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div>
    <h1>발주 신청 페이지</h1>

    <table className='order-table'>
      <thead>
        <tr>
          <td><input type='checkbox'/></td>
          <td>이미지</td>
          <td>No.</td>
          <td>품목</td>
          <td>가격</td>
          <td>남은 수량</td>
          <td>발주 수량</td>
          <td>계</td>
        </tr>
      </thead>
      <tbody>
          {
            supplyList.map((supply, i) => {
              return (
                <tr key={i}>
                  <td><input type='checkbox'/></td>
                  <td>{supplyList.length-i}</td>
                  <td><img src={`http://localhost:8080/upload/${supply.supplyImage}`}></img></td>
                  <td>{supply.supplyName}</td>
                  <td>{supply.supplyPrice}</td>
                  <td>{supply.supplyAmount}</td>
                  <td>입고예정</td>
                  <td>최소수량</td>
                </tr>
              );
            })
          }
      </tbody>
    </table>
    <button type='button'>발주</button>

  </div>
  )
}

export default RequestOrder