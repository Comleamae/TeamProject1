import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import './NewVisit.css';
import { useNavigate } from 'react-router-dom';

const NewVisit = () => {

  const navigate = useNavigate();

  // 접수를 위해 직접 본인(환자가)이 입력한 정보
  const [info, setInfo] = useState({
    // patNum : '',
    patName : '',
    age : '',
    gender : '남',
    citizenNum : '',
    patEmail : '',
    address : '',
    mediDept:'',
    docLinum : 0
  });

  // 진료과 리스트
  const [deptList, setDeptList] = useState([]);

  //선택한 진료과번호를 가져오기 위한 ref
  const doctorNumRef = useRef();

  //선택한 진료과에 소속된 의사 정보를 저장할 state 변수
  const [doctorList, setDoctorList] = useState([]);

  // 진료과 정보 보이게 하기
  useEffect(()=>{
    axios.get('/doctor/getDeptList')
    .then((res)=>{
      console.log(res.data)
      setDeptList(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  //진료과 선택 시 해당 진료과에 해당하는 의사 목록 조회
  function getDoctorList(){
    axios.get(`/doctor/getDoctorList/${doctorNumRef.current.value}`)
    .then((res) => {
      console.log(res.data);
      setDoctorList(res.data);
    })
    .catch((error) => {console.log(error)});
  }
  
  // 입력한 정보 변경 함수
  function changeInfo(e) {
    setInfo({
      ...info,
      [e.target.name] : e.target.value
    })
  }
  
  // 접수 누르면 실행
  function infoInsert() {
    axios.post('/patient/regInsert', info)
    .then((res) => {
      console.log(res.data);
      alert("접수 등록이 완료되었습니다.")
      navigate('/')
    })
    .catch((error) => {
      console.log(error)
      alert("접수에 실패하였습니다. 다시 시도해주세요.")
    });
  }

  return (
    <div className='new-main-div'>
      <h1>접수 등록</h1>
      <div>
        <div>접수를 위한 정보를 입력해주세요.</div>
        <div>
          <table className='new-table'>
            <thead></thead>
            <tbody>
            <tr> 
              <td>이 름</td>
              <td><input className='ip-tag' placeholder='이름을 입력해주세요.' type='text'
              name='patName' value={info.patName} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>나 이</td>
              <td><input className='ip-tag' placeholder='나이를 입력해주세요.' type='text'
              name='age' value={info.age} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>성 별</td>
              <td>
                <input type='radio' name='gender' value={'남'} checked={info.gender=='남'} 
                onChange={(e)=>{changeInfo(e)}}/>남
                <input type='radio' name='gender' value={'여'} checked={info.gender=='여'}
                onChange={(e)=>{changeInfo(e)}}/>여
              </td>
            </tr>
            <tr>
              <td>주민번호</td>
              <td><input className='ip-tag' placeholder='주민번호를 입력해주세요.' type='text'
              name='citizenNum' value={info.citizenNum} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td><input className='ip-tag' placeholder='이메일을 입력해주세요.' type='text'
              name='patEmail' value={info.patEmail} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>주소</td>
              <td><input className='ip-tag' placeholder='주소를 입력해주세요.' type='text'
              name='address' value={info.address} onChange={(e)=>{changeInfo(e)}}/></td>
            </tr>
            <tr>
              <td>진료과</td>
              <td>
                <select name='mediDept' value={info.mediDept} ref={doctorNumRef}
                        onChange={(e)=>{
                          changeInfo(e);
                          getDoctorList();
                        }}>
                  <option value={''}>진료과를 선택해주세요.</option>
                  {
                    deptList.map((dept, i) => {
                      return (
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
                <select name='docLinum' onChange={(e) => {changeInfo(e)}}>
                  <option value={''}>담당의를 선택하세요</option>
                  {
                    doctorList.map((doctor, i) => {
                      return (
                        <option key={i} value={doctor.docLinum}>{doctor.docName}</option>
                      );
                    })
                  }
                </select>
              </td>
            </tr>
            </tbody>
          </table>
          <div><button type='button' className='new-btn' onClick={()=>{infoInsert()}}>접수</button></div>
        </div> 
      </div>
    </div>
  )
}

export default NewVisit