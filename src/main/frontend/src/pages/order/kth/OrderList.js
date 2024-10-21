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
  const [isEditing, setIsEditing] = useState(-1); // 수정 모드 활성화 인덱스
  const [checkedOrders, setCheckedOrders] = useState([]); // 체크된 주문 관리

  const handleCheckboxChange = (orderNum) => {
    setCheckedOrders((prevCheckedOrders) => {
      if (prevCheckedOrders.includes(orderNum)) {
        return prevCheckedOrders.filter(num => num !== orderNum);
      } else {
        return [...prevCheckedOrders, orderNum];
      }
    });
  };

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = () => {
    axios.put(`/api_order/updateOrderSupply`, orderSupplyList)
      .then(res => {
        alert('db변경 성공');
      })
      .catch(error => {
        console.log(error);
        alert('db변경 오류');
      });
    setIsEditing(-1); // 수정 모드 종료
    console.log(orderSupplyList);
  };

  const store = () => {
    if (checkedOrders.length === 0) {
      alert("체크된 주문이 없습니다.");
      return;
    }

    checkedOrders.forEach(orderNum => {
      axios.put(`/api_order/updateOrderStatus/${orderNum}`)
        .then(res => {
          console.log(`주문 ${orderNum} 상태 업데이트 완료:`, res.data);
          // 여기에 공급품의 현재 보유량을 늘리는 로직 추가
          //ex. 주문번호 1,2번 선택 후 입고 시 1,2번에 있는 각각의 물품량을 supply 테이블에 업데이트
          //그러면 우리는 order 자체를 넘기냐 orderSupply정보를 넘기냐...
          //반복문을 통해 체크한 order를 전부 보내고 있다
          //그러면 우리는 
          axios.put(`/api_order/updateSupplyAmount/${orderNum}`)
            .then(res => {
              console.log(`주문 ${orderNum} 공급품 보유량 업데이트 완료:`, res.data);
            })
            .catch(error => {
              console.log(`주문 ${orderNum} 공급품 보유량 업데이트 실패:`, error);
            });
        })
        .catch(error => {
          console.log(`주문 ${orderNum} 상태 업데이트 실패:`, error);
        });
    });

    setCheckedOrders([]); // 체크 상태 초기화
  };

  function setModalContent() {
    return (
      <div>
        <h3>주문한 물품정보 테이블</h3>
        <div>
          <table>
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
                <td>수정</td>
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
                      <td>
                        {isEditing === i ? (
                          <button type='button' onClick={() => setIsEditing(-1)}>저장</button>
                        ) : (
                          <button type='button' onClick={() => handleEdit(i)}>수정</button>
                        )}
                      </td>
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

  useEffect(() => {
    axios.get('/api_order/getAllOrder')
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    <div>
      <h1>발주 내역</h1>
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
                      onChange={() => handleCheckboxChange(order.orderNum)}
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
                    }}>상세</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

      {/* 버튼을 테이블 아래에 위치시킵니다. */}
      <div style={{ marginTop: '20px' }}>
        <button type='button' onClick={store}>입고</button>
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
