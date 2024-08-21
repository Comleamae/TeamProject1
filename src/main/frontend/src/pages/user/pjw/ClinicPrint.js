import React, { useState } from 'react'
import './ClinicPrint.css'
import { useNavigate } from 'react-router-dom'

const ClinicPrint = () => {
  const navigate = useNavigate()
  const [isLoginOn, setIsLoginOn] = useState(false)
  // 증명서를 뽑기위해서 창에 접근했을때 로그인 상태가 아니라면 
  return (
    <div className='app-content-div'>
      {
        isLoginOn
        ?
        <div>
          본인인증하자
        </div>
        :
        <div>
          비회원 본인인증하자
        </div>
      }
     
    </div>
  )
}

export default ClinicPrint
