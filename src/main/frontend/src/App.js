import './App.css';
import './reset.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import { MdMenu } from "react-icons/md"; //메뉴 아이콘
import Main from './pages/Main';


function App() {

  const navigate = useNavigate()

  //로그인 여부 정보를 받아올 state변수
  const [isLogin, setIsLogin] = useState(false)

  //로그인한 회원의 정보를 받아올 state변수
  const [loginInfo, setLoginInfo] = useState({})

  //로그인한 회원의 정보로 로그인 배너 생성
  useEffect(() => {
    //로그인하면서 sessionStorage에 저장한 정보 가져오기
    const sessionLoginInfo = window.sessionStorage.getItem('loginInfo')

    //로그인 하였다면
    if (sessionLoginInfo != null) {
      //로그인 정보를 객체로 변환
      const obj_loginInfo = JSON.parse(sessionLoginInfo);

      //state변수에 로그인한 회원 정보 저장
      setLoginInfo(obj_loginInfo)
    }
  }, [])

  return (
    <div className="App">

      <div className='header'>
        <div className='header-index'>

          <div id='btn-top-menus'>
            <button type='button' className='menu' id='main-menu'>
            <MdMenu className='menu-icon'/>
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
          }
        </div>
      </div>

      <div className='layout-div'>
        <Routes>

          {/* 메인화면 */}
          <Route path="/" element={<Main />} />

          {/* 유저 페이지 */}
          <Route path='/user' element={<UserLayout />}>
            {/* 로그인 * 회원가입 페이지 */}
            <Route path='join' element={<Join />} />
            <Route path='login' element={<Login setLoginInfo={setLoginInfo} />} />

            {/* 환자 진료 */}
            <Route path='clinicPrint' element={<ClinicPrint isLogin={isLogin} setIsLogin={setIsLogin} />}>
              <Route path='printForm/:patNum/:treDate' element={<PrintForm />} />
              <Route path='printForm2/:patNum/:treDate' element={<PrintForm2 />} />
              <Route path='printForm3/:patNum/:treDate' element={<PrintForm3 />} />
              <Route path='printForm4/:patNum/:treDate' element={<PrintForm4 />} />
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
            <Route path='reserv' element={<Reserv />} />

            {/* 환자 정보 */}
            <Route path='patientInfo' element={<PatientInfo />} />

            {/* 환자 정보 수정 */}

            {/* 진료 이력 */}
            <Route path='MedicalHistory' element={<MedicalHistory />} />

            {/* 처 방 전 */}
            <Route path='Presc' element={<Presc />} />

          </Route>
        </Routes>
    </div>
  </div >

  );
}

export default App;
