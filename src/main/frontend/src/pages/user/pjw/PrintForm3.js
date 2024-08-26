import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PrintForm3 = () => {
  const navigate = useNavigate()

  //불러온 환자 정보를 저장할 변수
  const[patientOne, setPatientOne] = useState({})

  //불러온 의사 정보를 저장할 변수
 const[doctorOne, setDoctorOne] = useState({})
  //처방전
  return (
    <div>
      
    </div>
  )
}

export default PrintForm3
