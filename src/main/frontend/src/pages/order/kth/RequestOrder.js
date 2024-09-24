import React from 'react'
import './RequestOrder.css'

// 발주 화면
const RequestOrder = () => {
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
        <tr>
          <td><input type='checkbox'/></td>
          <td><img src='l'></img></td>
          <td>1</td>
          <td>첫상품</td>
          <td>10000$</td>
          <td>남은 수량 수</td>
          <td><input type='text' name='amount'></input></td>
          <td>합가격</td>
        </tr>
      </tbody>
    </table>
    <button type='button'>발주</button>

  </div>
  )
}

export default RequestOrder