import './App.css';
import './reset.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminLayout from '../src/pages/admin/AdminLayout'
import UserLayout from '../src/pages/user/UserLayout'

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
import ReservReg from './pages/user/ksh/ReservReg';
import NewVisit from './pages/admin/ksh/NewVisit';
import ReVisit from './pages/admin/ksh/ReVisit';
import Visitant from './pages/admin/ksh/Visitant';
import ReservInquiry from './pages/user/ksh/ReservInquiry';
import Footer from './pages/Footer';
// import '../src/pages/Footer.css'
import { BiSolidPhoneCall } from "react-icons/bi"; //대표전화 아이콘
import AdminLogin from './pages/admin/pjw/AdminLogin';
import AdminJoin from './pages/admin/pjw/AdminJoin';

const App = () => {

  const navigate = useNavigate()

  //로그인한 회원의 정보를 받아올 state변수
  const [loginInfo, setLoginInfo] = useState({})

  //내가 관리자?
  const [isAdmin, setIsAdmin] = useState(false)

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
          <Routes>
            {/* 유저 페이지 */}
            <Route path='/' element={<UserLayout loginInfo={loginInfo} setLoginInfo={setLoginInfo} isAdmin={isAdmin}/>}>
                {/* 메인화면 */}
                <Route path="" element={<Main/>} />

              {/* 로그인 * 회원가입 페이지 */}
              <Route path='join' element={<Join />} />
              <Route path='login' element={<Login setLoginInfo={setLoginInfo} />} />
  
              <Route path='clinicPrint' element={<ClinicPrint isLogin={loginInfo} setIsLogin={setLoginInfo}/>}>
                <Route path='printForm/:patNum/:treNum' element={<PrintForm  />} />
                <Route path='printForm2/:patNum/:treNum' element={<PrintForm2 />} />
                <Route path='printForm3/:patNum/:treNum' element={<PrintForm3 />} />
                <Route path='printForm4/:patNum/:treNum' element={<PrintForm4 />} />
              </Route>
            
              {/* 진료비 수납내용 */}
              <Route path='moneyin' element={<MoneyIn />} />
              {/* 진료비 결제창 */}
              <Route path='payMoney' element={<PayMoney />} />
            </Route>
  
            {/* 관리자 페이지
            <Route path='/admin' element={<AdminLayout />} >
              <Route path='clinicList' element={<ClinicList />} />
              <Route path='moneyln' element={<MoneyIn />} />
  
              환자 진료 관리
              <Route path='patientInfo' element={<PatientInfo />}>
                <Route path='detailInfo' element={<DetailInfo/>}/>
              </Route>
            </Route> */}
          </Routes>

          <Routes>
            <Route path='/admin' element={<AdminLayout/>}>
              <Route path='login' element={<AdminLogin setLoginInfo={setLoginInfo}/>}/>
              <Route path='join' element={<AdminJoin/>}/>
              <Route path='visitant' element={<Visitant/>}/>
              <Route path='newVisit' element={<NewVisit/>}/>
              <Route path='reVisit' element={<ReVisit/>}/>
            </Route>
          </Routes>

    </div >
  );
}

export default App;
