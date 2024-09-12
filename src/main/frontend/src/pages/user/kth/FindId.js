import axios from 'axios'
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
    <div>
      <h1>아이디 찾기</h1>
      <table>
        <tr>
          <td>이름</td>
          <td><input type='text' name='memName' placeholder='이름' onChange={(e)=>{changeFindIdInfo(e)}}/></td>
        </tr>
        <tr>
          <td>주민번호</td>
          <td><input type='text' name='citizenNum' placeholder='주민번호 앞자리'  onChange={(e)=>{changeFindIdInfo(e)}} ref={citizenNum1}/> - 
          <input type='password' name='citizenNum' placeholder='주민번호 뒷자리'  onChange={(e)=>{changeFindIdInfo(e)}} ref={citizenNum2}/>
          </td>
        </tr>
      </table >
      <button type='button' onClick={(e)=>{findId()}}>아이디 찾기</button>
    </div>
  )
}

export default FindId