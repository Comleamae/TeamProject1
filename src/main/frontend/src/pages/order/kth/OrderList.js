import React, { useEffect, useState } from 'react'
import './OrderList.css'
import axios from 'axios'

const OrderList = () => {

  const [orderList, setOrderList] = useState([])

  useEffect(() => {
    axios.get('/api_order/orderList')
      .then((res) => {
        setOrderList(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1>발주 내역</h1>
      <table className='orderList-table-div'>
        <thead>
          <tr>
            <td>No.</td>
            <td>물품번호</td>
            <td>발주자</td>
            <td>발주일</td>
            <td>수량</td>
            <td>메모</td>
          </tr>
        </thead>
        <tbody>
          {
            orderList.map((order, i) => {
              <tr key={i}>
                <td>{orderList.length - i}</td>
                <td>{order.supplyNum}</td>
                <td>{order.orderManager}</td>
                <td>{order.orderDate}</td>
                <td>{order.supplyAmount}</td>
                <td>{order.orderNote}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default OrderList