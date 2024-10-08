import React, { useState } from 'react'
import './AdminLogin.css'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'


const AdminLogin = ({}) => {

  const navigate = useNavigate()

   //로그인 시 입력한 정보
  const [loginData, setLoginData] = useState({
    adminId: '',
    adminPw: ''
  });

  //입력한 정보로 바꾸기
  function changeLoginData(e) {
    const newData = {
      ...loginData,
      [e.target.name]: e.target.value
    }
    setLoginData(newData)
  }

  // 관리자 로그인 정보 저장
  function saveLoginData(res){
    //sessionStorage에 로그인한 admin의 정보 저장
    // 만약 adminRole이 doctor라면 doctor 테이블에서 불러온 정보를 저장.

    if(res.data.adminRole == 'nurse' || res.data.adminRole == 'staff'){
      const adminLoginInfo = {
        adminId : res.data.adminId,
        adminPw : res.data.adminPw,
        adminName : res.data.adminName
      }
      const json_adminLoginInfo = JSON.stringify(adminLoginInfo);
      window.sessionStorage.setItem('adminLoginInfo', json_adminLoginInfo);
    }
    else if(res.data.adminRole == 'doctor'){
      const adminLoginInfo = {
        docLinum : res.data.adminId,
        docPw : res.data.adminPw,
        docName : res.data.adminName,
        deptNum : res.data.deptNum
      }
      const json_adminLoginInfo = JSON.stringify(adminLoginInfo);
      window.sessionStorage.setItem('adminLoginInfo', json_adminLoginInfo);
    }
    // setLoginInfo(doctorLoginInfo)
    // window.sessionStorage.setItem('doctorLoginInfo', JSON.stringify(doctorLoginInfo));
  }

  //로그인 버튼 클릭시 관리자 로그인
  function login() {
    axios.post('/api_member/adminLogin', loginData)
      .then((res) => {
        // 간호사 로그인 시
        if (res.data.adminRole == 'nurse') {
          alert(`${res.data.adminName} 간호사님 환영합니다.`)
          //간호사 메인화면으로 이동
          navigate('/admin/visitant')
          saveLoginData(res)
        }
        else if(res.data.adminRole == 'staff'){
          alert(`${res.data.adminName} 님 환영합니다.`)
          //직원 메인화면(발주화면)으로 이동
          navigate('/order')
          saveLoginData(res)
        }
        else if(res.data.adminRole == 'doctor'){
          alert(`${res.data.adminName} 의사님 환영합니다.`)
          navigate('/admin/treChart')
          saveLoginData(res)
        }
        else {
          alert('ID(의사번호) 혹은 PW를 확인하세요.')
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
            <input className='admin-input' type='text' name='adminId' placeholder='아이디(의사번호)' onChange={(e) => { changeLoginData(e) }} />
          </div>
          <div>
            <input className='admin-input' type='password' name='adminPw' placeholder='비밀번호' onChange={(e) => { changeLoginData(e) }} />
          </div>
        </div>
        <button type='button' onClick={(e) => { login() }}> 로그인</button>
      </div>
    </div>
    <div className='admin-box-btn'>
      <button type='button' className='sh-btn1' onClick={(e)=>{navigate(`/`)}}>메인화면</button>
      <button type='button' className='sh-btn1' onClick={(e)=>{navigate(`/admin/join`)}}>관리자 등록</button>
    </div>
  </div>

  )
}

export default AdminLogin
