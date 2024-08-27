import React, { useEffect, useState } from 'react'
import './ClinicPrint.css'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
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
 
  //이메일 발송 후에 창을 바꿔줄 변수
  const[inputStatus, setInputStatus]=useState(false)
  
  //변하는 데이터를 변수에 저장할 함수
  function changeData(e){
    setInputMailaddress(e.target.value)
  }

  function changeNum(e){
    setInputNum(e.target.value)
  }
  //인증 후에 session에 해당정보를 저장하자
  const[recoData, setRecoData]=useState({
    recoNum:0
    , patNum:0
  })


  //랜덤 숫자를 이메일로 보내줄 axios
  function sendEmail(inputMailAddress){
    if(inputMailAddress==""){
      alert("이메일을 입력하세요")
      return
    }
    axios
    .post(`/mail/sendMail`, {email:inputMailAddress})
    .then((res)=>{
      alert('이메일을 발송했습니다')
      setInputStatus(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  //메일로 온 인증번호와 입력하는 수가 일치하는지 확인할 axios
  function checkNum(inputNum){
    if(inputNum==""){
      alert('인증번호를 입력하세요')
      return 
    }

    axios
    .post(`/mail/checkNum`,{num:inputNum})
    .then((res)=>{
      if(res.data==true){
        alert("인증번호를 확인해주세요")
        setIsConfirm(false)
      }
      else{
        alert("인증되었습니다")
        //session에 인증 정보를 저장하기 위한 객체 생성
        const recoData ={
          recoNum:{num:inputNum}
          , patNum:1
        }
        const json_recoData = JSON.stringify(recoData)
        window.sessionStorage.setItem('recoData', json_recoData)
        setRecoData(recoData)
        setIsConfirm(true)
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  // 전체 환자 리스트에 해당 이메일을 가지고 있는 사람이 있는지 확인
  useEffect(()=>{
    axios
    .post(`/patient/getList`, {patEmail:inputMailAddress})
    .then((res)=>{
      console.log(res)
      setInputNum(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [inputMailAddress])

  // 받아온 
 
  return (
    <div className='app-content-div'>
      {
        isLogin
        ?
        <div className='selfDefWhenLogin'>
        <div>
          <h2>회원발급</h2>
          <button type='button' onClick={(e)=>
            {sendEmail(`회원의 이메일`)}}>인증번호 얻기</button>
          <p>인증번호:<input type='number' name='input'/></p>          
          </div>
          <button type='button' 
            onClick={(e)=>{checkNum()}}>인증하기</button>
          {
            isConfirm==false
            ?
            null
            :
            <FormSelector/>
          }
        </div>
        :
        <div className='selfDefWhenLogin'>
          <h2>비회원 발급</h2>
          {
            inputStatus==false
            ?
            <div>
              이메일 입력: <input type='text' name='toSendM' onChange={(e)=>{changeData(e)}}/><button type='button' onClick={(e)=>
                {sendEmail(inputMailAddress)}}>인증번호 얻기</button>
            </div>
            :
            <div>
              인증번호: <input type='number' name='inputNum' onChange={(e)=>{changeNum(e)}}/><button type='button' onClick={(e)=>{checkNum(inputNum)}}>인증하기</button>
            </div>
          }
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
