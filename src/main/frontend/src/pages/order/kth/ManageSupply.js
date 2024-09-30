import React, { useEffect, useState } from 'react';
import './ManageSupply.css';
import axios from 'axios';

const ManageSupply = () => {
  // 재고 목록
  const [supplyList, setSupplyList] = useState([]);
  
  // 입고 예정 (발주 목록으로 부터 가져옴)
  const [orderList, setOrderList] = useState([]);

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
      <h1>재고 관리 페이지</h1>

      <table className='order-table'>
        <thead>
          <tr>
            <td>No.</td>
            <td>이미지</td>
            <td>품목</td>
            <td>가격</td>
            <td>남은 수량</td>
            <td>입고 예정량</td>
            <td>최소 수량</td>
          </tr>
        </thead>
        <tbody>
          {
            supplyList.map((supply, i) => {
              console.log(supply)
              return (
                <tr key={i}>
                  <td>{supplyList.length-i}</td>
                  <td className='supplyImage'><img src={`http://localhost:8080/upload/${supply.supplyImage}`}></img></td>
                  <td>{supply.supplyName}</td>
                  <td>{supply.supplyPrice}</td>
                  <td>{supply.supplyAmount}</td>
                  <td>입고예정</td>
                  <td>{supply.supplyMinAmount}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageSupply;
