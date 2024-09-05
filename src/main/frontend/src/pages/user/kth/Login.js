import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = ({ setLoginInfo }) => {
  const navigate = useNavigate()
  //로그인 시 입력한 정보
  const [loginData, setLoginData] = useState({
    memId: '',
    memPw: ''
  });




  //입력한 정보로 바꾸기
  function changeLoginData(e) {
    const newData = {
      ...loginData,
      [e.target.name]: e.target.value
    }
    setLoginData(newData)
  }

  //로그인 버튼 클릭시 실행
  function login() {
    axios.post('/api_member/login', loginData)
      .then((res) => {
        // 로그인 가능 시
        if (res.data != '') {
          alert('환영합니다.')
          //sessionStorage에 로그인한 회원의 개인정보 저장
          const loginInfo = {
            memId: res.data.memId,
            memPW: res.data.memPw,
            memName: res.data.memName,
            memTel: res.data.memTel,
            citizenNum: res.data.citizenNum,
            memAddr: res.data.memAddr,
            addrDetail: res.data.addrDetail,
            memEmail: res.data.memEmail,
            post: res.data.post,
            memRole: res.data.memRole
          }
          const json_loginInfo = JSON.stringify(loginInfo);

          window.sessionStorage.setItem('loginInfo', json_loginInfo);
          navigate('/')
          setLoginInfo(loginInfo)
          window.sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
        }
        else {
          alert('ID 혹은 PW를 확인하세요.')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (

    <div className='login-container'>
      <div className='user-div'>
        <h1>로그인</h1>
        <p>로그인을 하시면 그린대학교병원 홈페이지에서 제공하는 다양한 온라인 서비스를 이용 하실 수 있습니다.</p>
      </div>
      <div className='user-login-txt'>
        <h2>
          <strong>그린대학교병원 홈페이지 서비스를 이용하시려면</strong><br />
          로그인이 필요합니다.
        </h2>
      </div>

      <div className='login-form-div'>
        <div className='login-form'>
          <img src='http://localhost:8080/images/logo.png'/>
          <div className='login-div'>
            <div>
              <div>
                <input className='user-input' type='text' name='memId' placeholder='아이디를 입력해주세요' onChange={(e) => { changeLoginData(e) }} />
              </div>
              <div>
                <input className='user-input' type='password' name='memPw' placeholder='비밀번호를 입력해주세요' onChange={(e) => { changeLoginData(e) }} />
              </div>
            </div>
            <button type='button' onClick={(e) => { login() }}> 로그인</button>
            
          </div>
        </div>
      </div>

      
      <div className='user-btn'>
        <div>
          <p>
            그린대학교병원의 회원이 아니십니까?
          </p>
          <button type='button' className='btn-div' onClick={(e) => { navigate('/join') }}>회원가입</button>
        </div>
        <div>
          <p>
            아이디를 잊으셨습니까?
          </p>
          <button type='button' className='btn-div' onClick={(e) => { navigate('/') }}>아이디 찾기</button>
        </div>
        <div>
          <p>
            비밀번호를 잊으셨습니까?
          </p>
          <button type='button' className='btn-div' onClick={(e) => { navigate('/') }}>비밀번호 찾기</button>
        </div>
      </div>      
    </div>
  )
}
export default Login