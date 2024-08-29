import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const FormSelector = ({recoData, setRecoData}) => {
  //환자의 진료 기록을 받아서 저장할 변수
  const[treList, setTreList]=useState([])

  //선택한 날짜를 담을 변수
  const[selectData, setSelectData]=useState({
    patNum:1
    , treDate:''
  })

  //선택된 날짜를 변경할 함수
  function handleChangeData(e){
    setSelectData({
      ...selectData,
      treDate:e.target.value
    })
    console.log(selectData)
  }


  const navigate = useNavigate()
  //해당 환자가 받았던 진료 기록의 리스트를 받아올것
  useEffect(()=>{
    axios
    .post(`/patient/treList`, recoData)
    .then((res)=>{
      console.log(res)
      setTreList(res.data)
    })
    .catch((error)=>{
      console.log('진료기록리스트에서 에러', error)
    })
  },[])

  return (
    <>
      <div className='form-selector'>
        <div onClick={(e)=>{navigate(`/user/clinicPrint/printForm/${selectData.patNum}`)}}>
          진료확인서
        </div>
        <div onClick={(e)=>{navigate(`/user/clinicPrint/printForm2/${selectData.patNum}`)}}>
          수술확인서
        </div>
        <div onClick={(e)=>{navigate(`/user/clinicPrint/printForm3/${selectData.patNum}`)}}>
          처방전
        </div>
        <div onClick={(e)=>{navigate(`/user/clinicPrint/printForm4/${selectData.patNum}`)}}>
          영수증
        </div>
      </div>
      <div className='date-selector'>
        {/* 반복돌려서 하나씩 진료 날짜를 넣어줄 것*/}
        <p>출력을 원하는 진료 날짜</p>
        {/* 선택된 날짜의 데이터를 변수에 넣어서 outlet으로 보내자*/}
        <select name='treDate' onChange={(e)=>{handleChangeData(e)}}>
          {
            treList.map((treOne,i)=>{
              return(
                <option key={i} value={1}>{treOne.treatList[0].treDate}</option>
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
