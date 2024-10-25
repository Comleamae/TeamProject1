import React, { useEffect, useState } from 'react';
import './ManageSupply.css';
import axios from 'axios';

const ManageSupply = () => {
  const [supplyList, setSupplyList] = useState([]);
  const [orderAmountList, setOrderAmountList] = useState({}); // order amounts를 객체로 저장

  useEffect(() => {
    // 재고 목록 불러오기
    axios.get('/api_order/selectAllSupply')
      .then((res) => {
        setSupplyList(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // 모든 발주 물량을 불러오는 요청
    // async 비동기 처리
    const fetchOrderAmounts = async () => {
      const amounts = {};
      for (const supply of supplyList) {
        try {
          const res = await axios.get(`/api_order/getOrderAmount/${supply.supplyNum}`);
          amounts[supply.supplyNum] = res.data;
        } catch (error) {
          console.log(error);
        }
      }
      setOrderAmountList(amounts);
    };

    if (supplyList.length > 0) {
      fetchOrderAmounts();
    }
  }, [supplyList]);

  return (
    <div className='container'>
      <h1 className='title-div'>재고 관리</h1>
      <table className='supply-table'>
        <thead>
          <tr>
            <td>No.</td>
            <td>이미지</td>
            <td>품목</td>
            <td>제조사</td>
            
            <td>가격</td>
            <td>남은 수량</td>
            <td>입고 예정량</td>
            <td>최소 수량</td>
          </tr>
        </thead>
        <tbody>
          {
            supplyList.map((supply, i) => {
              const orderAmount = orderAmountList[supply.supplyNum] || 0; // 기본값 설정
              return (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td className='supplyImage'>
                    <img src={`http://localhost:8080/upload/${supply.supplyImage}`} alt={supply.supplyName} />
                  </td>
                  <td>{supply.supplyName}</td>
                  <td>{supply.supplier}</td>
                  <td>{supply.supplyPrice}</td>
                  <td>{supply.supplyAmount}</td>
                  <td>{orderAmount}</td> {/* 여기에 발주 물량 표시 */}
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