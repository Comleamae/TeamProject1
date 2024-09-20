import React, { useState } from 'react'
import './AdminJoin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AdminJoin = () => {

  const navigate = useNavigate();

  // 등록할 관리자 정보
  // deptNum은 외래키이므로 dept테이블에 값이 있어야 등록 가능
  const [adminJoinData, setAdminJoinData] = useState({
    adminId : '',
    adminPw : '',
    adminName : '',
    deptNum : '',
    adminRole : ''
  })

  //데이터 입력 때마다
  function changeAdminData(e) {
    //데이터 바꾸기
    setAdminJoinData({
      ...adminJoinData,
      [e.target.name]: e.target.value
    })

  }

  
  // 관리자 등록(ADMIN 테이블에 ADMIN 정보 넣기)
  // 관리자 등록 클릭 시 Admin 테이블에 등록 후 관리자 로그인으로 이동
  function adminJoin() {
    axios.post('/api_member/insertAdmin', adminJoinData)
      .then((res) => {

        //admin 테이블 등록 후 알림창
        if(adminJoinData.adminRole == 'nurse'){
          alert('간호사 등록이 완료되었습니다.')
        }
        
        else if(adminJoinData.adminRole == 'staff'){
          alert('직원 등록이 완료되었습니다.')
        }

        //의사는 의사 테이블에도 등록(데이터 바꿔야함.)
        else if(adminJoinData.adminRole == 'doctor'){
          const copyAdmin = {
            docLinum : adminJoinData.adminId,
            docPw : adminJoinData.adminPw,
            docName : adminJoinData.adminName,
            deptNum : adminJoinData.deptNum
          }
          axios.post('/doctor/insertDoctor',copyAdmin)
          alert('의사 등록이 완료되었습니다.')
        }
        navigate('/admin/login')
      })
      .catch((error) => {
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
        <h5>관리자 등록</h5>
      </div>


      <table className='join-table'>
        <tbody>
          <tr>
            <td>직원 구분</td>
            <td>
              <input type='radio' name='adminRole' value='doctor' onChange={(e)=>{changeAdminData(e)}}/>의사
              <input type='radio' name='adminRole' value='nurse' onChange={(e)=>{changeAdminData(e)}}/>간호사
              <input type='radio' name='adminRole' value='staff' onChange={(e)=>{changeAdminData(e)}}/>직원
            </td>
          </tr>
          <tr>
            <td>아이디(의사번호)</td>
            <td>
              <input className='input-txt' type='text' name='adminId' placeholder='관리자 아이디(의사번호)'
                onChange={(e) => {
                  changeAdminData(e);
                }} />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input className='input-txt' type='password' name='adminPw' placeholder='비밀번호' onChange={(e) => { changeAdminData(e) }} />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input className='input-txt' type='text' name='adminName' placeholder='이름' onChange={(e) => { changeAdminData(e) }} />
            </td>
          </tr>
          <tr>
            <td>소속과의 번호 (의사만 입력)</td>
            <td>
              <input className='input-txt' type='text' name='deptNum' placeholder='소속과 번호' onChange={(e) => { changeAdminData(e) }} />
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
