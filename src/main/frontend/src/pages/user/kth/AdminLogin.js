import React, { useState } from 'react'
import './AdminLogin.css'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'


const AdminLogin = ({}) => {

  const navigate = useNavigate()

   //로그인 시 입력한 정보
  const [loginData, setLoginData] = useState({
    docLinum: '',
    docPw: ''
  });

  
  //입력한 정보로 바꾸기
  function changeLoginData(e) {
    const newData = {
      ...loginData,
      [e.target.name]: e.target.value
    }
    setLoginData(newData)
  }

  //로그인 정보 저장
  function saveLoginData(res){
    //sessionStorage에 로그인한 의사의 개인정보 저장
    const doctorLoginInfo = {
      doc_Linum : res.data.docLinum,
      doc_pw : res.data.docPw,
      doc_name : res.data.docName,
      dept_num : res.data.deptNum
    }
    const json_doctorLoginInfo = JSON.stringify(doctorLoginInfo);

    window.sessionStorage.setItem('doctorLoginInfo', json_doctorLoginInfo);
    // setLoginInfo(doctorLoginInfo)
    // window.sessionStorage.setItem('doctorLoginInfo', JSON.stringify(doctorLoginInfo));
  }

  //로그인 버튼 클릭시 실행
  function login() {
    axios.post('/doctor/doctorLogin', loginData)
      .then((res) => {
        // 관리자 로그인 시
        if (res.data != '') {
          alert(`${res.data.docName} 의사님 환영합니다.`)
          //의사 메인화면으로 이동
          navigate('/doctor')
          saveLoginData(res)
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
            <input className='admin-input' type='text' name='docLinum' placeholder='의사번호를 입력해주세요' onChange={(e) => { changeLoginData(e) }} />
          </div>
          <div>
            <input className='admin-input' type='password' name='docPw' placeholder='비밀번호를 입력해주세요' onChange={(e) => { changeLoginData(e) }} />
          </div>
        </div>
        <button type='button' onClick={(e) => { login() }}> 로그인</button>
      </div>
    </div>
    <button type='button' onClick={(e)=>{navigate(`/admin/join`)}}>관리자 등록</button>
    <button type='button' onClick={(e)=>(navigate('/admin/visitant'))}>접수 페이지로 이동하는 임시 버튼</button>
    <button type='button' onClick={(e)=>(navigate('/admin/treChart'))}>문진표 작성 페이지로 이동하는 임시 버튼</button>
  </div>

  )
}

export default AdminLogin
