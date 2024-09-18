import React, { useEffect, useState } from 'react'
import './TreChart.css';
import axios from 'axios';

const TreChart = () => {
  
  // 대기자 목록 담을 state 변수
  const [waitList, setWaitList] = useState([]);

  // 환자 정보 담아둘 변수
  const [patientInfo, setPatientInfo] = useState([]);

  // 대기 환자 목록에서 환자 눌러야 환자 정보 보이게 하는 변수
  const [isShow, setIsShow] = useState(true);

  // 진료 정보 담아둘 변수
  const [treInfo, setTreInfo] = useState({
    patNum : '',
    disease : '',
    // docLinum : '',
    aboutPat : '',
    treDate : '',
  });

  // 처방전 정보 담아둘 변수
  const [recInfo, setRecInfo] = useState({
    treNum : '',
    mediName : '',
    eatCnt : ''
  });

  // 환자 1명의 모든 진료기록 담아둘 변수
  const [treList, setTreList] = useState([]);

  // 진료 정보 변경되면 ...
  function changeTreInfo(e){
    setTreInfo({
      ...treInfo,
      [e.target.name] : e.target.value
    })
  }

  // 처방전 정보 변경되면 ...
  function changeRecInfo(e){
    setRecInfo({
      ...recInfo,
      [e.target.name] : e.target.value
    })
    console.log(recInfo)
  }

  // 대기 환자 정보 가져옴
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

  // 환자 정보에 맞게 진료 기록 가져옴
  function getTreInfo(patNum){
    axios.get(`/doctor/treOneSelect/${patNum}`)
    .then((res)=>{
      console.log(res.data)
      setTreList(res.data);
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

  // 진료 정보 추가
  function treInfoInsert(){
    axios.post('/doctor/insertTreatInfo', treInfo)
    .then((res)=>{
    })
    .catch((error)=>{
      console.log(error)
      alert('진료 기록을 작성해주세요.')
    })
  }

  // 처방전 정보 추가
  function recInfoInsert(){
    axios.post('/doctor/insertRecipeInfo', recInfo)
    .then((res)=>{
    })  
    .catch((error)=>{
      console.log(error)
    })
  }


  return (
    <>
      <div className='main-title-div'>
        <h1>문진표</h1>
      </div>
        <div class="chart-main-div">
          <div className='chart-sub1-div'>
            <div>
              <h1>조회 환자 정보</h1>
            </div>
            <div className='pati-pull-info'>
                {
                  isShow 
                  ?
                  <table>
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
            <h1>진료 내역 조회</h1>
            <div>
              
                <thead>
                  <tr>
                    <td>접수시간</td>
                    <td>진단명</td>
                    <td>진료내역</td>
                  </tr>
                </thead>
              
                <tbody>
                  {
                    treList.map((tre, i) => {
                      return (
                        <tr key={i}>
                          <td>{tre.treDate}</td>
                          <td>{tre.disease}</td>
                          <td>{tre.aboutPat}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
            </div>
          </div>


          <div className='chart-sub1-div'>
          <h1>진료 기록 등록</h1>
          <div className='tre-info-div'>
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={2}>진료기록</td>
                    </tr>
                    <tr>
                      <td>검진일</td>
                      <td><input type='date' className='chart-input-tag' name='treDate'  
                      onChange={(e)=>{changeTreInfo(e)}}></input></td>
                    </tr>
                    <tr>
                      <td>병명</td>
                      <td><input type='text'  className='chart-input-tag' name='disease' 
                      placeholder={'병명을 입력하세요.'} 
                      onChange={(e)=>{changeTreInfo(e)}}></input></td>
                    </tr>
                    <tr>
                      <td>증상</td>
                      <td><textarea type='textarea' className='textarea' name='aboutPat' 
                      placeholder={'증상을 입력하세요.'} 
                      onChange={(e)=>{changeTreInfo(e)}}></textarea></td>
                    </tr>
                    <tr>
                      <td>처방내역</td>
                      <td><input type='text' className='chart-input-tag' name='mediName' 
                      placeholder={'처방내역 입력'} 
                      onChange={(e)=>{changeRecInfo(e)}}></input></td>
                    </tr>
                    <tr>
                      <td>일일 복용 횟수</td>
                      <td><input type='text' className='chart-input-tag' name='eatCnt' 
                      placeholder={'일일 복용 횟수'} 
                      onChange={(e)=>{changeRecInfo(e)}}></input></td>
                    </tr>
                    </tbody>
                    </table>
                      <button type='button' className='insert-btn' onClick={()=>{
                        treInfoInsert()
                        recInfoInsert() 
                        }}>등록</button>
            </div>
            <div>2</div>
          </div>


          <div className='chart-sub2-div'>
          <h1>접수 대기 명단</h1>
            <div className='status-info-div'>
              <div >순번</div>
              <div >대기자명</div>
              <div >접수시간</div>
              <div >접수현황</div>
            </div>
              {waitList.map((wait, i) => (
                <div className='status-info-div' key={i}>
                  <div>{waitList.length - i}</div>
                  <div onClick={()=>{
                    getPatientInfo(wait.patNum)
                    getTreInfo(wait.patNum)
                    setIsShow(true)
                  }}>{wait.patName}</div>
                  <div>{wait.recepVO.recepDate}</div>
                  <div>{wait.recepVO.recepStatus}</div>
                </div>
                ))
              }
          </div>
        </div>
          
              
              
  </>
  )
}

export default TreChart