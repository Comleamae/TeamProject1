import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './UserLayout.css'

import '../Footer.css'

import { MdMenu } from 'react-icons/md';
import Footer from '../Footer';

const UserLayout = ({loginInfo, setLoginInfo, setIsAdmin}) => {
  const navigate = useNavigate();

  return (
    <div className='layout-div'>
 <div className='header'>
          <div className='header-index'>
  
            <div id='btn-top-menus'>
              <button type='button' className='menu' id='main-menu'>
                <MdMenu className='menu-icon' />
              </button>
              {/* 
              <div>
                <ul>
                  <li>목록목록</li>
                </ul>
              </div> 
              */}
            </div>
  
            <Link to="/" className='logo'>
              <img className='logo-img' src='http://localhost:8080/images/logo.png' />
              그린대학교병원
            </Link>
            {
              Object.keys(loginInfo).length != 0 ?
                //로그인 하였다면
                // 회원 이름 + 로그아웃 버튼
                <div>
                  {loginInfo.memName}님 안녕하세요.
                  {/* Logout 글자에 손대면 cursor pointer 해주세요 */}
  
                  {/* 클릭 시 로그아웃 */}
                  <span onClick={(e) => {
                    window.sessionStorage.removeItem('loginInfo')
                    setLoginInfo({});
                    navigate('/')
                  }}>Logout</span>
  
                </div>
                :
                //비로그인 상태라면
                //로그인 + 회원가입 + 관리자전용
                <div>
                  <ul className='login-box'>
                    <li>
                      <Link to='/login' className='user-login'>로그인</Link>
                    </li>
                    <li>
                      <Link onClick={(e)=>{setIsAdmin(true)}} to='/admin/login' className='admin-login'>
                        직원전용
                      </Link>
                    </li>
                    <li>
                      <select>
                        <option>KOR</option>
                        <option>ENG</option>
                      </select>
                    </li>
                  </ul>
                </div>
            }
          </div>
        </div>

      <Outlet />

      <Footer/>
    </div>    
  )
}

export default UserLayout
