import React, { useEffect, useState } from 'react'
import './ClinicPrint.css'
import { Outlet, useNavigate } from 'react-router-dom'

const ClinicPrint = ({isLogin, setIsLogin}) => {
  const navigate = useNavigate()
  //환자 리스트를 받아와서 저장할 state변수
  const[patientList, setPatientList]=useState([])
  //인증이 됫는지 저장할 state변수
  const [isConfirm, setIsConfirm]=useState(true)
  //인증이 되지 않았다면 form-selector가 보이지 않게하라
  //랜덤숫자를 뽑아
  //환자리스트에서 하나씩 빼서 환자객체에 인증번호를 넣어준다
  function confirmNum() {
    setIsConfirm(true)
  }
  return (
    <div className='app-content-div'>
      {
        isConfirm==false
        ?
        <Outlet/>
        :
        null
      }
      <div className='selfDefWhenOnLogin'>
        <div>
          <div>
            인증번호:<input type='text'/>
          </div>
          <button type='button' onClick={(e)=>{confirmNum()}}>인증하기</button>
        </div>

          {
            isConfirm==false
            ?
            <div className='form-selector'>
            <div onClick={(e)=>{navigate('/user/clinicPrint/printForm')}}>
              진료확인서
            </div>
            <div onClick={(e)=>{navigate('/user/clinicPrint/printForm2')}}>
              수술확인서
            </div>
            <div>
              입퇴원확인서
            </div>
            <div>
              영수증
            </div>
            </div>
            :
            null
          }
        </div>

        <div className='selfDefWhenNotLogin'>
          <div>

          </div>
        </div>
    
      
    </div>
  )
}

export default ClinicPrint
