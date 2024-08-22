import React, { useEffect, useState } from 'react'
import './ClinicPrint.css'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ClinicPrint = ({isLogin, setIsLogin}) => {
  const navigate = useNavigate()
  //인증번호를 저장할 statue변수
  const[recoNum, setRecoNum] = useState(0)
  //환자 리스트를 받아와서 저장할 state변수
  const[patientList, setPatientList]=useState([])
  //인증이 됫는지 저장할 state변수
  const [isConfirm, setIsConfirm]=useState(true)
  //인증이 되지 않았다면 form-selector가 보이지 않게하라

  //랜덤 숫자를 이메일로 보내줄 axios
  function sendEmail(data){
    axios
    .post(`/mail/sendMail`, data)
    .then((res)=>{
      console.log('sucess')
    })
    .catch((error)=>{})
  }
  //메일로 온 인증번호와 입력하는 수가 일치하는지 확인할 axios
  function checkNum(){
    axios
    .get(`/mail/checkNum`)
    .then((res)=>{

    })
    .catch((error)=>{})
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
            <button type='button' onClick={(e)=>{sendEmail('lbcy00@gmail.com')}}>인증번호 얻기</button>
            인증번호:<input type='number' name='input'/>
          </div>
          <button type='button' onClick={(e)=>{checkNum()}}>인증하기</button>
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
