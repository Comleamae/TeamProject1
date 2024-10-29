import React from 'react'
import './OrderLayout.css'
import { IoIosLogOut } from "react-icons/io";
import { Link, Outlet, useNavigate } from 'react-router-dom'


const OrderLayout = () => {
  const navigate = useNavigate()
  return (
<<<<<<< HEAD
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
=======
    <div className='sendOrder-main'>
      <div className='login-in'>
        <p>000님 환영합니다!</p>
        <button type='button'>로그아웃<IoIosLogOut /></button>
      </div>
      <div className='main-order-page'>
        <div className='leftNav'>
          <Link to="/" className='logo00'>
            <img className='logo-img11' src='http://localhost:8080/images/logo.png' />
          </Link>
          <ul>
            <li>
              발주관리
              <ul className='submenu'>
                <li>
                  <span onClick={(e)=>{navigate(`/order/manageSupply`)}}>재고 관리</span>
                </li>
                <li>
                  <span onClick={(e)=>{navigate(`/order/requestOrder`)}}>발주 신청</span>
                </li>
                <li>
                  <span onClick={(e)=>{navigate(`/order/registSupply`)}}>신규 물품 등록</span>
                </li>
              </ul>  
            </li>
            <li>
              발주처리
              <ul className='submenu'>
                <li>
                  <span onClick={(e)=>{navigate(`/order/orderList`)}}>발주 내역</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className='sss'>
          <Outlet/>
        </div>

>>>>>>> cyh
      </div>
    </div>
  )
}

export default OrderLayout