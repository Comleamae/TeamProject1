import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './reset.css'
import UserLayout from './pages/user/UserLayout'
import AdminLayout from './pages/admin/AdminLayout'
import ClinicPrint from './pages/user/pjw/ClinicPrint';
import ClinicList from './pages/admin/pjw/ClinicList';


function App() {

  const navigate = useNavigate()

  return (
    <div className="App">
      <h1>그린 대학 병원</h1>

     

      <div className='intro-div'>
        
      </div>
      
     <div className='layout-div'>
       <Routes>
        {/* 유저 페이지 */}
        <Route path='/user' element={<UserLayout/>}>
          <Route path='clinicPrint' element={<ClinicPrint/>}/>
        </Route>
  
        {/* 관리자 페이지 */}
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='clinicList' element={<ClinicList/>}/>
        </Route>
  
       </Routes>
     </div>
    
     <div className='work-selector'>
        <div>
          로그인
        </div>
        <div>
          <span onClick={navigate('/user/clinicPrint')}>진료기능</span>
        </div>
        <div>
          <span onClick={navigate('/admin/cliniList')}>의사기능</span>
        </div>
        <div>
          계산기능
        </div>
        <div>
          병원소개
        </div>
      </div>

    </div>
  );
}

export default App;
