import './App.css';
import './reset.css';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from '../src/pages/admin/AdminLayout'
import UserLayout from '../src/pages/user/UserLayout'
import PayMoney from './pages/user/cyh/PayMoney';
import MoneyIn from './pages/user/cyh/MoneyIn';


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
      <div className='layout-div'>
        <Routes>
          {/* 유저 페이지 */}
          <Route path='/user' element={<UserLayout/>}>
    
            {/* 진료비 수납내용 */}
            <Route path='money' element={<MoneyIn />} />

            {/* 진료비 결제창 */}
            <Route path='payMoney' element={<PayMoney />} />
          </Route>
    
          {/* 관리자 페이지 */}
          <Route path='/admin' element={<AdminLayout/>}>
    
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
