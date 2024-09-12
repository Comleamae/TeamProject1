import React, { useState } from 'react'
import './AdminJoin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AdminJoin = () => {

  const navigate = useNavigate();

  //등록할 의사 정보
  //deptNum은 외래키이므로 dept테이블에 값이 있어야 등록 가능
  const [adminJoinData, setAdminJoinData] = useState({
    docLinum: 0,
    docPw: '',
    docName: '',
    deptNum: 0,
    memRole : 'doctor'
  })


  //데이터 입력 때마다
  function changeAdminData(e) {
    //데이터 바꾸기
    setAdminJoinData({
      ...adminJoinData,
      [e.target.name]: e.target.value
    })
  }

  //관리자 등록 클릭 시 관리자 정보 데이터 베이스에 등록 후 관리자 로그인으로 이동
  function adminJoin(){
    axios.post('/doctor/insertDoctor', adminJoinData)
    .then((res)=>{
      alert('의사 등록이 완료되었습니다.')
      navigate('/admin/login')
    })
    .catch((error)=>{
      console.log(adminJoinData)
      console.log(error)
    })
  }

  // 가입 취소
  function joinCancel() {
    const cancelChk = window.confirm('가입을 취소하겠습니까?')
    //가입 취소버튼 누를 시 로그인 화면으로
    if (cancelChk) {
      navigate('/login')
    }
    //아니라면 그대로(공백)
  }


  return (
    <div className='join-box'>

      <div className='join-imgdiv'>
        <img src='http://localhost:8080/images/bg_bar.gif' />
        <h5>의사 등록</h5>
      </div>
      <table className='join-table'>
        <tbody>
          <tr>
            <td>의사번호</td>
            <td>
              <input className='input-txt' type='text' name='docLinum' placeholder='의사번호'
                onChange={(e) => {
                  changeAdminData(e);
                }} />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input className='input-txt' type='password' name='docPw' placeholder='비밀번호' onChange={(e) => { changeAdminData(e) }} />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input className='input-txt' type='text' name='docName' placeholder='이름' onChange={(e) => { changeAdminData(e) }} />
            </td>
          </tr>
          <tr>
            <td>진료과번호</td>
            <td>
              <input className='input-txt' type='text' name='deptNum' placeholder='진료과 번호' onChange={(e) => { changeAdminData(e) }}/>
            </td>
          </tr>
        </tbody>
        <div className='join-btn-div'>
          <button type='button' name='join' className='btn-1' onClick={(e) => { adminJoin() }}>
            회원가입
          </button>
          <button type='button' name='join-cancel' className='btn-2' onClick={(e) => { joinCancel() }}>취소</button>
        </div>
      </table>
    </div>
  )
}
export default AdminJoin
