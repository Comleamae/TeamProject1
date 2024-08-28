import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { generatePDF } from './utils/pdfUtils' // PDF 유틸리티 함수 가져오기

const PrintForm2 = () => {
  const navigate = useNavigate()
  const [patientOne, setPatientOne] = useState({})
  const [doctorOne, setDoctorOne] = useState({})
  const printRef = useRef(null)

  // 환자 정보 가져오기
  const patNum = JSON.parse(window.sessionStorage.getItem('recoData')).patNum

  useEffect(() => {
    axios
      .post('/patient/getOne', { patNum })
      .then((res) => {
        setPatientOne(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [patNum])

  // 의사 정보 가져오기
  useEffect(() => {
    if (patientOne.docLinum) {
      axios
        .post('/doctor/getOne', { docLinum: patientOne.docLinum })
        .then((res) => {
          setDoctorOne(res.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [patientOne])

  // PDF 생성 함수
  const handlePrint = () => {
    if (printRef.current) {
      generatePDF(printRef.current, '수술확인서.pdf')
        .then(() => {
          console.log('PDF 생성 완료')
        })
        .catch((error) => {
          console.error('PDF 생성 중 오류 발생:', error)
        })
    }
  }

  const { patName, gender, age, citizenNum, addr, disease } = patientOne
  const { dept, docName } = doctorOne

  return (
    <div className='result'>
      <div ref={printRef}>
        <table className='print-table'> 
          <thead>
            <tr>
              <td colSpan={8}><h2>수술확인서</h2></td>
            </tr>
            <tr>
              <td>진료과</td>
              <td colSpan={2}>{dept || 'N/A'}</td>
              <td>작성자</td>
              <td>{docName || 'N/A'}</td>
              <td>일자</td>
              <td colSpan={2}></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5}>병록번호</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>일련번호</td>
              <td></td>
              <td>주민번호</td>
              <td colSpan={6}>{citizenNum || 'N/A'}</td>
            </tr>
            <tr>
              <td>입원과</td>
              <td>{dept || 'N/A'}</td>
              <td>{patName || 'N/A'}호실</td>
              <td>입원날짜</td>
              <td colSpan={4}></td>
            </tr>
            <tr>
              <td>환자성명</td>
              <td>{patName || 'N/A'}</td>
              <td>성별</td>
              <td>{gender || 'N/A'}</td>
              <td>생년월일</td>
              <td>{citizenNum || 'N/A'}</td>
              <td>연령</td>
              <td>{age || 'N/A'}</td>
            </tr>
            <tr>
              <td>환자주소</td>
              <td colSpan={7}>{addr || 'N/A'}</td>
            </tr>
            <tr>
              <td>진단명</td>
              <td colSpan={7}>{disease || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
        <table className='in-date-table'>
          <tbody>
            <tr>
              <td colSpan={8}>
                <div className='footer'>
                  <p>위 환자는 뇌졸증으로 인해 부터 까지 수술을 시행하였음을 확인함</p>
                  <p>수술명:</p>
                  <p>수술일자:</p>
                  <table className='footer-table'>
                    <tbody>
                      <tr>
                        <td>발행일</td>
                        <td>{new Date().toLocaleDateString()}</td>
                      </tr>
                      <tr>
                        <td>의사성명</td>
                        <td>{docName || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td>면허번호</td>
                        <td>{doctorOne.licenseNum || 'N/A'}</td>
                      </tr>
                    </tbody>
                  </table>
                  <h2>그린대학병원장 </h2>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='btn-div'>
        <button type='button' className='btn' onClick={handlePrint}>출력</button>
      </div>
    </div>
  )
}

export default PrintForm2

