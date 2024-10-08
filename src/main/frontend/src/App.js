import './App.css';
import './reset.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminLayout from '../src/pages/admin/AdminLayout'
import UserLayout from '../src/pages/user/UserLayout'
import ClinicPrint from './pages/user/pjw/ClinicPrint';
import PrintForm from './pages/user/pjw/PrintForm';
import PrintForm2 from './pages/user/pjw/PrintForm2';
import PrintForm3 from './pages/user/pjw/PrintForm3';
import PrintForm4 from './pages/user/pjw/PrintForm4';
import MoneyIn from './pages/user/cyh/MoneyIn';
import PayMoney from './pages/user/cyh/PayMoney';
import JoinStep1 from './pages/user/kth/JoinStep1';
import JoinStep2 from './pages/user/kth/JoinStep2';
import JoinStep3 from './pages/user/kth/JoinStep3';
import Login from './pages/user/kth/Login';
import Main from './pages/Main';
import NewVisit from './pages/admin/ksh/NewVisit';
import ReVisit from './pages/admin/ksh/ReVisit';
import Visitant from './pages/admin/ksh/Visitant';
import TreChart from './pages/admin/ksh/TreChart';
import FindId from './pages/user/kth/FindId';
import FindPw from './pages/user/kth/FindPw';
import SearchStaff from './pages/user/kth/SearchStaff';
import AdminLogin from './pages/admin/kth/AdminLogin';
import AdminMain from './pages/admin/kth/AdminMain';
import AdminJoin from './pages/admin/kth/AdminJoin';
import JoinStep1_1 from './pages/user/kth/JoinStep1_1';
import OrderLayout from './pages/order/kth/OrderLayout';
import RequestOrder from './pages/order/kth/RequestOrder';
import ManageSupply from './pages/order/kth/ManageSupply';
import RegistSupply from './pages/order/kth/RegistSupply';
import OrderList from './pages/order/kth/OrderList';
import JoinSelect from './pages/user/kth/JoinSelect';
import KakaoMap from './pages/user/ksh/KakaoMap';





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
        <Route path='/' element={<UserLayout loginInfo={loginInfo} setLoginInfo={setLoginInfo} isAdmin={isAdmin} />}>

          {/* 메인화면 */}
          <Route path="" element={<Main />} />

          <Route path='visitant' element={<Visitant />} />

          {/* 의료진 찾기 */}
          <Route path='searchStaff' element={<SearchStaff />} />

          {/* 로그인 * 회원가입 페이지 */}
          <Route path='joinSelect' element={<JoinSelect /> } />
          <Route path='joinStep1' element={<JoinStep1 />} />
          <Route path='joinStep1_1' element={<JoinStep1_1 />} />
          <Route path='joinStep2' element={<JoinStep2 />} />
          <Route path='joinStep3' element={<JoinStep3 />} />
          <Route path='login' element={<Login setLoginInfo={setLoginInfo} />} />
          <Route path='findId' element={<FindId />} />
          <Route path='findPw' element={<FindPw />} />

          {/* 진료관련 증명서 출력 */}
          <Route path='clinicPrint' element={<ClinicPrint isLogin={loginInfo} setIsLogin={setLoginInfo} />}>
            <Route path='printForm/:patNum/:treNum' element={<PrintForm />} />
            <Route path='printForm2/:patNum/:treNum' element={<PrintForm2 />} />
            <Route path='printForm3/:patNum/:treNum' element={<PrintForm3 />} />
            <Route path='printForm4/:patNum/:treNum' element={<PrintForm4 />} />
          </Route>

          <Route path='kakaoMap' element={<KakaoMap/>}/>
        </Route>

        {/* 진료비 수납내용 */}
        <Route path='moneyin' element={<MoneyIn />} />

        {/* 진료비 결제창 */}
        <Route path='payMoney' element={<PayMoney />} />

        {/* 관리자 페이지
            <Route path='/admin' element={<AdminLayout />} >
              <Route path='clinicList' element={<ClinicList />} />
              <Route path='moneyln' element={<MoneyIn />} />
  
              환자 진료 관리
              <Route path='patientInfo' element={<PatientInfo />}>
                <Route path='detailInfo' element={<DetailInfo/>}/>
              </Route>
            </Route> */}


        <Route path='/admin' element={<AdminLayout />}>
          <Route path='' element={<AdminMain />} />
          <Route path='login' element={<AdminLogin setLoginInfo={setLoginInfo} />} />
          <Route path='join' element={<AdminJoin />} />
          {/* <Route path='visitant' element={<Visitant />} /> 유저로 이사감 */}
          <Route path='newVisit' element={<NewVisit />} />
          <Route path='reVisit' element={<ReVisit />} />
          <Route path='treChart' element={<TreChart />} />
        </Route>

        {/* 발주 페이지 */}
        <Route path='/order' element={<OrderLayout/>}>
          <Route path='manageSupply' element={<ManageSupply />} />
          <Route path='requestOrder' element={<RequestOrder />} />
          <Route path='registSupply' element={<RegistSupply />} />
          <Route path='orderList' element={<OrderList />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
