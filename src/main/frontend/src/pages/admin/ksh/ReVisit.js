import React, { useEffect, useRef, useState } from 'react'
import './ReVisit.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReVisit = () => {

  const navigate = useNavigate();


  // 재방문자 접수를 위한 정보 입력
  const [compareInfo, setCompareInfo] = useState({
    patName : '',
    citizenNum :  '',
    mediDept : '',
    docLinum : 0,
    patNum : ''
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
      setCompareInfo({
        ...compareInfo,
        [e.target.name] : e.target.value
      })
    }

    //재방문자인지 조회
    function compareSelect(compareInfo){
      axios.post('/patient/compareSelect', compareInfo)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((error)=>{
        console.log(error)        
      })
    }

    // 재방문자 접수
      function compareInfoInsert(patNum){
        axios.post(`/patient/compareSelect/${patNum}`, compareInfo)
          .then((res) => {
            console.log(res.data)
            setCompareInfo(res.data);
            alert("재방문 접수가 완료되었습니다.");
            navigate('/');
          })
          .catch((error) => {
            console.error(error);
            alert("접수 등록에 실패했습니다. 다시 시도해주세요.");
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
            <div><button type='button' className='re-btn' onClick={()=>{compareSelect()}}>접수</button></div>

        </div>
    </div>
  )
}

export default ReVisit