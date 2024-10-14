import React from 'react'
import './Find.css'
import axios from 'axios'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FindPw = () => {
  const navigate = useNavigate();

  //비밀번호 찾기를 위해 입력한 아이디 주민번호 저장할 state변수
  const [findPwInfo, setFindPwInfo] = useState({
    memName: '',
    memId: '',
    citizenNum: ''
  })

  const citizenNum1 = useRef();
  const citizenNum2 = useRef();

  function changeFindPwInfo(e) {
    setFindPwInfo({
      ...findPwInfo,
      [e.target.name]: e.target.name == 'citizenNum' ?
        citizenNum1.current.value + '-' + citizenNum2.current.value :
        e.target.value
    })
  }

  //비밀번호 찾기 버튼 누르면 비밀번호 찾기
  function findPw() {
    axios.post('/api_member/findPw', findPwInfo)
      .then((res) => {
        if (res.data != '') {
          alert(`${findPwInfo.memName}님의 비밀번호는 ${res.data}입니다.`)
          navigate('/login')
        }
        else {
          alert('이름 혹은 아이디 혹은 주민번호를 확인해주세요')
        }
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <div className='find-id-div'>

      <div className='user-div'>
        <h2 className='hh2'>비밀번호 찾기</h2>
        <p>비밀번호를 잊으셨습니까?</p>
      </div>

      <div className='user-login-txt'>
        <h2>
          <strong>비밀번호를 잊으셨습니까?</strong><br />
          아래 방법으로 비밀번호를 찾으실 수 있습니다.
        </h2>
      </div>

      <div className='idbox'>
        <div className='id-table2'>
          <div className='idd'>
            <p>이 름</p>
            <input className='id-input' input type='text' name='memName' placeholder='이름' onChange={(e) => { changeFindPwInfo(e) }} />
          </div>

          <div className='idd'>
            <p>주민번호</p>
            <input className='id-input2' name='citizenNum' placeholder='주민번호 앞자리' onChange={(e) => { changeFindPwInfo(e) }} ref={citizenNum1}/> - <input className='id-input2'type='password' name='citizenNum' placeholder='주민번호 뒷자리' onChange={(e) => { changeFindPwInfo(e) }} ref={citizenNum2}/>
          </div>

          <div className='idd'>
            <p>아이디</p>
            <input className='id-input' type='text' name='memId' placeholder='아이디' onChange={(e) => { changeFindPwInfo(e) }} />
          </div>

        </div >
        <button className='idbtn1' type='button' onClick={(e) => { findPw() }}>비밀번호 찾기</button>
      </div>

      <div className='user-btn1'>
        <div>
          <p>
            그린대학교병원의 회원이 아니십니까?
          </p>
          <button type='button'  className='sh-btn' onClick={(e) => { navigate('/joinSelect') }}>회원가입</button>
        </div>
        <div>
          <p>
            아이디를 잊으셨습니까?
          </p>
          <button type='button' className='sh-btn' onClick={(e) => { navigate('/findId') }}>아이디 찾기</button>
        </div>
      </div>
    </div>
  )
}

export default FindPw