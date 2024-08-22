import React, { useState } from 'react'
import './ClinicPrint.css'
import { Outlet, useNavigate } from 'react-router-dom'

const ClinicPrint = ({isLogin}) => {
  const navigate = useNavigate()
  
  // 증명서를 뽑기위해서 창에 접근했을때 로그인 상태가 아니라면 
  return (
    <div className='app-content-div'>
      <Outlet/>
      {
        !isLogin
        ?
        <div className='selfDefWhenOnLogin'>
          <div>
            회원의 본인 인증
          </div>
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
        </div>
        :
        <div className='selfDefWhenNotLogin'>
          <div>

          </div>
        </div>
      }
      
    </div>
  )
}

export default ClinicPrint
