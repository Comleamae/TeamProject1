import React from 'react'
import { useNavigate } from 'react-router-dom'

const FormSelector = () => {
  const navigate = useNavigate()
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
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </>
  )
}

export default FormSelector
