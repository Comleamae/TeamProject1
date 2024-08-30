import './App.css';
import './reset.css'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AdminLayout from '../src/pages/admin/AdminLayout'
import UserLayout from '../src/pages/user/UserLayout'
import Reserv from './pages/admin/ksh/Reserv';
import PatientInfo from './pages/admin/ksh/PatientInfo';
import MedicalHistory from './pages/admin/ksh/MedicalHistory';
import Presc from './pages/admin/ksh/Presc';
import ClinicPrint from './pages/user/pjw/ClinicPrint';
import ClinicList from './pages/admin/pjw/ClinicList';
import PrintForm from './pages/user/pjw/PrintForm';
import PrintForm2 from './pages/user/pjw/PrintForm2';
import PrintForm3 from './pages/user/pjw/PrintForm3';
import PrintForm4 from './pages/user/pjw/PrintForm4';
import MoneyIn from './pages/user/cyh/MoneyIn';
import Join from './pages/user/kth/Join';
import Login from './pages/user/kth/Login';
import PayMoney from './pages/user/cyh/PayMoney';
import Main from './pages/Main';
import { MdMenu } from "react-icons/md"; //메뉴 아이콘



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

          <div id='btn-top-menus'>
            <button type='button' className='menu' id='main-menu'>
            <MdMenu className='menu-icon'/>
            </button>
            {/* <div>
              <ul>
                <li>목록목록</li>
              </ul>
            </div> */}
          </div>
          
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
          <Route path='/admin' element={<AdminLayout />} >
            <Route path='clinicList' element={<ClinicList />} />
            <Route path='moneyln' element={<MoneyIn />} />
            {/* 예약 조회 */}
            <Route path='/admin/reserv' element={<Reserv />} />
            {/* 환자 정보 */}
            <Route path='/admin/patientInfo' element={<PatientInfo />} />
            {/* 환자 정보 수정 */}

            {/* 진료 이력 */}
            <Route path='/admin/MedicalHistory' element={<MedicalHistory />} />
            {/* 처 방 전 */}
            <Route path='/admin/Presc' element={<Presc />} />
          </Route>
        </Routes>
      </div>
    
</div>
  );
}

export default App;
