import React from 'react'
import './ManageSupply.css'
const ManageSupply = () => {
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
        <tr>
          <td>1</td>
          <td><img src='l'></img></td>
          <td>첫상품</td>
          <td>10000$</td>
          <td>남은 수량 수</td>
          <td>입고 예정량</td>
          <td>앞에 두 개 합이랑 얼마 차이나는지</td>
        </tr>
      </tbody>
    </table>

  </div>
  )
}

export default ManageSupply