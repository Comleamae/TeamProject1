import React, { useEffect, useState } from 'react'
import './OrderList.css'
import axios from 'axios'

const OrderList = () => {

  const [orderList, setOrderList] = useState([])

  useEffect(() => {
    axios.get('/api_order/getAllOrder')
      .then((res) => {
        setOrderList(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(orderList)
  return (
    <div>
      <h1>발주 내역</h1>
      <table className='orderList-table-div'>
        <thead>
          <tr>
            <td>No.</td>
            <td>발주자</td>
            <td>발주일</td>
            <td>수량</td>
            <td>메모</td>
            <td>입고</td>
          </tr>
        </thead>
        <tbody>
          {
            orderList.map((order, i) => {
              return (
                <tr key={i}>
                  <td>{orderList.length - i}</td>
                  <td>{order.orderManager}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.orderNote}</td>
                  <td><button type='button'>입고</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default OrderList