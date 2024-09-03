import React, { useState } from 'react'
import './ReVisit.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ReVisit = () => {

  const navigate = useNavigate();

  const [reInfo, setReInfo] = useState({
    patName : '',
    citizenNum : ''
  });

  function changeReInfo(e){
    setReInfo({
      ...reInfo,
      [e.target.name] : e.target.value
    })
  }

  function regCheckInsert(){
    // 재방문 한 사람의 데이터가 가장 마지막 대기 순번으로 들어갈 수 있게 하는 코드
    const dataTime = {
      ...reInfo,
      timeStamp: new Date().getTime()
    };

    axios.post('/patient/regCheckInsert', dataTime)
    .then((res)=>{
      console.log(res.data)
      navigate('/user/reservReg')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='re-main-div'>
      <h1>예약 등록</h1>
      <div>
        <div>접수를 위한 정보를 입력해주세요.</div>
        <div>
          <table>
          <thead></thead>
          <tbody>
            <tr> 
              <td>이 름</td>
                <td><input className='newInput' placeholder='이름을 입력해주세요.' type='text'
                  name='patName' value={reInfo.patName} onChange={(e)=>{changeReInfo(e)}}/></td>
            </tr>
            <tr>
              <td>주민번호</td>
              <td><input className='newInput' placeholder='주민번호를 입력해주세요.' type='text'
                name='citizenNum' value={reInfo.citizenNum} onChange={(e)=>{changeReInfo(e)}}/></td>
            </tr>
            </tbody>
          </table>
          <div><button type='button' onClick={()=>{regCheckInsert()}}>접수</button></div>
        </div>
      </div>
    </div>
  )
}

export default ReVisit