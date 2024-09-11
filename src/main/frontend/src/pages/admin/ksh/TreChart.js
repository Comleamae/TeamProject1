import React, { useEffect, useState } from 'react'
import './TreChart.css';
import axios from 'axios';

const TreChart = () => {
  
  // 대기자 목록 담을 state 변수
  const [waitList, setWaitList] = useState([]);

  const [patientInfo, setPatientInfo] = useState([]);

  const [isShow, setIsShow] = useState(true);

  const [treInfo, setTreInfo] = useState({
    patNum : '',
    disease : '',
    // docLinum : '',
    aboutPat : '',
    treDate : ''
  });

  function changeTreInfo(e){
    setTreInfo({
      ...treInfo,
      [e.target.name] : e.target.value
    })
  }


  function getPatientInfo (patNum){
    axios.get(`/patient/getPatientInfo/${patNum}`)
    .then((res)=>{
      console.log(res.data)
      setPatientInfo(res.data);
      setTreInfo({...treInfo, patNum : res.data.patNum})
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  // 대기자 목록 화면에 띄우기
  useEffect(()=>{
    axios.get('/patient/waitList')
    .then((res)=>{
      console.log(res.data)
      setWaitList(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);

  function treInfoInsert(){
    axios.post('/doctor/insertTreatInfo', treInfo)
    .then((res)=>{
      console.log(res.data)
      setTreInfo(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  return (
    <div className='chart-main-div'>
      <h1>문진표</h1>
      <div className='chart-sub-div'>
          <div className='detail-info-div'>
            <div>
                {
                  isShow 
                  ?
                  <table className='patient-info-table'>
                  <tbody>
                    <tr>
                      <td>회원번호</td>
                      <td >{patientInfo.patNum}</td>
                    </tr>
                    <tr>
                      <td>환자명</td>
                      <td>{patientInfo.patName}</td>
                    </tr>
                    <tr>
                      <td>나이</td>
                      <td>{patientInfo.age}</td>
                    </tr>
                    <tr>
                      <td>성별</td>
                      <td>{patientInfo.gender}</td>
                    </tr>
                    <tr>
                      <td>주민번호</td>
                      <td>{patientInfo.citizenNum}</td>
                    </tr>
                    <tr>
                      <td>이메일</td>
                      <td>{patientInfo.patEmail}</td>
                    </tr>
                    <tr>
                      <td>주소</td>
                      <td>{patientInfo.address}</td>
                    </tr>
                  </tbody>
                </table> 
                  : 
                  null
                }
            </div>
            
            <div>
                <table className='patient-info-table'>
                  <tbody>
                    <tr>
                      <td colSpan={2}>진료기록</td>
                    </tr>
                    <tr>
                      <td>검진일</td>
                      <td><input type='date' name='treDate'  onChange={(e)=>{changeTreInfo(e)}}></input></td>
                    </tr>
                    <tr>
                      <td>병명</td>
                      <td><input type='text' name='disease' onChange={(e)=>{changeTreInfo(e)}}></input></td>
                    </tr>
                    <tr>
                      <td rowSpan={3}>증상</td>
                      <td><textarea className='ta-text'type='textarea' name='aboutPat' onChange={(e)=>{changeTreInfo(e)}}></textarea></td>
                    </tr>
                    </tbody>
                    <div><button type='button' onClick={()=>{treInfoInsert()}}>등록</button></div>
                    </table>
            </div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className='pati-list-div'>
            <div className='status-info-div'>
              <div >순번</div>
              <div >대기자명</div>
              <div >접수시간</div>
              <div >접수현황</div>
            </div>
              {waitList.map((wait, i) => (
                <div className='pati-detail-div' key={i}>
                  <div>{waitList.length - i}</div>
                  <div onClick={()=>{
                    getPatientInfo(wait.patNum)
                    setIsShow(true)
                  }}>{wait.patName}</div>
                  <div>{wait.recepVO.recepDate}</div>
                  <div>{wait.recepVO.recepStatus}</div>
                </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default TreChart