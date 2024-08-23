import './App.css';
import { Route, Routes } from 'react-router-dom';
import './reset.css'
import AdminLayout from '../src/pages/admin/AdminLayout'
import UserLayout from '../src/pages/user/UserLayout'
import Reserv from './pages/admin/Reserv';
import PatientInfo from './pages/admin/PatientInfo';
import MedicalHistory from './pages/admin/MedicalHistory';
import Presc from './pages/admin/Presc';

function App() {

  return (
    <div className="App">
      <h1>그린 대학 병원</h1>
      <div className='login-main-div'>
        <ul>
          <li>아이디</li>
          <li><input type='text' name='idData'/></li>
          <li>비밀번호</li>
          <li><input type='password' name='pwData'/></li>
        </ul>
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
