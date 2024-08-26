import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PrintForm3 = ({patNum}) => {
  const navigate = useNavigate()

  //불러온 환자 정보를 저장할 변수
  const[patientOne, setPatientOne] = useState({})

  useEffect(()=>{
    axios
    .get(``)
    .then((res)=>{
      setPatientOne(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  //불러온 의사 정보를 저장할 변수
  const[doctorOne, setDoctorOne] = useState({})

    useEffect(()=>{
      axios
      .get(``)
      .then((res)=>{
        setDoctorOne(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
    }, [])
  //처방전
  return (
    <div>
      <table className='print-table'> 
          <tr>
            <td colSpan={6}><h2>처방전</h2></td>
          </tr>
          <tr>
            <td>성명</td>
            <td>{patientOne.patName}</td>
          </tr>
          <tr>
            <td>주민등록번호</td>
            <td>{patientOne.citizenNum}</td>
          </tr>

        </table>
        <div className='btn-div'>
          <button type='button' className='btn' onClick={(e)=>{navigate('/user')}}>출력</button>
        </div>
    </div>
  )
}

export default PrintForm3
