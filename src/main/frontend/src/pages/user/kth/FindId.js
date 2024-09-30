import axios from 'axios'
import './Find.css'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FindId = () => {

  const navigate = useNavigate();

  //아이디 찾기를 위해 입력한 아이디 주민번호 저장할 state변수
  const[findIdInfo, setFindIdInfo] = useState({
    memName : '',
    citizenNum : ''
  })

  const citizenNum1 = useRef();
  const citizenNum2 = useRef();

  function changeFindIdInfo(e){
    setFindIdInfo({
      ...findIdInfo,
      [e.target.name] : e.target.name == 'citizenNum' ?
                        citizenNum1.current.value + '-' + citizenNum2.current.value :
                        e.target.value
    })
  }

  //아이디 찾기 버튼 누르면 아이디 찾기
  function findId(){
    axios.post('/api_member/findId', findIdInfo)
    .then((res)=>{
      if(res.data != ''){
        alert(`${findIdInfo.memName}님의 아이디는 ${res.data}입니다.`)
        navigate('/login')
      }
      else{
        alert('이름 혹은 주민번호를 확인해주세요')
      }
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  return (
    <div className='find-id-div'>
      <div className='user-div'>
        <h2 className='hh2'>아이디 찾기</h2>
        <p>아이디를 잊으셨습니까?</p>
      </div>
      <div className='user-login-txt'>
        <h2>
          <strong>아이디를 잊으셨습니까?</strong><br />
          아래 방법으로 아이디를 찾으실 수 있습니다.
        </h2>
      </div>

      <div className='idbox'>
        <div className='id-table'>
          <div>
            <span>이 름</span>
            <input className='id-input' type='text' name='memName' placeholder='이름' onChange={(e)=>{changeFindIdInfo(e)}}/>
          </div>
          <div>
            <span>주민번호</span>
            <input className='id-input2' type='text' name='citizenNum' placeholder='주민번호 앞자리'  onChange={(e)=>{changeFindIdInfo(e)}} ref={citizenNum1}/> - <input className='id-input2' type='password' name='citizenNum' placeholder='주민번호 뒷자리'  onChange={(e)=>{changeFindIdInfo(e)}} ref={citizenNum2}/>
          </div>
        </div >
        <button className='idbtn' type='button' onClick={(e)=>{findId()}}>
          아이디 찾기
        </button>
      </div>
    </div>
  )
}

export default FindId