import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { generatePDF } from './utils/pdfUtils' // PDF 유틸리티 함수 가져오기

const PrintForm4 = ({ patNum }) => {
  const [patientOne, setPatientOne] = useState({})
  const [doctorOne, setDoctorOne] = useState({})
  const navigate = useNavigate()
  const printRef = useRef(null)

  useEffect(() => {
    axios
      .get(`/patient/getOne/${patNum}`)
      .then((res) => {
        setPatientOne(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [patNum])

  const handlePrint = () => {
    if (printRef.current) {
      generatePDF(printRef.current, '진료비_영수증.pdf')
        .then(() => {
          console.log('PDF 생성 완료')
        })
        .catch((error) => {
          console.error('PDF 생성 중 오류 발생:', error)
        })
    }
  }

  const { patName, patDate } = patientOne
  const { dept } = doctorOne

  return (
    <div className='result'>
      <div ref={printRef}>
        <table className='print-table'> 
          <thead>
            <tr>
              <td colSpan={11}><h2>진료비 영수증</h2></td>
            </tr>
            <tr>
              <td>성명</td>
              <td colSpan={2}>{patName || 'N/A'}</td>
              <td>진료기간</td>
              <td colSpan={3}>{patDate || 'N/A'}</td>
              <td>야간/주말진료</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>진료과목</td>
              <td>{dept || 'N/A'}</td>
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
              <td rowSpan={2}>선택 진료비</td>
              <td rowSpan={2}>선택 진료비 이외</td>
              <td rowSpan={2}>진료비총액</td>
              <td rowSpan={2} colSpan={2}></td>
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
              <td>이미 납부한 금액</td>
              <td colSpan={2}></td>
            </tr>
            <tr>
              <td colSpan={2}>식대</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td rowSpan={4}>납부한 금액</td>
              <td>카드</td>
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
              <td rowSpan={2}>현금</td>
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
              <td>합계</td>
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
              <td colSpan={3} rowSpan={4}>발행일:{new Date().toLocaleDateString()}</td>
            </tr>
            <tr>
              <td rowSpan={2}>선택항목</td>
              <td>영상 진단료</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>기타</td>
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
              <td colSpan={5}></td>
              <td colSpan={6}></td>
            </tr>
          </thead>
        </table>
      </div>
      <div className='btn-div'>
        <button type='button' className='btn' onClick={handlePrint}>출력</button>
      </div>
    </div>
  )
}

export default PrintForm4

