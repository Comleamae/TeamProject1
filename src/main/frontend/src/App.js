import './App.css';
import './reset.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminLayout from '../src/pages/admin/AdminLayout'
import UserLayout from '../src/pages/user/UserLayout'
import PatientInfo from './pages/admin/ksh/PatientInfo';
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
import NewVisit from './pages/user/ksh/NewVisit';
import ReVisit from './pages/user/ksh/ReVisit';
import ReservInquiry from './pages/user/ksh/ReservInquiry';
import Footer from './pages/Footer';
import '../src/pages/Footer.css'
import { BiSolidPhoneCall } from "react-icons/bi"; //대표전화 아이콘




function App() {

  const navigate = useNavigate()

  //로그인 여부 정보를 받아올 state변수
  // const [isLogin, setIsLogin] = useState(false)

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
      {
      isAdmin==true
      ?
      <>
      <div>여긴관리자</div>
      </>
      :
     <>
        <div className='header'>
          <div className='header-index'>
            <div id='btn-top-menus'>
              <button type='button' className='menu' id='main-menu'>
                <MdMenu className='menu-icon' />
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
                      <Link onClick={(e)=>{setIsAdmin(false)}} to='/admin1' className='admin-login'>
                        직원전용
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
  
        <div className='main'>
          <div className='layout-div'>
            <Routes>
              {/* 메인화면 */}
              <Route path="/" element={<Main />} />
  
              {/* 관리자 페이지 */}
              <Route path="/admin1" element={<AdminLayout />} />
    
              {/* 유저 페이지 */}
              <Route path='/user' element={<UserLayout />}>
                {/* 로그인 * 회원가입 페이지 */}
                <Route path='join' element={<Join />} />
                <Route path='login' element={<Login setLoginInfo={setLoginInfo} />} />
    
                <Route path='clinicPrint' element={<ClinicPrint isLogin={loginInfo} setIsLogin={setLoginInfo}/>}>
                  <Route path='printForm/:patNum/:treNum' element={<PrintForm  />} />
                  <Route path='printForm2/:patNum/:treNum' element={<PrintForm2 />} />
                  <Route path='printForm3/:patNum/:treNum' element={<PrintForm3 />} />
                  <Route path='printForm4/:patNum/:treNum' element={<PrintForm4 />} />
                </Route>
    
                {/* 예약 등록 */}
                <Route path='reservReg' element={<ReservReg/>}/>         
                <Route path='newVisit' element={<NewVisit/>}/>
                <Route path='reVisit' element={<ReVisit/>}/>
                <Route path='reservInquiry' element={<ReservInquiry/>}/>
              
                {/* 진료비 수납내용 */}
                <Route path='moneyin' element={<MoneyIn />} />
                {/* 진료비 결제창 */}
                <Route path='payMoney' element={<PayMoney />} />
              </Route>
    
              {/* 관리자 페이지 */}
              <Route path='/admin' element={<AdminLayout />} >
                <Route path='clinicList' element={<ClinicList />} />
                <Route path='moneyln' element={<MoneyIn />} />
    
                {/* 환자 진료 관리 */}
                <Route path='patientInfo' element={<PatientInfo />}>
                </Route>
              </Route>
            </Routes>
          </div>
        </div>
      
        {/* 하단영역 푸터 */}
        <div id='footer' class="footer">
          <div className='footer-content'>
            <div className='call-div'>
              <BiSolidPhoneCall className='icon-1'/>
              <h1>대표전화 : 1588-1234</h1>
            </div>
            <ul class="f_mark">
              <li><img src="http://localhost:8080/images/f_mark_isms.png" class="markImg" />
              <span>인증범위 : 의료정보시스템 (OCS, EMR) 및 홈페이지 서비스 운영<br/>유효기간 : 2024.01.20 ~ 2027.01.19</span>
              </li>
              <li><img src="http://localhost:8080/images/f_mark_alio.png" alt="공공기관 채용정보 시스템" class="markImg"/><span>ALIO JOB-ALIO</span>
              </li>
              <li><img src="http://localhost:8080/images/f_mark_koiha.png" alt="HEALTHCARE QUALITY PATIENT SAFETY 보건복지부 인증 의료기관" class="markImg"/><span>보건복지부 의료기관 평가인증</span>
              </li>
            </ul>
          </div>
          <div>
            <ul class="f_menu">
              <li><a class="point" href="/">개인정보처리방침</a></li>
              <li><a href="/">영상정보처리기기 설치운영방침</a></li>
              <li><a href="/pnuh/etc/refusal.do">이메일주소수집거부</a></li>
              <li><a href="/pnuh/etc/right.do">환자권리장전</a></li>
              <li><a href="/pnuh/etc/charter.do">고객헌장</a></li>
              <li><a href="http://gw.pnuh.co.kr" target="_blank">그룹웨어</a></li>
              <li><a href="https://gwo.pnuh.co.kr" target="_blank">그룹웨어(외부접속용)</a></li>
            </ul>
            
            <address>
              <span>(49241) 울산광역시 서구 구덕로 179 그린대학교병원</span>
              <em>대표전화 : 052.240.7000</em>
            </address>
            <p class="copyright">
              Copyright 2020 Pusan National University Hospital. All Rights Reserved.
            </p>
          </div>
        </div>
  
     </>}
    </div >
  );
}

export default App;
