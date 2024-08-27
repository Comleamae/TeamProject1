import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//진료비 영수증
const PrintForm4 = ({patNum}) => {

   //불러온 환자 정보를 저장할 변수
   const[patientOne, setPatientOne] = useState({})

   //불러온 의사 정보를 저장할 변수
  const[doctorOne, setDoctorOne] = useState({})

  const navigate = useNavigate()

  useEffect(()=>{
    axios
    .get(`/patient/getOne/${patNum}`)
    .then((res)=>{
      setPatientOne(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  return (
    <div className='result'>
      <table className='print-table'> 
          <tr>
            <td colSpan={11}><h2>진료비 영수증</h2></td>
          </tr>
          <tr>
            <td>성명</td>
            <td colSpan={2}>{patientOne.patName}</td>
            <td>진료기간</td>
            <td colSpan={3}>{patientOne.patDate}</td>
            <td>야간/주말진료</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>진료과목</td>
            <td>{doctorOne.dept}</td>
            <td colSpan={3}>병실</td>
            <td>호</td>
            <td>환자구분</td>
            <td colSpan={4}>일반/입원</td>
          </tr>
          <tr>
            <td>영수증번호</td>
            <td colSpan={4}></td>
            <td>처방여부</td>
            <td colSpan={5}></td>
          </tr>
          <tr>
            <td colSpan={3} rowSpan={3}>항목</td>
            <td colSpan={3}>급여</td>
            <td colSpan={2}>비급여</td>
            <td colSpan={3}>급액산정내용</td>
          </tr>
          <tr>
            <td colSpan={2}>일부본인부담</td>
            <td rowSpan={2}>전액 본인부담</td>
            <td rowSpan={2}>선력 진료료</td>
            <td rowSpan={2}>선력진료료 이외</td>
            <td rowSpan={2}>진료비총액</td>
            <td rowSpan={2} colSpan={2}>{}</td>
          </tr>
          <tr>
            <td>본인부담</td>
            <td>공단부담</td>
          </tr>
          <tr>
            <td rowSpan={9}>기본항목</td>
            <td colSpan={2}>진찰료</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>환자부담총액</td>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td colSpan={2}>입원료</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>이미 납부한금액</td>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td colSpan={2}>식 대</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td rowSpan={4}>납부한 금액</td>
            <td>카 드</td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}>투약 및 조제료</td>
            <td>행위료</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td rowSpan={2}>현 금</td>
            <td rowSpan={2}></td>
            
          </tr>
          <tr>
            <td>약품비</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}>주사료</td>
            <td>행위료</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>            
            <td>합 계</td>  
            <td></td>                       
          </tr>
          <tr>
            <td>약품비</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>                       
            <td colSpan={2}>납부하지 않은 금액</td>  
            <td></td> 
          </tr>
          <tr>
            <td colSpan={2}>마취료</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>                        
            <td colSpan={3}>현금영수증 여부</td>   
          </tr>
          <tr>
            <td colSpan={2}>검사료</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>            
            <td colSpan={3} rowSpan={4}></td> 
          </tr>
          <tr>
            <td rowSpan={2}>선택항목</td>
            <td>영상 진단료</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>            
            <td></td>              
          </tr>
          <tr>
            <td>기 타</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>            
            <td></td>                     
          </tr>
          <tr>
            <td>합계</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>            
            <td></td>            
            <td></td>   
          </tr>
          <tr>
            <td>사업자등록번호</td>
            <td colSpan={2}></td>
            <td>상호</td>
            <td colSpan={3}></td>
            <td>전화번호</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>사업장 소재지</td>
            <td colSpan={6}></td>
            <td>대표자</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td colSpan={5}>항목별 설명</td>
            <td colSpan={6}>일반사항 안내</td>
          </tr>
          <tr>
          <td colSpan={5}>
           
          </td>
          <td colSpan={6}></td>
          </tr>
        </table>
        <div className='btn-div'>
          <button type='button' className='btn' onClick={(e)=>{navigate('/user')}}>출력</button>
        </div>
    </div>
  )
}

export default PrintForm4
