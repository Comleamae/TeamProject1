import React from 'react'
import { useNavigate } from 'react-router-dom'

const FormSelector = () => {
  const navigate = useNavigate()
  return (
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
   
  )
}

export default FormSelector
