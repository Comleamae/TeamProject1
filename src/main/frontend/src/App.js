import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './reset.css'
import AdminLayout from '../src/pages/admin/AdminLayout'
import UserLayout from '../src/pages/user/UserLayout'
import Reserv from './pages/admin/Reserv';
import PatientInfo from './pages/admin/PatientInfo';
import MedicalHistory from './pages/admin/MedicalHistory';
import PayMoney from './pages/user/cyh/PayMoney';
import MoneyIn from './pages/user/cyh/MoneyIn';
import ClinicPrint from './pages/user/pjw/ClinicPrint';
import ClinicList from './pages/admin/pjw/ClinicList';
import PrintForm from './pages/user/pjw/PrintForm';
import PrintForm2 from './pages/user/pjw/PrintForm2';
import Presc from './pages/admin/ksh/Presc';


function App() {

  const navigate = useNavigate()

  //로그인 정보를 받아올 state변수
  const[isLogin, setIsLogin] = useState(false)


  return (
    <div className="App">
      <h1>그린 대학 병원</h1>
      <div className='intro-div'>
        
      </div>

      
      <div className='layout-div'>
        <Routes>
          {/* 유저 페이지 */}
          <Route path='/user' element={<UserLayout/>}>
            <Route path='clinicPrint' element={<ClinicPrint isLogin={isLogin} setIsLogin={setIsLogin}/>}>
              <Route path='printForm' element={<PrintForm/>}/>
              <Route path='printForm2' element={<PrintForm2/>}/>
            </Route>

            {/* 진료비 수납내용 */}
            <Route path='moneyln' element={<MoneyIn />}/>
              
            
            {/* 진료비 결제창 */}
            <Route path='payMoney' element={<PayMoney />} />
          </Route>

        
  
        {/* 관리자 페이지 */}
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='clinicList' element={<ClinicList/>}/>
          
          {/* 예약 조회 */}
          <Route path='/admin/reserv' element={<Reserv/>}/>
          {/* 환자 정보 */}
          <Route path='/admin/patientInfo' element={<PatientInfo/>}/>
          {/* 환자 정보 수정 */}

          {/* 진료 이력 */}
          <Route path='/admin/MedicalHistory' element={<MedicalHistory/>}/>
          {/* 처 방 전 */}
          <Route path='/admin/Presc' element={<Presc/>}/>

        </Route>
       </Routes>
      </div>
    
      <div className='work-selector'>
        <div>
          로그인
        </div>
        <div onClick={(e)=>{navigate('/user/clinicPrint')}}>
          <span>진료</span>
        </div>
        <div onClick={(e)=>{navigate('/admin/cliniList')}}>
          <span>의사</span>
        </div>
        {/* 로그인 정보에 따라서 계산하는 사이트가 달라져야한다 */}
        <div onClick={(e)=>{navigate(`/${isLogin.memRole}/moneyln`)}}>
          데스크
        </div>
      </div>


    <Routes>
      {/* 유저 페이지 */}
      <Route path='/user' element={<UserLayout/>}>
        {/* <Route path='' element={}/> */}
      </Route>

      {/* 관리자 페이지 */}
      <Route path='/admin' element={<AdminLayout/>}/>

          {/* 예약 조회 */}
          <Route path='/admin/reserv' element={<Reserv/>}/>
          {/* 환자 정보 */}
          <Route path='/admin/patientInfo' element={<PatientInfo/>}/>
          {/* 환자 정보 수정 */}

          {/* 진료 이력 */}
          <Route path='/admin/MedicalHistory' element={<MedicalHistory/>}/>
          {/* 처 방 전 */}
          <Route path='/admin/Presc' element={<Presc/>}/>
        
      <Route>

      </Route>
    </Routes>

    </div>
  );
}

export default App;
