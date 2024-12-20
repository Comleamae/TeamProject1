import React, { useEffect, useState } from 'react';
import './RequestOrder.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// 발주 화면
const RequestOrder = ({ adminLoginInfo }) => {


  const navigate = useNavigate();


  //로그인 한 어드민 정보 저장할 state 변수
  const [loginInfo, setLoginInfo] = useState({});


  //물품 전체 목록 불러오기
  const [supplyList, setSupplyList] = useState([]);


  //발주 정보 담을 state변수(발주자, 발주일 등등)
  const [orderInfo, setOrderInfo] = useState({
    orderManager: '',
    deliveryDate: '',
    orderNote: '',
    orderSupplyList : []
  })


  //발주할 물품 담아둘 목록
  const [orderedSupplyList, setOrderedSupplyList] = useState([]);


  //로그인 정보로 발주자 설정
  useEffect(() => {
    const sessionAdminInfo = window.sessionStorage.getItem('adminLoginInfo')
    setLoginInfo(JSON.parse(sessionAdminInfo))
    setOrderInfo({
      ...orderInfo,
      orderManager: loginInfo.adminName
    })
  }, [orderInfo.deliveryDate])


  // 물품 목록 불러오기
  useEffect(() => {
    axios.get('/api_order/selectAllSupply')
      .then((res) => {
        setSupplyList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  // '추가' 버튼 누르면 현재 발주 목록에 물품 추가
  function addSupply(supply) {
    // orderedSupplyList에서 넣으려는 물품과 같은 물품 있는지 찾기
    const checkOrder = orderedSupplyList.findIndex(order => order.supplyNum === supply.supplyNum);

    if (checkOrder > -1) {
      // 이미 목록에 있는 항목이면 알림창
      alert('이미 존재하는 항목입니다.')
    }
    else {
      // 새로운 항목이면 목록에 추가
      setOrderedSupplyList([...orderedSupplyList, { ...supply, orderAmount: 0 }]);
    }
  }

  // 수량 변경
  const handleAmountChange = (supplyNum, amount) => {
    const updatedOrderedSupplyList = orderedSupplyList.map(order =>
      order.supplyNum === supplyNum ? { ...order, orderAmount: parseInt(amount, 10) || 1 } : order
    );
  
    setOrderedSupplyList(updatedOrderedSupplyList);
    setOrderInfo({...orderInfo, orderedSupplyList: updatedOrderedSupplyList});
  };
  
  // 발주 내용 바꾸기(발주 전)
  function changeOrderInfo(e) {
    setOrderInfo({
      ...orderInfo,
      [e.target.name]: e.target.value
    })
  }

  // 삭제 누르면 목록에서 삭제
  function removeSupply(supplyNum) {
    setOrderedSupplyList(prev => prev.filter(order => order.supplyNum !== supplyNum));
  }


  // 발주 버튼 누르면 발주 목록 데이터 발주 내역에 넣기
  function commitOrder() {
      const checkAmount = orderedSupplyList.findIndex(order => order.orderAmount == 0)
      if(checkAmount > -1){
        alert('수량을 확인하세요')
      }
      else{

    console.log(orderInfo)

    axios.post('http://192.168.30.117:8080/order/order/receiveOrder', orderInfo)
      .then((res) => {
        alert('발주가 신청되었습니다.');
      }
  )
      .catch((error) => {
        alert('발주에 신청되었습니다.');
      });
    }
  }

  //발주 내역에 발주 정보 넣기
  function saveOrders(){
    axios.post('/api_order/commitOrder', orderInfo)
    .then((res)=>{
      return axios.post('/api_order/commitOrderedSupply', orderedSupplyList);
    })
      .then(()=>{
        console.log('발주성공')
        navigate('/order/orderList')
      }
    )
    .catch((error)=>{
      console.log('발주실패')
    })
  }

  // function commitOrder() {
  //   axios.get('http://192.168.30.117:8080/order/order/receiveOrder')
  //     .then((res) => {
  //       alert('통신성공');
  //     })
  //     .catch((error) => {
  //       alert('발주에 실패하였습니다.');
  //       console.log(error);
  //     });
  // }


  return (
    <div className='container'>
      <h1 className='title-div'>발주 신청</h1>
      <table className='order-table'>
        <thead>
          <tr>
            <td>No.</td>
            <td>이미지</td>
            <td>품목</td>
            <td>규격</td>
            <td>가격</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            supplyList.map((supply, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td className='supplyImage'><img src={`http://localhost:8080/upload/${supply.supplyImage}`} alt={supply.supplyName} /></td>
                <td>{supply.supplyName}</td>
                <td>{supply.supplyStandard}</td>
                <td>{supply.supplyPrice}</td>
                <td><button type='button' onClick={() => addSupply(supply)}>추가</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <h1 className='title-div'>신청 목록</h1>
      <p className='order-info'>발주자 : {loginInfo.adminName}</p>

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
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          {
            //supplyNum 기준 오름차순 정렬
            orderedSupplyList.slice().sort((a, b) => a.supplyNum - b.supplyNum).map((order, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{order.supplyNum}</td>
                <td>{order.supplyName}</td>
                <td>
                  <input className='orderMount'
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
            <td colSpan={6} ><input type='date' name='deliveryDate' onChange={(e) => { changeOrderInfo(e) }}></input></td>
          </tr>
          <tr>
            <td colSpan={2}>메모</td>
            <td colSpan={6}><textarea name='orderNote' onChange={(e) => { changeOrderInfo(e) }}></textarea></td>
          </tr>
        </tbody>
      </table>

      <button type='button' className='register-button' onClick={(e) => { 
                                                                          commitOrder() 
                                                                          saveOrders()}}>발주</button>

    </div>
  );
}

export default RequestOrder;