import React, { useEffect, useRef, useState } from 'react'
import './ReVisit.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReVisit = () => {

  const navigate = useNavigate();

   // 재방문자 접수를 위한 정보 입력
  const [reInfo, setReInfo] = useState({
    patName : '',
    citizenNum :  '',
    mediDept : '',
    docLinum : 0,
    patNum : 0
  });

  // 진료과 리스트
  const [deptList, setDeptList] = useState([]);

  // 의사 리스트
  const [doctorList, setDoctorList] = useState([]);

  // 선택한 진료과 번호를 가져오기 위한 참조 변수
  const doctorNumRef = useRef();

  // 비교하더라도 재방문 접수자들도 진료과가 보여야함.
  useEffect(()=>{
    axios.get('/doctor/getDeptList')
    .then((res)=>{
      console.log(res.data)
      setDeptList(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);

  // 진료과 정보가 나와서 진료과 선택하면 의사 목록 보이게 하기
  function getDoctorList(){
    axios.get(`/doctor/getDoctorList/${doctorNumRef.current.value}`)
    .then((res)=>{
      console.log(res.data)
      setDoctorList(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  }

    // 입력한 정보 변경 함수
    function changeInfo(e) {
      setReInfo({
        ...reInfo,
        [e.target.name] : e.target.value
      })
    }

    //조회 버큰 클릭 시 등록된 환자인지 검사하는 함수
    function checkInfoAndInsert(){
      axios.post('/patient/reSelect', reInfo)
      .then((res) => {
        //조회한 환자번호
        const pNum =res.data;
        if(pNum == 0){
        alert('첫 방문 환자입니다. 신규 등록 페이지로 이동합니다.');
          //신규 환자 등록 페이지로 이동
          navigate('/');
        } else {
          setReInfo({
            ...reInfo, 
            patNum : pNum
          })
          console.log("pNum값 :", pNum);
          alert('재방문 환자입니다. 접수를 눌러 접수 정보를 등록해주세요.');
        }
      })
      .catch((error) => {console.log(error)})
    }

    // 재방문자 접수
    function reInsert(){
      axios.post('/patient/reInsert', reInfo)
        .then((res) => {
          console.log(res.data)
          setReInfo(res.data);
          alert("접수 완료");
        })
        .catch((error) => {
          console.log(error);
          alert("접수 실패");
        });
      }

  return (
    <div className='re-main-div'>
      <h1>접수 등록</h1>
      <div>
        <div>접수를 위한 정보를 입력해주세요.</div>
        <table className='re-table'>
            <thead>
            <tr> 
              <td>이 름</td>
              <td><input className='ip-tag' placeholder='이름을 입력해주세요.' type='text'
              name='patName' onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr> 
              <td>주민번호</td>
                <td><input className='ip-tag' placeholder='주민번호를 입력해주세요.' type='text'
                name='citizenNum' onChange={(e)=>{changeInfo(e)}}/></td>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>진료과</td>
              <td>
                <select name='mediDept' ref={doctorNumRef} 
                onChange={(e)=>{
                  changeInfo(e);
                  getDoctorList();
                  }}>
                  <option value={''}>진료과를 선택해주세요.</option>
                  {
                    deptList.map((dept, i)=>{
                      return(
                        <option key={i} value={dept.deptNum}>{dept.deptName}</option>
                      );
                    })
                  }
                  </select>
              </td>
            </tr>
            <tr> 
              <td>담당의</td>
              <td>
              <select name='docLinum' onChange={(e)=>{changeInfo(e)}}>
                <option value={''}>담당의를 선택하세요</option>
                {
                  doctorList.map((doctor, i)=>{
                    return(
                      <option key={i} value={doctor.docLinum}>{doctor.docName}</option>
                    );
                  })
                }
              </select>
              </td>
            </tr>
            </tbody>
          </table>
            <div>
              <button type='button' className='re-btn' onClick={()=>{
                checkInfoAndInsert()}}>조회</button>

              <button type='button' className='re-btn' onClick={()=>{
                reInsert()}}>접수</button>
            </div>
        </div>
    </div>
  )
}

export default ReVisit