import './App.css';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './reset.css'
import UserLayout from './pages/user/UserLayout'
import AdminLayout from './pages/admin/AdminLayout'
import ClinicPrint from './pages/user/pjw/ClinicPrint';
import ClinicList from './pages/admin/pjw/ClinicList';
import { useState } from 'react';
import PrintForm from './pages/user/pjw/PrintForm';
import PrintForm2 from './pages/user/pjw/PrintForm2';
import PrintForm3 from './pages/user/pjw/PrintForm3';
import PrintForm4 from './pages/user/pjw/PrintForm4';
import MoneyIn from './pages/user/cyh/MoneyIn';
import PayMoney from './pages/user/cyh/PayMoney';
import Login from './Login';
import Join from './pages/Join';
import Main from './pages/Main';


function App() {

  const navigate = useNavigate()

  //로그인 정보를 받아올 state변수
  const [isLogin, setIsLogin] = useState(false)

  // 메인화면 안보이게하기!! 
  const location = useLocation(); // 현재 경로를 가져옵니다

  // 현재 경로에 따라 Main 컴포넌트를 표시할지 결정합니다
  const isMainVisible = !(
    location.pathname.startsWith('/user/login') ||
    location.pathname.startsWith('/user/join') ||
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/user/clinicPrint')
  );


  return (
    <div className="App">

      <div className='header'>
        <div className='header-index'>
          <Link to="/" className='logo'>
          <img className='logo-img' src='http://localhost:8080/images/logo.png' />
            그린대학교병원
          </Link>

          <div>
            {/* 로그인 + 회원가입 + 관리자전용 */}
            <ul className='login-box'>
              <li>
                <Link to='/user/login' className='user-login'>로그인</Link>
              </li>
              <li>
                <Link to='/admin/clinicList' className='admin-login'>
                  직원적용
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
        </div>

        {/* 메인화면 */}
        {isMainVisible && <Main />}

      </div>

      <div className='layout-div'>
        <Routes>

          {/* 유저 페이지 */}
          <Route path='/user' element={<UserLayout />}>

            {/* 로그인 * 회원가입 페이지 */}
            <Route path='join' element={<Join />} />
            <Route path='login' element={<Login />} />

            <Route path='clinicPrint' element={<ClinicPrint isLogin={isLogin} setIsLogin={setIsLogin}/>}>
              <Route path='printForm' element={<PrintForm />} />
              <Route path='printForm2' element={<PrintForm2 />} />
              <Route path='printForm3' element={<PrintForm3 />} />
              <Route path='printForm4' element={<PrintForm4 />} />
            </Route>

            {/* 진료비 수납내용 */}
            <Route path='moneyln' element={<MoneyIn />} />
            {/* 진료비 결제창 */}
            <Route path='payMoney' element={<PayMoney />} />

          </Route>

          {/* 관리자 페이지 */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='clinicList' element={<ClinicList />} />
            <Route path='moneyln' element={<MoneyIn />} />
          </Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
