import React from 'react'
import './OrderLayout.css'
import { IoIosLogOut } from "react-icons/io";
import { Link, Outlet, useNavigate } from 'react-router-dom'


const OrderLayout = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='m-h'>
        <div className='admin-header'>
          <div className='logo'>
            <img className='adminLogo' src='http://localhost:8080/images/logo.png'/>
            <h1>그린대학교병원</h1>
          </div>
          <ul className='admin-header-ul'>
            <li>
              <p onClick={(e) => { navigate(`/`) }}>메인 화면</p>
            </li>
            <li>
              <p onClick={(e) => {}}>상세 정보</p>
            </li>
            <li>
              <p onClick={(e) => {}}>발주</p>
            </li>
            <li>
              <p onClick={(e) => {}}>수주</p>
            </li>
          </ul>



        </div>
      </div>


      <div className='order-main'>
        <div>
          <h3>관리</h3>
          <div>
            <p>
              <span onClick={(e) => { navigate(`/order/manageSupply`) }}>재고 관리</span>
            </p>
            <p>
              <span onClick={(e) => { navigate('/order/requestOrder') }}>발주신청</span>
            </p>
            <p>
              <span onClick={(e) => { navigate(`/order/registSupply`) }}>신규물품등록 </span>
            </p>
          </div>
          <h3>조회</h3>
          <div>
            <p>
              <span onClick={(e) => { navigate(`/order/orderList`) }}>발주 내역</span>
            </p>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default OrderLayout