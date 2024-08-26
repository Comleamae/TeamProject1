import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//진료비 영수증
const PrintForm4 = ({patNum}) => {

   //불러온 환자 정보를 저장할 변수
   const[patientOne, setPatientOne] = useState({})

   //불러온 의사 정보를 저장할 변수
  const[doctorOne, setDoctorOne] = useState({})

  const navigate = useNavigate()

  useEffect(()=>{
    axios
    .get(`/patient/getOne/${patNum}`)
    .then((res)=>{
      setPatientOne(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  return (
    <div>
      <table className='print-table'> 
          <tr>
            <td colSpan={6}><h2>진료비 영수증</h2></td>
          </tr>
          <tr>
            <td>성명</td>
            <td>{patientOne.patName}</td>
            <td>진료기간</td>
            <td>{patientOne.patDate}</td>
            <td>주말진료여부</td>
            <td></td>
          </tr>
          <tr>
            <td>진료과목</td>
            <td>{doctorOne.dept}</td>
            <td>병실</td>
            <td></td>
            <td>환자구분</td>
            <td></td>
          </tr>
          <tr>
            <td>영수증번호</td>
            <td colSpan={2}></td>
            <td>처방여부</td>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <div className='btn-div'>
          <button type='button' className='btn' onClick={(e)=>{navigate('/user')}}>출력</button>
        </div>
    </div>
  )
}

export default PrintForm4
