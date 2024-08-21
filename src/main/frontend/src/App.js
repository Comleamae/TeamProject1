import './App.css';
import { Route, Routes } from 'react-router-dom';
import './reset.css'
import AdminLayout from '../src/pages/admin/AdminLayout'
import UserLayout from '../src/pages/user/UserLayout'

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
      <Route path='/admin' element={<AdminLayout/>}>
          
          {/* 차트 작성 */}
          <Route path='chartWrite' element={<chartWrite/>}/>
          {/* 진료 이력 */}
          <Route path='chartCheck' element={<chartCheck/>}/>
          {/* 처방전 */}
          <Route path='chartEat' element={<chartEat/>}/>
      </Route>

      {/*  */}
      <Route>

      </Route>
     </Routes>
    </div>
  );
}

export default App;
