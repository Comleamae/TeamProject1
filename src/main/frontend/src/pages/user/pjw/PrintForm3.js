import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { generatePDF } from './utils/pdfUtils' // 유틸리티 함수 import

const PrintForm3 = ({ patNum }) => {
  const navigate = useNavigate()
  const printRef = useRef(null) // printRef를 사용하여 PDF를 생성할 요소를 참조
  const [patientOne, setPatientOne] = useState({})
  const [doctorOne, setDoctorOne] = useState({})

  useEffect(() => {
    axios
      .get(`/patient/getOne/${patNum}`)
      .then((res) => {
        setPatientOne(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [patNum])

  useEffect(() => {
    axios
      .get(`/doctor/getOne`)
      .then((res) => {
        setDoctorOne(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // PDF 생성 함수
  const handlePrint = async () => {
    if (printRef.current) {
      try {
        await generatePDF(printRef.current, '처방전.pdf')
      } catch (error) {
        console.error('PDF 생성 중 오류 발생:', error)
      }
    }
  }

  return (
    <div className='result'>
      <div ref={printRef}>
        <table className='print-table'> 
          <tbody>
            <tr>
              <td colSpan={6}><h2>처방전</h2></td>
            </tr>
            <tr>
              <td>교부번호</td>
              <td>{/* 교부번호 데이터 */}</td>
              <td>제 {/* 제 호 */}</td>
              <td rowSpan={3}>의료기관</td>
              <td>명칭</td>
              <td>{/* 의료기관 명칭 */}</td>
            </tr>
            <tr>
              <td rowSpan={2}>환자</td>
              <td>성명</td>
              <td>{patientOne.patName || 'N/A'}</td>
              <td>전화</td>
              <td>{patientOne.phone || 'N/A'}</td>
            </tr>
            <tr>
              <td>주민등록번호</td>
              <td>{patientOne.citizenNum || 'N/A'}</td>
              <td>email</td>
              <td>{patientOne.email || 'N/A'}</td>
            </tr>
            <tr>
              <td rowSpan={2}>질병코드</td>
              <td>{patientOne.diseaseCode || 'N/A'}</td>
              <td rowSpan={2}>처방의료인 성명</td>
              <td>의사 이름</td>
              <td>{doctorOne.name || 'N/A'}</td>
              <td>면허종별</td>
              <td>{doctorOne.licenseType || 'N/A'}</td>
            </tr>
            <tr>
              <td>{patientOne.diseaseCode || 'N/A'}</td>
              <td>서명 또는 날인</td>
              <td>면허번호</td>
              <td>{doctorOne.licenseNumber || 'N/A'}</td>
            </tr>
            <tr>
              <td colSpan={6}><h4>*환자의 요구가 있는 때에는 질병분류기호를 기재하지 아니합니다.</h4></td>
            </tr>
            <tr>
              <td colSpan={2}>처방 의약품의 명칭</td>
              <td>1회 투여량</td>
              <td>1회 투여횟수</td>
              <td>투약일수</td>
              <td colSpan={2}>용별</td>
            </tr>
            {/* 반복문으로 약 정보를 가져와서 넣어줘 */}
            <tr>
              <td>사용기간</td>
              <td colSpan={2}>교부일로부터 3일간</td>
              <td colSpan={4}>*사용기간내에 약국에 제출하여야 합니다</td>
            </tr>
            <tr>
              <td colSpan={6}>의약품 조재 내역</td>
            </tr>
            <tr>
              <td rowSpan={4}>조제내역</td>
              <td>조제기관의 명칭</td>
              <td>{/* 조제기관 명칭 */}</td>
              <td colSpan={4}>처방의 변경.수정.확인대체세 그 내용 등</td>
            </tr>
            <tr>
              <td>조제약사 성명</td>
              <td>{/* 조제약사 성명 */}</td>
              <td rowSpan={3} colSpan={5}></td>
            </tr>
            <tr>
              <td>조 제 량</td>
              <td>{/* 조제량 */}</td>
            </tr>
            <tr>
              <td>조 제 년 월 일</td>
              <td>{/* 조제 날짜 */}</td>
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

export default PrintForm3
