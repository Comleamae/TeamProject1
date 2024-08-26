import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//수술확인서
const PrintForm2 = () => {

  //발급 당시의 시간을 저장할 변수
  const newDate = new Date()

  let patNum = 1

  const navigate = useNavigate()
   //불러온 환자 정보를 저장할 변수
   const[patientOne, setPatientOne] = useState({})

   //불러온 의사 정보를 저장할 변수
  const[doctorOne, setDoctorOne] = useState({})


  useEffect(()=>{
    axios
    .get(`patient/getOne/${patNum}`)
    .then((res)=>{
      setPatientOne(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  useEffect(()=>{
    axios
    .get(`docotr/getOne/${patientOne.docLinum}`)
    .then((res)=>{
      setDoctorOne(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  return (
    <div>
      <table className='print-table'> 
          <tr>
            <td colSpan={8}><h2>수술확인서</h2></td>
          </tr>
          <tr>
            <td>진료과</td>
            <td colSpan={2}>{doctorOne.dept}</td>
            <td>작성자</td>
            <td>{doctorOne.docName}</td>
            <td>일자</td>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td colSpan={5}>병록번호</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>일련번호</td>
            <td></td>
            <td>주민번호</td>
            <td colSpan={6}>{patientOne.citizenNum}</td>
          </tr>
          <tr>
            <td>입원과</td>
            <td>{doctorOne.dept}</td>
            <td>{}호실</td>
            <td>입원날짜</td>
            <td colSpan={4}></td>
          </tr>
          <tr>
            <td>환자성명</td>
            <td>{patientOne.patName}</td>
            <td>성별</td>
            <td>{patientOne.gender}</td>
            <td>생년월일</td>
            <td>{patientOne.citizenNum}</td>
            <td>연령</td>
            <td>{patientOne.age}</td>
          </tr>
          <tr>
            <td>환자주소</td>
            <td colSpan={7}>{patientOne.addr}</td>
          </tr>
          <tr>
            <td>진단명</td>
            <td colSpan={7}>{patientOne.disease}</td>
          </tr>
        </table>
        <div>
          위 환자는 뇌졸증으로 인해 24년 8월 2일부터 24년 8월 3일까지 수술을 시행하였음을 확인함.

          <p>수술명:</p>
          <p>수술일자:</p>

          <table>
            <tr>
              <td>발행일</td>
              <td>{newDate}</td>
            </tr>
            <tr>
              <td>의사성명</td>
              <td></td>
            </tr>
            <tr>
              <td>면허번호</td>
              <td></td>
            </tr>
          </table>
          <h2>그린대학병원장 제인도</h2>
        </div>
        <div className='btn-div'>
          <button type='button' className='btn' onClick={navigate('/user')}>출력</button>
        </div>
    </div>
  )
}

export default PrintForm2
