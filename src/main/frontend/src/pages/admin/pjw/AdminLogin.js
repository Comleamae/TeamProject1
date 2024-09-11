import React, { useState } from 'react'
import './AdminLogin.css'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'


const AdminLogin = ({setLoginInfo}) => {

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
        if (res.data != ''&res.data.memRole=='ADMIN') {
          alert(`${res.data.name} 관리자님 환영합니다.`)
          //sessionStorage에 로그인한 관리자의 개인정보 저장
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
  <div className='admin-login-form-div'>
    <div className='admin-login-form'>
      <img src='http://localhost:8080/images/logo-txt.png'/>
      <div className='admin-login-div'>
        <div>
          <div>
            <input className='admin-input' type='text' name='memId' placeholder='아이디를 입력해주세요' onChange={(e) => { changeLoginData(e) }} />
          </div>
          <div>
            <input className='admin-input' type='password' name='memPw' placeholder='비밀번호를 입력해주세요' onChange={(e) => { changeLoginData(e) }} />
          </div>
        </div>
        <button type='button' onClick={(e) => { login() }}> 로그인</button>
      </div>
    </div>
    <button type='button' onClick={(e)=>{navigate(`/admin/join`)}}>관리자 등록</button>
  </div>

  )
}

export default AdminLogin
