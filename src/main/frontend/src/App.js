import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import Login from './Login';
import Join from './pages/Join';

function App() {

  const navigate = useNavigate()

  //로그인 정보를 받아올 state변수
  const [isLogin, setIsLogin] = useState(false)


  return (
    <div className="App">

      <h1>그린 대학 병원</h1>
      <div className='intro-div'>
      </div>

      <div className='layout-div'>
        <Routes>
          <Route path='/join' element={<Join />} />
          <Route path='/login' element={<Login />} />
          {/* 유저 페이지 */}
          <Route path='/user' element={<UserLayout />}>
            
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


      <div className='work-selector'>
        <div>
          로그인
        </div>
        <div onClick={(e) => { navigate('/user/clinicPrint') }}>
          <span>진료</span>
        </div>
        <div onClick={(e) => { navigate('/admin/cliniList') }}>
          <span>의사</span>
        </div>
        <div onClick={(e) => { navigate(`/admin/moneyln`) }}>
          데스크
        </div>
      </div>
    </div>
  );
}

export default App;
