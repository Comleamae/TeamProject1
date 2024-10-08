import React, { useEffect, useState } from 'react';
import './RequestOrder.css';
import axios from 'axios';

// 발주 화면
const RequestOrder = ({ adminLoginInfo }) => {

  //로그인 한 어드민 정보 저장할 state 변수
  const [loginInfo, setLoginInfo] = useState({});

  //물품 전체 목록 불러오기
  const [supplyList, setSupplyList] = useState([]);

  //발주 정보 담을 state변수(발주자, 발주일 등등)
  const [orderInfo, setOrderInfo] = useState({
    orderManager : '',
    deliveryDate : '',
    deliveryNote : '',
  })

  //발주할 물품 담아둘 목록
  const [OrderedSupplyList, setOrderedSupplyList] = useState([]);

  const [orderAmounts, setOrderAmounts] = useState({}); // 각 품목의 수량을 저장




  //로그인 정보로 발주자 설정
  useEffect(()=>{
    const sessionAdminInfo = window.sessionStorage.getItem('adminLoginInfo')
    setLoginInfo(JSON.parse(sessionAdminInfo))
    setOrderInfo({
      ...orderInfo,
      orderManager : loginInfo.adminName
    })
  }, [orderInfo.deliveryDate])//일단 대충 막은거

  // 재고 목록 불러오기
  useEffect(() => {
    axios.get('/api_order/selectAllSupply')
      .then((res) => {
        setSupplyList(res.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 버튼 누르면 발주 목록에 물품 추가
  function addSupply(supply) {
    // OrderedSupplyList에서 넣으려는 물품과 같은 물품 있는지 찾기
    const checkOrder = OrderedSupplyList.findIndex(order => order.supplyNum === supply.supplyNum);

    if (checkOrder > -1) {
      // 이미 있는 항목이면 알림창
      alert('이미 존재하는 항목입니다.')
    }
    else {
      // 새로운 항목이면 추가
      setOrderedSupplyList([...OrderedSupplyList, { ...supply, orderAmount: 1 }]);
      setOrderAmounts(({ ...OrderedSupplyList, [supply.supplyNum]: 1 }));
    }
  }

  // 수량 변경 핸들러
  const handleAmountChange = (supplyNum, amount) => {
    setOrderAmounts(({ ...orderAmounts, [supplyNum]: amount }));
    setOrderedSupplyList(prev => {
      const updatedOrderedSupplyList = prev.map(order =>
        order.supplyNum === supplyNum ? { ...order, orderAmount: parseInt(amount, 10) || 1 } : order
      );
      return updatedOrderedSupplyList;
    });
  };


  function changeOrderInfo(e){
    setOrderInfo({
      ...orderInfo,
      [e.target.name] : e.target.value
    })
    console.log(orderInfo)
  }


  // 삭제 누르면 목록에서 삭제
  function removeSupply(supplyNum) {
    setOrderedSupplyList(prev => prev.filter(order => order.supplyNum !== supplyNum));
  }

  // 발주 버튼 누르면 목록에 있는거 발주 안에 넣기
  function commitOrder() {
    axios.post('/api_order/commitOrder', orderInfo)
      .then((res) => {
        alert('발주가 신청되었습니다.')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <h1>발주 신청 페이지</h1>
      <p>여기는 모든 물품을 띄워두고 검색 기능 활성화 하여 발주 화면을 구현할 것</p>
      <table className='order-table'>
        <thead>
          <tr>
            <td><input type='checkbox' /></td>
            <td>No.</td>
            <td>이미지</td>
            <td>품목</td>
            <td>가격</td>
            <td>남은 수량</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            supplyList.map((supply, i) => (
              <tr key={i}>
                <td><input type='checkbox' /></td>
                <td>{supplyList.length - i}</td>
                <td className='supplyImage'><img src={`http://localhost:8080/upload/${supply.supplyImage}`} alt={supply.supplyName} /></td>
                <td>{supply.supplyName}</td>
                <td>{supply.supplyPrice}</td>
                <td>{supply.supplyAmount}</td>
                <td><button type='button' onClick={() => addSupply(supply)}>추가</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <h1>신청 목록</h1>
      <p>발주자 : {loginInfo.adminName}</p>
      <table className='order-table'>
        <thead>
          <tr>
            <td>No.</td>
            <td>상품번호</td>
            <td>상품명</td>
            <td>수량</td>
            <td>단가</td>
            <td>총 가격</td>
            <td>메모</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            //supplyNum 기준 오름차순 정렬
            OrderedSupplyList.slice().sort((a, b) => a.supplyNum - b.supplyNum).map((order, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{order.supplyNum}</td>
                <td>{order.supplyName}</td>
                <td>
                  <input
                    type='number'
                    name='orderAmount'
                    value={order.orderAmount}
                    min={1}
                    onChange={(e) => handleAmountChange(order.supplyNum, e.target.value)}
                  />
                </td>
                <td>{order.supplyPrice}</td>
                <td>{order.orderAmount * order.supplyPrice}</td>
                <td>{order.supplyCaution}</td>
                <td><button type='button' onClick={() => removeSupply(order.supplyNum)}>삭제</button></td>
              </tr>
            ))
          }
          <tr>
            <td colSpan={2}>희망 발주 일</td>
            <td colSpan={6} ><input type='date' name='deliveryDate' onChange={(e)=>{changeOrderInfo(e)}}></input></td>
          </tr>
          <tr>
            <td colSpan={2}>메모</td>
            <td colSpan={6}><textarea name='deliveryNote' onChange={(e)=>{changeOrderInfo(e)}}></textarea></td>
          </tr>
        </tbody>
      </table>

      <button type='button' onClick={(e) => { commitOrder() }}>발주</button>
    </div>
  );
}

export default RequestOrder;
