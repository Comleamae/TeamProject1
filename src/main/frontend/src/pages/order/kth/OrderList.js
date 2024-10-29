import React, { useEffect, useState } from 'react';
import './OrderList.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from '../../user/kth/Modal';

const OrderList = () => {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [orderSupplyList, setOrderSupplyList] = useState([]);
  const [isEditing, setIsEditing] = useState(-1);
  const [checkedOrders, setCheckedOrders] = useState([]);


  //모달 창에서 수량 변경하는지 체크(수정버튼 클릭 시 수량 변경 가능)
  const handleEdit = (index) => {
    setIsEditing(index);
  };

  //모달창에서 변경버튼 클릭시 db에 바꾼 데이터로 변경
  const handleSave = () => {
    axios.put(`/api_order/updateOrderSupply`, orderSupplyList)
      .then(res => {
        alert('발주 정보 변경 성공');
      })
      .catch(error => {
        console.log(error);
        alert('발주 정보 변경 오류');
      });
    setIsEditing(-1);
  };

  //체크박스 여부에 따라 입고할 orderNum 저장
  const handleCheckboxChange = (orderNum) => {
    setCheckedOrders((prevCheckedOrders) => {
      if (prevCheckedOrders.includes(orderNum)) {
        return prevCheckedOrders.filter(num => num !== orderNum);
      } else {
        return [...prevCheckedOrders, orderNum];
      }
    });
  };


  //입고 버튼 클릭 시 
  const store = () => {
    //선택한 주문이 없다면
    if (checkedOrders.length === 0) {
      alert("체크된 주문이 없습니다.");
      return;
    }

    //주문이 있다면 확인창 띄우기
    if (!window.confirm("선택한 주문을 입고하시겠습니까?")) {
      return;
    }

    //확인 눌렀다면 입고 완료 시키기
    const updateStatusPromises = checkedOrders.map(orderNum => {
      return axios.put(`/api_order/updateOrderStatus/${orderNum}`)
        .then(res => {
          return axios.put(`/api_order/updateSupplyAmount/${orderNum}`);
        })
        .then(res => {
        })
        .catch(error => {
        });
    });

    Promise.all(updateStatusPromises)
      .then(() => {
        alert('선택한 주문이 성공적으로 처리되었습니다.');
        setCheckedOrders([]);
        return axios.get('/api_order/getAllOrder');
      })
      .then((res) => {
        setOrderList(res.data);
      })
      .catch(error => {
        console.log('요청 처리 중 오류 발생:', error);
      });
  };

  //취소 버튼 클릭시 그 행의 주문 취소
  const cancelOrder = (orderNum) => {
    if (!window.confirm("이 주문을 취소하시겠습니까?")) {
      return;
    }

    axios.put(`/api_order/cancelOrder/${orderNum}`)
      .then((res) => {
        alert('취소되었습니다.');
        return axios.get('/api_order/getAllOrder');
      })
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isOrderCompleted = (order) => {
    return order.orderStatus === '입고 완료';
  };

  const isOrderCanceled = (order) => {
    return order.orderStatus === '취소 됨';
  };

  //모달창 내용 설정
  function setModalContent() {
    return (
      <div>
        <h3>발주 정보</h3>
        <div>
          <table className='modal-table-container'>
            <thead>
              <tr>
                <td>상품번호</td>
                <td>상품명</td>
                <td>공급사</td>
                <td>규격</td>
                <td>주문 수량</td>
                <td>단가</td>
                <td>총 가격</td>
                <td>메모</td>
                {/* <td>수정</td> */}
              </tr>
            </thead>
            <tbody>
              {
                orderSupplyList.map((supplyList, i) => {
                  return (
                    <tr key={i}>
                      <td>{supplyList.supply.supplyNum}</td>
                      <td>{supplyList.supply.supplyName}</td>
                      <td>{supplyList.supply.supplier}</td>
                      <td>{supplyList.supply.supplyStandard}</td>
                      <td>
                        {isEditing === i ? (
                          <input name='orderAmount'
                            type="number"
                            min={0}
                            defaultValue={supplyList.orderAmount}
                            onChange={(e) => supplyList.orderAmount = e.target.value}
                          />
                        ) : (
                          supplyList.orderAmount
                        )}
                      </td>
                      <td>{supplyList.supply.supplyPrice}</td>
                      <td>{supplyList.supply.supplyPrice * supplyList.orderAmount}</td>
                      <td>{supplyList.supply.supplyCaution}</td>
                      {/* <td>
                        {isEditing === i ? (
                          <button type='button' onClick={() => setIsEditing(-1)}>저장</button>
                        ) : (
                          <button type='button' onClick={() => handleEdit(i)}>수정</button>
                        )}
                      </td> */}
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  //발주 내역 띄우기
  useEffect(() => {
    axios.get('/api_order/getAllOrder')
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //상세 버튼 누르면 나오는 주문서 내용 채우기
  const getSupplyList = (orderNum) => {
    axios.get(`/api_order/getOrderSupplyList/${orderNum}`)
      .then((res) => {
        setOrderSupplyList(res.data);
      })
      .catch((error) => {
        alert('주문번호에 따른 물품 내역 불러오기 오류');
        console.log(error);
      });
  };

  function onClickModalBtn() {
    setIsShow(false);
  }

  return (
    <div className='container'>
      <h1 className='title-div'>발주 내역</h1>
      <table className='orderList-table-div'>
        <thead>
          <tr>
            <td>선택</td>
            <td>No.</td>
            <td>발주자</td>
            <td>발주일</td>
            <td>메모</td>
            <td>상태</td>
            <td>상세</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            orderList.map((order, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input
                      type="checkbox"
                      checked={checkedOrders.includes(order.orderNum)}
                      onChange={() => handleCheckboxChange(order.orderNum)}
                      disabled={isOrderCompleted(order) || isOrderCanceled(order)}
                    />
                  </td>
                  <td>{i + 1}</td>
                  <td>{order.orderManager}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.orderNote}</td>
                  <td>{order.orderStatus}</td>
                  <td>
                    <button type='button' onClick={() => {
                      setIsShow(true);
                      getSupplyList(order.orderNum);
                    }}
                      disabled={isOrderCompleted(order) || isOrderCanceled(order)}>
                      상세</button>
                  </td>
                  <td><button type='button' onClick={() => cancelOrder(order.orderNum)}
                    disabled={isOrderCompleted(order) || isOrderCanceled(order)}>
                    취소</button></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

      <div style={{ marginTop: '20px' }}>
        <button type='button' onClick={store} disabled={checkedOrders.some(orderNum => isOrderCompleted(orderList.find(order => order.orderNum === orderNum)))}>
          입고
        </button>
      </div>

      {isShow &&
        <Modal content={setModalContent}
          setIsShow={setIsShow}
          clickCloseBtn={onClickModalBtn}
          handleSave={handleSave} />}
    </div>
  );
};

export default OrderList;
