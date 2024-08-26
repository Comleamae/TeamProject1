import React, { useEffect, useState } from 'react'
import './ClinicPrint.css'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import FormSelector from './FormSelector'

const ClinicPrint = ({isLogin, setIsLogin}) => {
  const navigate = useNavigate()
  //인증번호를 저장할 statue변수
  const[inputNum, setInputNum] = useState(0)
  //인증이 됫는지 저장할 state변수
  const [isConfirm, setIsConfirm]=useState(false)
  //입력받은 이메일 정보를 저장할 변수
  const [inputMailAddress, setInputMailaddress] = useState('')
  //인증된 사람의 환자번호를 저장할 변수
  const[patNum, setPatNum]=useState(0)
  
  //변하는 데이터를 변수에 저장할 함수
  function changeData(e){
    setInputMailaddress(e.target.value)
  }
  function changeNum(e){
    setInputNum(e.target.value)
  }
  //랜덤 숫자를 이메일로 보내줄 axios
  function sendEmail(inputMailAddress){
    axios
    .post(`/mail/sendMail`, {email:inputMailAddress})
    .then((res)=>{
      console.log('sucess')
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  //메일로 온 인증번호와 입력하는 수가 일치하는지 확인할 axios
  function checkNum(inputNum){
    axios
    .post(`/mail/checkNum`,{num:inputNum})
    .then((res)=>{
      res.data==true?
      setIsConfirm(false)
      :
      setIsConfirm(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  // 전체 환자 리스트에 해당 이메일을 가지고 있는 사람이 있는지 확인
  useEffect(()=>{
    axios
    .get(`/patient/getList/${inputMailAddress}`)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <div className='app-content-div'>
      {
        isLogin
        ?
        <div className='selfDefWhenOnLogin'>
        <div>
          <h2>회원발급</h2>
          <button type='button' onClick={(e)=>
            {sendEmail(`회원의 이메일`)}}>인증번호 얻기</button>
          <p>인증번호:<input type='number' name='input'/></p>          
          </div>
          <button type='button' onClick={(e)=>{checkNum()}}>인증하기</button>
          {
            isConfirm==false
            ?
            null
            :
            <FormSelector/>
          }
        </div>
        :
        <div className='selfDefWhenNotLogin'>
          <h2>비회원 발급</h2>
          <p>이메일 입력: <input type='text' name='toSendM' onChange={(e)=>{changeData(e)}}/></p>
          <button type='button' onClick={(e)=>
          {sendEmail(inputMailAddress)}}>인증번호 얻기</button>
          <p>인증번호:<input type='number' name='inputNum' onChange={(e)=>{changeNum(e)}}/></p>
          <button type='button' onClick={(e)=>{checkNum(inputNum)}}>인증하기</button>
            {
              isConfirm==false
              ?
              null
              :
              <FormSelector/>
            }
        </div>
      }
      <Outlet/>
    </div>
  )
}

export default ClinicPrint
