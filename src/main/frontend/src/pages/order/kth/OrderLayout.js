import React from 'react'
import './OrderLayout.css'
import { Outlet, useNavigate } from 'react-router-dom'

const SendOrder = () => {
  const navigate = useNavigate()
  return (
    <div className='sendOrder-main'>
      <div>  
        <h3>발주 관리</h3>
        <div>
          <p>
            <span onClick={(e)=>{navigate(`/order/manageSupply`)}}>재고 관리</span>
          </p>
          <p>
            <span onClick={(e)=>{navigate(`/order/requestOrder`)}}>발주 신청</span>
          </p>  
          <p>
            <span onClick={(e)=>{navigate(`/order/registSupply`)}}>신규 물품 등록</span>
          </p>  
        </div>
        <h3>발주 처리</h3>
        <div>
          <p>
            <span onClick={(e)=>{navigate(`/order/orderList`)}}>발주 내역</span>
          </p>
          <p>
            <span></span>
          </p>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>

  )
}

export default SendOrder