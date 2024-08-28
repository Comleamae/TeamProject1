import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { generatePDF } from './utils/pdfUtils'

const PrintForm = () => {
 
  const [patientOne, setPatientOne] = useState({})
  //pdf 생성을 시작하는 지 여부를 담당하는 변수
  const [isGenerating, setIsGenerating] = useState(false)
  const printRef = useRef(null)

  // 환자 정보 가져오기
  const patNum = JSON.parse(window.sessionStorage.getItem('recoData')).patNum

  useEffect(()=>{
    axios
    .post(`/patient/getOne`, patNum)
    .then((res)=>{
      console.log(res)
      setPatientOne(res.data)
    })
    .catch((error)=>{
      console.log('환자정보 가져오는 중에 실패', error)
    })
  }, [patientOne])

  // PDF 생성 및 다운로드
  const handlePrint = () => {
    setIsGenerating(true)
    if (printRef.current) {
      generatePDF(printRef.current, '진료확인서.pdf')
        .then(() => {
          setIsGenerating(false)
        })
        .catch((error) => {
          console.error('PDF 생성 중 오류 발생:', error)
          setIsGenerating(false)
        })
    }
  }

  return (
    <div className='result'>
      <div ref={printRef}>
        <table className='print-table'> 
          <thead>
            <tr>
              <td colSpan={6}><h2>진료확인서</h2></td>
            </tr>
            <tr>
              <td>성명</td>
              <td>{patientOne.patName || 'N/A'}</td>
              <td>성별</td>
              <td>{patientOne.gender || 'N/A'}</td>
              <td>연령</td>
              <td>{patientOne.age || 'N/A'}</td>
            </tr>
            <tr>
              <td>주민등록번호</td>
              <td colSpan={5}>{patientOne.citizenNum || 'N/A'}</td>
            </tr>
            <tr>
              <td>주소</td>
              <td colSpan={5}>{patientOne.address || 'N/A'}</td>
            </tr>
            <tr>
              <td>병명</td>
              <td colSpan={5}>{patientOne.disease || 'N/A'}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6}>
                <div>
                  <table className='in-date-table'>
                    <tbody>
                      <tr>
                        <td rowSpan={2}>입 원</td>
                        <td colSpan={5}>{'N/A'} 부터</td>
                      </tr>
                      <tr>
                        <td colSpan={5}>{'N/A'} 까지(일간)</td>
                      </tr>
                      <tr>
                        <td rowSpan={3}>통 원</td>
                        <td colSpan={5}>{'N/A'} 부터</td>
                      </tr>
                      <tr>
                        <td colSpan={5}>{'N/A'} 까지( 일간)</td>
                      </tr>
                      <tr>
                        <td>총 일간</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <table>
                    {/* 추가 내용 */}
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>
                <table className='in-text-table'>
                  <tbody>
                    <tr>
                      <td colSpan={6}>상기와 같이 진료 받았음을 확인함</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>발행일:{new Date().toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <td>요양기관명:</td>
                      <td>그린 대학 병원</td>
                    </tr>
                    <tr>
                      <td>주소:</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>의사 면허번호:</td>
                      <td></td>
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
                  </tbody>
                </table>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {!isGenerating && (
        <div className='btn-div'>
          <button type='button' className='btn' onClick={handlePrint}>출력</button>
        </div>
      )}
    </div>
  )
}

export default PrintForm
