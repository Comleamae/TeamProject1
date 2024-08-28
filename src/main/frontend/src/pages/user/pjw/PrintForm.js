import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//진료확인서

const PrintForm = () => {
  
  const navigate = useNavigate()
  //불러온 환자 정보를 저장할 변수
  const[patientOne, setPatientOne] = useState({})

  //불러온 의사 정보를 저장할 변수
  const[doctorOne, setDoctorOne] = useState([])

  useEffect(()=>{
    axios
    .post(`/patient/getOne`, )
    .then((res)=>{
      setPatientOne(res.data)
    })
    .catch((error)=>{
      console.log('환자정보 받아오는데서 에러', error)
    })
  }, [])

  
  return (
    <div className='result'>
      <table className='print-table'> 
         <thead>
            <tr>
              <td colSpan={6}><h2>진료확인서</h2></td>
            </tr>
            <tr>
              <td>성명</td>
              <td>{patientOne.patName}</td>
              <td>성별</td>
              <td>{patientOne.gender}</td>
              <td>연령</td>
              <td>{patientOne.age}</td>
            </tr>
            <tr>
              <td>주민등록번호</td>
              <td colSpan={5}>{patientOne.citizenNum}</td>
            </tr>
            <tr>
              <td>주소</td>
              <td colSpan={5}>{patientOne.address}</td>
            </tr>
            <tr>
              <td>병명</td>
              <td colSpan={3}>{patientOne.disease}</td>
            </tr>
         </thead>
        <tbody>
            <tr>
              <td colSpan={6}>
                <div>
                  <div>
                    <table className='in-date-table'>
                      <tr>
                        <td rowSpan={2}>입 원</td>
                        {/* <td colSpan={5}>{patientOne.dateVO.inHopi}부터</td> */}
                      </tr>
                      <tr>
                        {/* <td colSpan={5}>{patientOne.dateVO.outHopi}까지(일간)</td> */}
                      </tr>
                      <tr>
                        <td rowSpan={3}>통 원</td>
                        <td colSpan={5}>년 월 일부터( 일간)</td>
                      </tr>
                      <tr>
                        <td colSpan={5}>년 월 일까지( 일간)</td>
                      </tr>
                      <tr>
                        <td>총 일간</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <table>
                      
                    </table>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
                  <table className='in-text-table'>
                    <tr>
                      <td colSpan={6}>상기와 같이 진료 받았음을 확인함</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>발행일: {new Date().toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <td>요양기관명:</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>주소:</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>의사 면허번호:</td>
                      <td>{}</td>
                    </tr>
                    <tr>
                      <td>원 장:</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>전화번호:</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <h2>그린대학병원</h2>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tfoot>

        </table>
        <div className='btn-div'>
          <button type='button' className='btn' onClick={(e)=>{navigate('/user')}}>출력</button>
        </div>
    </div>
  )
}

export default PrintForm
