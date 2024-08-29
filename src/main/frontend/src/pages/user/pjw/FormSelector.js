import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const FormSelector = ({recoData, setRecoData}) => {
  //환자의 진료 기록을 받아서 저장할 변수
  const[treList, setTreList]= useState([])


  const navigate = useNavigate()
  //해당 환자가 받았던 진료 기록의 리스트를 받아올것
  useEffect(()=>{
    axios
    .post(`/patient/treList`, recoData)
    .then((res)=>{
      console.log(res.data)
      setTreList(res.data)
    })
    .catch((error)=>{
      console.log('진료기록리스트에서 에러', error)
    })
  },[])

  return (
    <>
      <div className='form-selector'>
        <div onClick={(e)=>{navigate('/user/clinicPrint/printForm')}}>
          진료확인서
        </div>
        <div onClick={(e)=>{navigate('/user/clinicPrint/printForm2')}}>
          수술확인서
        </div>
        <div onClick={(e)=>{navigate('/user/clinicPrint/printForm3')}}>
          처방전
        </div>
        <div onClick={(e)=>{navigate('/user/clinicPrint/printForm4')}}>
          영수증
        </div>
      </div>
      <div className='date-selector'>
        {/* 반복돌려서 하나씩 진료 날짜를 넣어줄 것*/}
        <p>출력을 원하는 진료 날짜</p>
        <select name='treDate'>
          {
            treList.map((treOne,i)=>{
              return(
                <option key={i}>{}</option>
              )
            })
          }
        </select>
        <Outlet/>
      </div>
    </>
  )
}

export default FormSelector
