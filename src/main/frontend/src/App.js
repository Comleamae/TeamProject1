import './App.css';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './reset.css'
import { useState } from 'react';
import './reset.css'
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
import PayMoney from './pages/user/cyh/PayMoney';
import Join from './pages/user/kth/Join';
import Login from './pages/user/kth/Login';
import Main from './pages/Main';

function App() {

  const navigate = useNavigate()

  //로그인 정보를 받아올 state변수
  const[isLogin, setIsLogin] = useState(false)


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
        {/* {isMainVisible && <Main/>} */}

      </div>

      
      <div className='layout-div'>
        <Routes>
          {/* 유저 페이지 */}
          <Route path='/user' element={<UserLayout />}>
            {/* 로그인 * 회원가입 페이지 */}
            <Route path='join' element={<Join />} />
            <Route path='login' element={<Login />} />

            <Route path='clinicPrint' element={<ClinicPrint isLogin={isLogin} setIsLogin={setIsLogin} />}>
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
          </Route>
        {/* </Route> */}
  
        {/* 관리자 페이지 */}
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='clinicList' element={<ClinicList/>}/>
          <Route path='moneyln' element={<MoneyIn/>}/>
        </Route>
        </Routes>


        <Routes>
          {/* 관리자 페이지 */}
          <Route path='/admin' element={<AdminLayout />} />
          {/* 예약 조회 */}
          <Route path='/admin/reserv' element={<Reserv />} />
          {/* 환자 정보 */}
          <Route path='/admin/patientInfo' element={<PatientInfo />} />
          {/* 환자 정보 수정 */}

          {/* 진료 이력 */}
          <Route path='/admin/MedicalHistory' element={<MedicalHistory />} />
          {/* 처 방 전 */}
          <Route path='/admin/Presc' element={<Presc />} />
          <Route>
          </Route>
        </Routes>


        <div className='work-selector'>
          <div>
            로그인
          </div>
          <div onClick={(e) => { navigate('/user/clinicPrint') }}>
            <span>진료</span>
          </div>
          <div onClick={(e) => { navigate('/admin/clinicList') }}>
            <span>의사</span>
          </div>
          <div onClick={(e) => { navigate(`/admin/moneyln`) }}>
            데스크
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
