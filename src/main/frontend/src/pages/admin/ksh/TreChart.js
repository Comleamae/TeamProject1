import React, { useEffect, useRef, useState } from 'react'
import './TreChart.css';
import axios from 'axios';

const TreChart = () => {
  
  // 대기자 목록 담을 state 변수
  const [waitList, setWaitList] = useState([]);

  // 환자 정보 담아둘 변수
  const [patientInfo, setPatientInfo] = useState([]);

  // 대기 환자 목록에서 환자 눌러야 환자 정보 보이게 하는 변수
  const [isShow, setIsShow] = useState(true);

  // 환자 1명의 모든 진료기록 담아둘 변수
  const [treList, setTreList] = useState([]);
  
  // 오늘 날짜 저장할 함수
  const [today, setToday] = useState('');

  // 진료 정보 담아둘 변수
  const [treInfo, setTreInfo] = useState({
    patNum : '',
    disease : '',
    aboutPat : '',
    treDate : '',
    mediName : '',
    eatCnt : ''
  });

  // 진단명 클릭 후 가져올 진단서 내용
  const [detailDiagnosis, setDetailDiagnosis] = useState({
    disease : '',
    aboutPat : '',
    recipeVO : {
      mediName : '',
      eatCnt : ''
    }
  });
  
  // 의사정보 담아두기
  const docInfoRef = useRef({
    docLinum : '',
    docName : '',
    deptNum : '',
    deptName : ''
  });

  const getDeptName = (deptNum) => {
    const deptList = {
      1: '내과',
      2: '외과',
      3: '신경과'
    };
    return deptList[deptNum] || '0'; 
  };

  // 세션에서 의사 정보 불러오기
  useEffect(() => {
    const sesssionInfo = window.sessionStorage.getItem('doctorLoginInfo');
    if (sesssionInfo) {
      const docInfo = JSON.parse(sesssionInfo);

      docInfoRef.current = {
        docLinum: docInfo.doc_Linum,
        docName: docInfo.doc_name,
        deptNum: docInfo.dept_num,
        deptName: getDeptName(docInfo.dept_num)
      };
    }
  }, []);


  // 당일 기준 이전 날짜 체크 못하게 하게 하기
  useEffect(()=>{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    setToday(`${year}-${month}-${day}`);
  }, [])

  // 진료 정보 변경되면
  function changeTreInfo(e){
    setTreInfo({
      ...treInfo,
      [e.target.name] : e.target.value
    })
  }

  // 대기 환자 정보 가져오기
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

  // 환자 정보에 맞게 진료 기록 가져오기
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
    const doctorLoginInfoString = window.sessionStorage.getItem('doctorLoginInfo');
    const docInfo = JSON.parse(doctorLoginInfoString);

    axios.get(`/patient/waitList/${docInfo.doc_Linum}`)
    .then((res)=>{
      console.log(res.data)
      setWaitList(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);

  
  // 진료 정보 추가
  function treInfoInsert(patNum){
    //환자를 선택하지 않고 진행 시 경고
    if(treInfo.patNum == ''){
      alert('환자를 선택하세요');
    }
    axios.post('/doctor/insertTreatInfo', treInfo)
    .then((res)=>{
      alert('진료 기록이 등록되었습니다.')

      axios.delete(`/doctor/waitListDelete/${treInfo.patNum}`)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((error)=>{
        console.log(error)
      });
    })
    .catch((error)=>{
      console.log(error)
      alert('진료 기록을 작성해주세요.')
    })
  }

  // 화면에 표시할 페이지
  const [markPage, setMarkPage] = useState(1); // 진료 상세 내역 페이지
  const [waitPage, setWaitPage] = useState(1); // 대기 환자 페이지

  const postNum = 5; // 한 페이지에 표시할 게시글 수 (진료 상세 내역)
  const waitNum = 10; // 한 페이지에 표시할 게시글 수 (대기자수)

  // 진료 상세 내역 페이징 처리
  const lastMarkPage = markPage * postNum;
  const firstMarkPage = lastMarkPage - postNum;
  const markPages = treList.slice(firstMarkPage, lastMarkPage);

  // 대기 환자 페이징 처리
  const lastWaitPage = waitPage * waitNum;
  const firstWaitPage = lastWaitPage - waitNum;
  const waitList2 = waitList.slice(firstWaitPage, lastWaitPage);
  
  // 접수 상태 변경
  function stautsChange(patNum) {
    axios.put(`/doctor/statusChange/${patNum}`)
    .then((res)=>{
      console.log(res.data)
      const copyWaitList = [...waitList];
      copyWaitList.pop();
      setWaitList(copyWaitList);
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  // 진료 상세 내역
  function detailDisease(treNum){
    axios.get(`/doctor/detailDisease/${treNum}`)
    .then((res)=>{
      setDetailDiagnosis(res.data);
      console.log(res.data);
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
        <h1>진료과 : {docInfoRef.current.deptName} </h1>
        <h1>담당의 : {docInfoRef.current.docName}</h1>
      <div className="chart-main-div">

        {/* 조회 환자 정보 및 진료 내역 조회 */}
        <div className='chart-sub1-div'>
          <div>
            <h1>조회 환자 정보</h1>
            <div className='pati-pull-info'>
              {isShow ? (
                <table>
                  <tbody>
                    <tr>
                      <td>회원번호</td>
                      <td>{patientInfo.patNum}</td>
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
              ) : null}
            </div>

            <h1>진료 내역 조회</h1>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>접수시간</td>
                    <td>
                      <span className='click-check'>진단명</span>
                    </td>
                    <td>
                      <span className='click-check'>진료내역</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {markPages.map((tre, i) => (
                    <tr key={i}>
                      <td>{tre.treDate}</td>
                      <td><span onClick={() => detailDisease(tre.treNum)}>{tre.disease}</span></td>
                      <td><span onClick={() => detailDisease(tre.treNum)}>{tre.aboutPat}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="page-btn">
                <button onClick={()=>setMarkPage(markPage - 1)} disabled={markPage === 1}>이전</button>
                <button onClick={()=>setMarkPage(markPage + 1)} disabled={treList.length == 0 || Math.ceil(treList.length / postNum)}>다음</button>
              </div>
            </div>
          </div>
        </div>

        {/* 진료 기록 등록 */}
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
                  <td>
                    <input type='date' className='chart-input-tag' name='treDate' min={today} 
                    onChange={changeTreInfo}></input>
                  </td>
                </tr>
                <tr>
                  <td>병명</td>
                  <td>
                    <input type='text' className='chart-input-tag' name='disease' placeholder='병명을 입력하세요.' onChange={changeTreInfo}></input>
                  </td>
                </tr>
                <tr>
                  <td>증상</td>
                  <td>
                    <textarea className='textarea' name='aboutPat' placeholder='증상을 입력하세요.' 
                    onChange={changeTreInfo}></textarea>
                  </td>
                </tr>
                <tr>
                  <td>처방내역</td>
                  <td>
                    <input type='text' className='chart-input-tag' name='mediName' placeholder='처방내역 입력' onChange={changeTreInfo}></input>
                  </td>
                </tr>
                <tr>
                  <td>일일 복용 횟수</td>
                  <td>
                    <input type='text' className='chart-input-tag' name='eatCnt' placeholder='일일 복용 횟수' onChange={changeTreInfo}></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className='insert-btn' onClick={treInfoInsert}>등록</button>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <td>진단명</td>
                  <td>진료내역</td>
                  <td>처방내역</td>
                  <td>복용횟수</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{detailDiagnosis.disease}</td>
                  <td>{detailDiagnosis.aboutPat}</td>
                  <td>{detailDiagnosis.recipeVO.mediName}</td>
                  <td>{detailDiagnosis.recipeVO.eatCnt}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 대기 명단 */}
        <div className='chart-sub2-div'>
          <h1>접수 대기 명단</h1>
          <div className='status-info-div'>
            <div>순번</div>
            <div>대기자명</div>
            <div>접수시간</div>
            <div>접수현황</div>
          </div>

          {waitList2.map((wait, i) => (
            <div key={i}>
              <div className='status-info-div'>
                <div>{waitList2.length - i}</div>
                <div>{wait.patName}</div>
                <div>{wait.recepVO.recepDate}</div>
                <div>{wait.recepVO.recepStatus}</div>
              </div>
              {waitList2.length == i+1 && (
                <div><button className='heal-btn' onClick={() => { getPatientInfo(wait.patNum); getTreInfo(wait.patNum); setIsShow(true); stautsChange(wait.patNum)}}>진료시작</button></div>
              )}
            </div>
          ))}

          <div className='wait-btn'>
            <button onClick={() => setWaitPage(waitPage - 1)} 
              disabled={waitPage == 1}>이전</button>
            <button onClick={() => setWaitPage(waitPage + 1)} 
              disabled={waitList2.length == 0 || waitPage == Math.ceil(waitList.length / waitNum)}>다음</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default TreChart