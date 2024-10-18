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

  // const deleteOrderSupply = (orderSupplyNum) => {
  //   const chkDelete = window.confirm('삭제하시겠습니까?');
  //   if (chkDelete) {
  //     axios
  //       .delete(`/api_order/deleteOrderSupply/${orderSupplyNum}`)
  //       .then((res) => {
  //         alert('삭제가 완료되었습니다.');
  //         const currentOrderNum = orderSupplyList[0]?.orderNum; 
  //         if (currentOrderNum) {
  //           getSupplyList(currentOrderNum);
  //         }
  //       })
  //       .catch((error) => {
  //         alert('삭제 실패');
  //         console.log(error);
  //       });
  //   }
  // };

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = () => {
    // 수정된 값을 서버에 저장하는 로직 추가
    // 예를 들어, axios.put을 사용
    // 현재 orderSupplyList는 수정이 완료 된 상태인데 이걸 어떻게 넘겨야 전체를 다 바꾸는 or 하나씩 반복해 전체를 바꾸는 방식이 될까
    axios.put(`/api_order/updateOrderSupply`, orderSupplyList)
      .then(res => {
        alert('db변경 성공')
      })
      .catch(error => {
        console.log(error)
        alert('db변경 오류');
      })
    setIsEditing(-1); // 수정 모드 종료
    console.log(orderSupplyList)
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
                {/* <td>삭제</td> */}
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
                            onChange={(e) => supplyList.orderAmount = e.target.value} // 실시간으로 화면과 react 데이터에서 수정(db에 넘기기만 하면 됨.)
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
                      {/* <td><button type='button' onClick={() => { deleteOrderSupply(supplyList.orderSupplyNum); }}>삭제</button></td> */}
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
            <td>No.</td>
            <td>발주자</td>
            <td>발주일</td>
            <td>메모</td>
            <td>상세</td>
          </tr>
        </thead>
        <tbody>
          {
            orderList.map((order, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{order.orderManager}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.orderNote}</td>
                  <td><button type='button' onClick={() => {
                    setIsShow(true);
                    getSupplyList(order.orderNum);
                  }}>상세</button></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      {isShow &&
        <Modal content={setModalContent}
          setIsShow={setIsShow}
          clickCloseBtn={onClickModalBtn}
          handleSave={handleSave} />}
    </div>
  );
};

export default OrderList;
